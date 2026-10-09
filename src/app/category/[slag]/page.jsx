import ProductList from "@/app/components/shared/ProductList";
import React, { Suspense } from "react";

// Async component for fetching category products
const CategoryContent = async ({ params }) => {

    const { slag } = await params;

    const productsData = async () => {
        const res = await fetch(
            `https://api.api-store.workers.dev/api/bazardor/products?category=${slag}`
        );

        const data = await res.json();
        return data;
    };

    const products = await productsData();

    return (
        <>
        <header className="rounded-2xl border border-base-300 bg-base-100 p-5 max-w-6xl mx-auto">
            <div className="flex items-center gap-3">

                <span aria-hidden="true" className="text-4xl">
                    {products[0]?.categoryIcon}
                </span>

                <div>
                    <h1 className="text-2xl font-bold">
                        {products[0]?.categoryNameBn}
                    </h1>

                    <p className="text-sm text-base-content/70">
                        {Number(products.length).toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>

            </div>
        </header>

        <div className="max-w-6xl mx-auto">
             <ProductList products={products} />


        </div>

       




        </>
    );
};

// Main page with Suspense boundary
const Page = ({ params }) => {
    return (
        <div>
            <Suspense fallback={<div>লোড হচ্ছে...</div>}>
                <CategoryContent params={params} />
            </Suspense>
        </div>
    );
};

export default Page;