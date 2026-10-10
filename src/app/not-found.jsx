
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex-1">

      {/* ==========================================
          404 NOT FOUND PAGE
      ========================================== */}
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center">

        {/* Decorative Basket Icon */}
        <p aria-hidden="true" className="text-6xl">
          🧺
        </p>

        {/* Error Message */}
        <h1 className="text-2xl font-bold">
          পাতাটি খুঁজে পাওয়া যায়নি
        </h1>

        {/* Error Description */}
        <p className="text-base-content/70">
          আপনি যে পণ্য বা পাতাটি খুঁজছেন সেটি সরানো হয়েছে বা কখনো ছিল না।
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-2">

          {/* Back to Homepage */}
          <Link
            href="/"
            className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            হোম পেজে যান
          </Link>

          {/* Market Comparison Page */}
          <Link
            href="/compare"
            className="btn btn-outline"
          >
            বাজার তুলনা দেখুন
          </Link>

        </div>

      </div>
    </main>
  );
};

export default NotFound;
