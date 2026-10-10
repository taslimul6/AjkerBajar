import React from 'react';
import ProductList from '../shared/ProductList';

const productData = async () => {
    "use cache";
    const res = await fetch(`${process.env.BAZAR}/api/bazardor/products`);
    const data = await res.json();
    return data;
}

const AllProduct = async() => {

    const products = await productData();

    return (
        <div>

            <h2 id="all-products-heading" className="text-xl font-bold">সব পণ্য</h2>

            <ProductList products={products} />
            
        </div>
    );
};

export default AllProduct;