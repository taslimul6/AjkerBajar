import Link from 'next/link';
import React from 'react';



const categroyList = async ()=>{
    const res = await fetch ("https://api.api-store.workers.dev/api/bazardor/categories");
    const data = await res.json();
    return data;
}

const Header = async () => {
  const categories = await categroyList();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      {/* Logo and Authentication Buttons */}
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3">
        {/* Website Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="বাজার দর হোমপেজ"
        >
          <span
            className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-600 text-2xl text-white"
            aria-hidden="true"
          >
            🛒
          </span>

          <span className="leading-tight">
            <span className="block text-xl font-bold tracking-tight">
              বাজার দর
            </span>
            <span className="block text-xs text-slate-500">
              বৃহস্পতিবার, ৮ অক্টোবর, ২০২৬
            </span>
          </span>
        </Link>

        {/* Sign In and Sign Up Buttons */}
        <div className="ms-auto flex items-center gap-2">
          <Link
            href="/signin"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

      {/* Category Navigation */}
      <nav
        aria-label="পণ্য ক্যাটাগরি"
        className="border-t border-slate-100 bg-white"
      >
        <ul className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-4 py-2 text-sm">
        
        {categories.map((category) => ( <li key={category.id} className="shrink-0">
            <Link
              href={`/category/${category.slug}`}
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
            >
              <span aria-hidden="true">{category.icon}</span>
              {category.nameBn}
            </Link>
          </li>))}

         

       

    
        </ul>
      </nav>
    </header>
  );
};

export default Header;