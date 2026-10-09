import Link from 'next/link';
import React from 'react';
import ProductCard from '../shared/ProductCard';


const products = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data = await res.json();
    return data;
}


const Highest = async () => {


    const allProducts = await products();

    const highest = allProducts.filter(product => product.change.dir === "up").sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);


    return (

        <section aria-labelledby="prices-up">
            <div className="mb-4 flex items-center gap-2.5">
                <span
                    className="grid size-8 place-items-center rounded-lg bg-rose-50 text-rose-600"
                    aria-hidden="true"
                >
                    ▲
                </span>
                <h2 id="prices-up" className="text-xl font-bold">
                    আজ দাম বেড়েছে
                </h2>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {highest.map((highest) => (
                    <li key={highest.id}>
                        <ProductCard product={highest} />
                    </li>
                ))}



            </ul>
        </section>

    );
};

export default Highest;