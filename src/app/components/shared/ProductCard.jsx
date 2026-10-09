import Link from 'next/link';
import React from 'react';

const ProductCard = ({product}) => {
    return (
        
            <Link
                href={`/product/${product.id}`}
                className="group block h-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
                <div className="flex items-start gap-3">
                    <span
                        className="grid size-12 shrink-0 place-items-center rounded-xl bg-slate-100 text-2xl"
                        aria-hidden="true"
                    >
                        
                        {product.image}
                    </span>
                    <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold text-slate-900 group-hover:text-emerald-700">
                            {product.nameBn}
                        </h3>
                        <p className="mt-0.5 text-xs text-slate-500">
                            
                            {product.unit === "kg" ? "প্রতি কেজি" : product.unit === "litre" ? "প্রতি লিটার" : product.unit === "piece" ? "প্রতি পিস" : product.unit === "dozen" ? "প্রতি ডজন": ""}  
                            
                            </p>
                    </div>
                </div>
                <div className="mt-4 flex items-end justify-between gap-2">
                    <div>
                        <p className="mb-1 text-xs text-slate-500">আজকের দাম</p>
                        <p className="text-xl font-bold text-slate-950">
                            {Number(product.today).toLocaleString("bn-BD")} <span className="text-sm font-medium text-slate-700">টাকা</span>
                        </p>
                    </div>
                    <span
                        className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${product?.change?.dir === "up" ? "bg-rose-50 text-rose-700 ring-rose-100" : product?.change?.dir === "down" ? "bg-green-50 text-green-700 ring-green-100" : ""}`}
                        
                    >

                        {product?.change?.dir === "up" ? "▲" : product?.change?.dir === "down" ? "▼" : ""} {Number(product?.change?.pct).toLocaleString("bn-BD")}%
                        
                    </span>
                </div>
            </Link>
        
    );
};

export default ProductCard;