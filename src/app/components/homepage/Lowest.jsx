
import React from 'react';
import ProductCard from '../shared/ProductCard';


const products = async () => {
    "use cache";
    const res = await fetch(`${process.env.BAZAR}/api/bazardor/products`);
    const data = await res.json();
    return data;
}


const Lowest = async () => {


    const allProducts = await products();

    const lowest = allProducts.filter(product => product.change.dir === "down").sort((a, b) => a.change.pct - b.change.pct).slice(0, 6);


    return (

        <section aria-labelledby="prices-down">
            <div className="mb-4 flex items-center gap-2.5">
                <span
                    className="grid size-8 place-items-center rounded-lg bg-green-50 text-green-600"
                    aria-hidden="true"
                >
                    ▼
                </span>
                <h2 id="prices-down" className="text-xl font-bold">
                   
আজ দাম কমেছে
                </h2>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {lowest.map((lowest) => (
                    <li key={lowest.id}>
                        <ProductCard product={lowest} />
                    </li>
                ))}



            </ul>
        </section>

    );
};

export default Lowest;