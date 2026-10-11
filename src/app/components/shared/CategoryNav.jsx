
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryNav = ({ categories }) => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="পণ্য ক্যাটাগরি"
      className="border-t border-slate-100 bg-white"
    >
      <ul className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-4 py-2 text-sm">

        {categories.map((category) => {
          const href = `/category/${category.slug}`;

          // Check if the current category is active
          const isActive = pathname === href;

          return (
            <li
              key={category.id}
              className="shrink-0"
            >
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 transition ${
                  isActive
                    ? "bg-emerald-800 font-semibold text-white shadow-sm hover:bg-emerald-900"
                    : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                }`}
              >
                {/* Category Icon */}
                <span aria-hidden="true">
                  {category.icon}
                </span>

                {/* Category Name */}
                {category.nameBn}
              </Link>
            </li>
          );
        })}

      </ul>
    </nav>
  );
};

export default CategoryNav;
