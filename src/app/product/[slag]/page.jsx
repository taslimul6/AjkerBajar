import Link from 'next/link';
import React, { Suspense } from 'react';

const SingleProduct = async ({params}) => {
    

    const {slag} = await params;

    const productData = async () => {
        const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${slag}`);
        const data = await res.json();
        return data;
    }
    const product = await productData();

   


    return (

        
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6">

             <Suspense fallback={<div>লোড হচ্ছে...</div>}>

            <nav className="breadcrumbs text-sm">
                <ul>
                    <li>
                        <Link href="/">হোম</Link>
                    </li>

                    <li>
                        <Link href={`/category/${product.category}`}>{product.categoryNameBn}</Link>
                    </li>

                    <li>{product.nameBn}</li>
                </ul>
            </nav>

            <header className="rounded-2xl border border-base-300 bg-base-100 p-5">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    {/* <!-- Product Icon --> */}
                    <span
                        aria-hidden="true"
                        className="grid size-20 shrink-0 place-items-center rounded-2xl bg-base-200 text-4xl"
                    >
                        {product.image}
                    </span>

                    {/* <!-- Product Name and Information --> */}
                    <div className="flex-1">

                        <h1 className="text-2xl font-bold sm:text-3xl">
                            {product.nameBn}
                        </h1>

                        <p className="text-sm text-base-content/70">

                        {product.unit === 'kg' ? `প্রতি কেজি · ${product.nameBn}` : product.unit === 'piece' ? `প্রতি পিস · ${product.nameBn}` : product.unit === 'dozen' ? `প্রতি ডজন · ${product.nameBn}` : product.unit === 'litre' ? `প্রতি লিটার · ${product.nameBn}` : `প্রতি ইউনিট · ${product.nameBn}`}
                          
                        </p>

                        {/* <!-- Price Change Description --> */}
                        <p className="mt-2 text-sm text-base-content/70">
                            গতকালের তুলনায় আজ দাম

                            {product.change.dir === "up" ? (
                                <span className="font-semibold text-error">বেড়েছে </span>
                            ) : (
                                <span className="font-semibold text-success">কমেছে </span>
                            )}
                            

                            { Number(product.change.pct).toLocaleString("bn-BD") }%
                          
                        </p>

                    </div>

                    {/* <!-- Current Product Price --> */}
                    <div className="rounded-box bg-base-200 px-5 py-4 text-center">

                        <p className="text-sm text-base-content/70">
                            আজকের দাম
                        </p>

                        <p className="text-3xl font-bold">
                            { Number(product.today).toLocaleString("bn-BD") }
                        </p>

                        <p className="text-sm text-base-content/70">

                        {product.unit === 'kg' ? 'টাকা / কেজি' : product.unit === 'piece' ? 'টাকা / পিস' : product.unit === 'dozen' ? 'টাকা / ডজন' : 'টাকা / ইউনিট'}
                          
                        </p>

                        {/* <!-- Price Increase Indicator --> */}
                        <span
                            className="inline-flex items-center gap-1 font-semibold text-error text-sm"
                            title="বেড়েছে"
                        >
                            <span aria-hidden="true">{product.change.dir === "up" ? "▲" : "▼"}</span>
                            <span>{Number(product.change.pct).toLocaleString("bn-BD")}%</span>
                        </span>

                    </div>

                </div>
            </header>


            <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <div className="flex flex-col gap-6">
                    <section>
                        <h2 className="mb-3 text-lg font-semibold">
                            দামের সারসংক্ষেপ
                        </h2>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <div className="stat rounded-box border border-base-300 bg-base-100">
                                <div className="stat-title">
                                    সর্বনিম্ন দাম
                                </div>

                                <div className="stat-value text-2xl text-success">
                                    {product.markets.reduce((min, market) => market.min < min ? market.min : min, product.markets[0].min).toLocaleString("bn-BD")}

                                   
                                    <span className="text-sm font-medium">টাকা</span>
                                </div>

                                <div className="stat-desc">
                                    সবচেয়ে কম দামের বাজার
                                </div>
                            </div>

                            <div className="stat rounded-box border border-base-300 bg-base-100">
                                <div className="stat-title">
                                    সর্বাধিক দাম
                                </div>

                                <div className="stat-value text-2xl text-error">
                                    {product.markets.reduce((max,market)=>market.max> max ? market.max : max, product.markets[0].max).toLocaleString("bn-BD")}
                                    <span className="text-sm font-medium">টাকা</span>
                                </div>

                                <div className="stat-desc">
                                    সবচেয়ে বেশি দামের বাজার
                                </div>
                            </div>

                            <div className="stat rounded-box border border-base-300 bg-base-100">
                                <div className="stat-title">
                                    গড় দাম
                                </div>

                                <div className="stat-value text-2xl text-primary">
                                    {Number((product.markets.reduce((accumulator , market)=> accumulator +(market.min + market.max)/2, 0)/product.markets.length).toFixed(0)).toLocaleString("bn-BD")}
                                    <span className="text-sm font-medium">টাকা</span>
                                </div>

                                <div className="stat-desc">
                                    প্রতি কেজি-এর হিসাবে
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-3 text-lg font-semibold">
                            বাজারভিত্তিক আজকের দাম
                        </h2>

                        <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th>বাজার</th>
                                        <th>বিভাগ</th>
                                        <th className="text-right">সর্বনিম্ন</th>
                                        <th className="text-right">সর্বাধিক</th>
                                        <th className="text-right">গড়</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {product.markets.map((market, index) => (
                                        <tr key={index}>
                                            <td className="font-medium">{market.market}</td>
                                            <td className="text-base-content/70">{market.division}</td>
                                            <td className="text-right">{market.min} টাকা</td>
                                            <td className="text-right">{market.max} টাকা</td>
                                            <td className="text-right font-semibold">{Number(((market.min + market.max) / 2).toFixed(0)).toLocaleString("bn-BD")} টাকা</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>



        </Suspense>

        </div>
    );
};




export default SingleProduct;
                                

       