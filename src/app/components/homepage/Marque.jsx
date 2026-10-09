import React from "react";
import Marquee from "react-fast-marquee";


  const products = async ()=>{
    "use cache";
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const data = await res.json();
    return data;
  }

const Marque = async () => {
  const productsData = await products();

  return (
    <div>
      <div
        className="overflow-hidden border-b border-slate-200 bg-white"
        aria-label="দাম পরিবর্তনের খবর"
      >
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused] motion-reduce:animate-none">

          
          <ul className="flex shrink-0 items-center">

            <Marquee>

            {productsData.map((product) => (<li key={product.id} className="flex shrink-0 items-center gap-2 border-e border-slate-100 px-4 py-2.5 text-sm whitespace-nowrap">
              <span aria-hidden="true">{product.categoryIcon}</span>
              <span className="font-semibold text-slate-800">{product.nameBn}</span>
              <span className="text-slate-500">{Number(product.today).toLocaleString("bn-BD")} টাকা/ কেজি</span>
              <span className={`font-bold ${product.change.dir !== 'up' ? 'text-emerald-700' : 'text-rose-500'}`}> {product.change.dir === 'up' ? "▲" : product.change.dir === 'down' ? "▼" : "-"} {Number(product.change.pct).toLocaleString("bn-BD")}%</span>
              
            </li>))}
            </Marquee>
          </ul>

            


        </div>
      </div>
    </div>
  );
};

export default Marque;