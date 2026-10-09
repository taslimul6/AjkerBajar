import React from 'react';


 const Hero = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
            return (
                <section
                    aria-labelledby="hero-heading"
                    className="overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50 via-white to-teal-50"
                >
                    <div className="flex flex-col items-center gap-6 px-6 py-10 sm:px-9 lg:flex-row lg:justify-between lg:px-12">
                        <div className="max-w-xl">
                            <p className="mb-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                               {formattedDate}
                            </p>

                            <h1
                                id="hero-heading"
                                className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
                            >
                                আজকের বাজারের দাম এক নজরে
                            </h1>

                            <p className="mt-4 leading-7 text-slate-600">
                                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                                বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                                দামের পরিবর্তন এক জায়গায়।
                            </p>

                            <a
                                href="#all-products"
                                className="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                            >
                                সব পণ্য দেখুন
                                <span className="ms-2" aria-hidden="true">
                                    ↓
                                </span>
                            </a>
                        </div>

                        {/* Decorative grocery basket: no external images or icon libraries. */}
                        <div
                            className="relative grid h-56 w-full max-w-xs shrink-0 place-items-center rounded-3xl bg-white/55 sm:h-64 sm:max-w-sm"
                            aria-hidden="true"
                        >
                            <span className="absolute top-5 start-12 -rotate-12 text-5xl">
                                🥬
                            </span>

                            <span className="absolute top-10 end-10 rotate-12 text-5xl">
                                🍅
                            </span>

                            <span className="absolute top-23 end-3 -rotate-12 text-5xl">
                                🥕
                            </span>

                            <span className="absolute bottom-8 start-5 rotate-12 text-5xl">
                                🍆
                            </span>

                            <span className="relative z-10 text-8xl drop-shadow-xl sm:text-9xl">
                                🧺
                            </span>
                        </div>
                    </div>
                </section>
            );
        };


export default Hero;