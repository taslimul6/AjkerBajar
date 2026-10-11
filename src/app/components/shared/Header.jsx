
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";

import UserInfo from "./UserInfo";
import CategoryNav from "./CategoryNav";

// Fetch All Product Categories
const categroyList = async () => {
  "use cache";

  const baseURL = process.env.BAZAR.replace(/\/+$/, "");

  const res = await fetch(
    `${baseURL}/api/bazardor/categories`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();

  return data;
};

// Dynamic Bengali Date
const TodayDate = async () => {
  await connection();

  const today = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  return (
    <span className="block text-xs text-slate-500">
      {today}
    </span>
  );
};

// Website Header
const Header = async () => {
  const categories = await categroyList();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">

      {/* Logo and Authentication Section */}
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

          {/* Website Name and Current Date */}
          <span className="leading-tight">

            {/* Brand Name */}
            <span className="block text-xl font-bold tracking-tight">
              বাজার দর
            </span>

            {/* Dynamic Bengali Date */}
            <Suspense
              fallback={
                <span className="block text-xs text-slate-500">
                  তারিখ লোড হচ্ছে...
                </span>
              }
            >
              <TodayDate />
            </Suspense>

          </span>
        </Link>

        {/* User Authentication */}
        <UserInfo />

      </div>

      {/* Category Navigation with Active Route */}
      <Suspense
        fallback={
          <div className="h-14 border-t border-slate-100 bg-white" />
        }
      >
        <CategoryNav categories={categories} />
      </Suspense>

    </header>
  );
};

export default Header;
