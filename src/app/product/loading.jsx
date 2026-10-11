
const Loading = () => {
  return (
    <main
      className="flex-1 bg-slate-50/50"
      aria-label="পেজ লোড হচ্ছে"
      aria-busy="true"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-8 animate-pulse">

        {/* Page Title Skeleton */}
        <div className="mb-8 space-y-3">
          <div className="h-8 w-64 max-w-full rounded-lg bg-slate-200" />
          <div className="h-4 w-96 max-w-full rounded bg-slate-100" />
        </div>

        {/* Statistics Skeleton */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">

          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 size-10 rounded-xl bg-emerald-100" />

              <div className="mb-2 h-3 w-24 rounded bg-slate-100" />

              <div className="h-7 w-20 rounded bg-slate-200" />
            </div>
          ))}

        </div>

        {/* Content Header Skeleton */}
        <div className="mb-5 flex items-center justify-between gap-4">

          <div className="h-7 w-44 rounded-lg bg-slate-200" />

          <div className="h-9 w-28 rounded-lg bg-slate-200" />

        </div>

        {/* Product Cards Skeleton */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >

              {/* Product Icon and Status */}
              <div className="mb-5 flex items-start justify-between">

                <div className="size-14 rounded-xl bg-emerald-50" />

                <div className="h-6 w-20 rounded-full bg-slate-100" />

              </div>

              {/* Product Name */}
              <div className="mb-3 h-5 w-36 rounded bg-slate-200" />

              {/* Product Category */}
              <div className="mb-6 h-3 w-24 rounded bg-slate-100" />

              {/* Product Price */}
              <div className="mb-3 flex items-center gap-3">

                <div className="h-8 w-28 rounded bg-slate-200" />

                <div className="h-5 w-14 rounded bg-emerald-100" />

              </div>

              {/* Card Divider */}
              <div className="my-4 h-px bg-slate-100" />

              {/* Card Footer */}
              <div className="flex items-center justify-between">

                <div className="h-3 w-24 rounded bg-slate-100" />

                <div className="h-3 w-16 rounded bg-slate-200" />

              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
};

export default Loading;
