'use client';

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const Signup = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());



        const { data, error } = await authClient.signUp.email({ ...user });

        if (data) {
            redirect('/')

        }

        if (error) {

            toast.error(error.message)

        }

    }

    
      const handleGoogle = async () => {
    
        const data = await authClient.signIn.social({
          provider: "google",
        });
    
      }
      
      const handleGit = async () => {
      
          const data = await authClient.signIn.social({
            provider: "github"
          });
      
        }



    return (
        <main className="flex-1">

            <div className="mx-auto flex w-full max-w-md flex-col gap-6 px-4 py-10">


                <header className="text-center">
                    <h1 className="text-2xl font-bold">
                        অ্যাকাউন্ট তৈরি করুন
                    </h1>

                    <p className="mt-1 text-sm text-base-content/70">
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>
                </header>


                <div className="card border border-base-300 bg-base-100">
                    <div className="card-body">

                        <form noValidate className="flex flex-col gap-4" onSubmit={onSubmit}>


                            <label className="form-control w-full">
                                <span className="label-text mb-1 block font-medium">
                                    নাম
                                </span>

                                <input
                                    autoComplete="name"
                                    className="input input-bordered w-full"
                                    placeholder="যেমন: রহিম উদ্দিন"
                                    type="text"
                                    defaultValue=""
                                    name="name"
                                />
                            </label>


                            <label className="form-control w-full">
                                <span className="label-text mb-1 block font-medium">
                                    ইমেইল
                                </span>

                                <input
                                    autoComplete="email"
                                    className="input input-bordered w-full"
                                    placeholder="you@example.com"
                                    type="email"
                                    defaultValue=""
                                    name="email"
                                />
                            </label>

                            <label className="form-control w-full">
                                <span className="label-text mb-1 block font-medium">
                                    পাসওয়ার্ড
                                </span>

                                <input
                                    autoComplete="new-password"
                                    className="input input-bordered w-full"
                                    placeholder="কমপক্ষে ৮ অক্ষর"
                                    type="password"
                                    defaultValue=""
                                    name="password"
                                />
                            </label>


                            <label className="form-control w-full">
                                <span className="label-text mb-1 block font-medium">
                                    পাসওয়ার্ড নিশ্চিত করুন
                                </span>

                                <input
                                    autoComplete="new-password"
                                    className="input input-bordered w-full"
                                    placeholder="আবার লিখুন"
                                    type="password"
                                    defaultValue=""

                                />
                            </label>


                            <button
                                type="submit"
                                className="w-full rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                            >
                                অ্যাকাউন্ট তৈরি করুন
                            </button>

                            <div className="divider my-0 text-xs">
                                অথবা
                            </div>

                            <div className="flex flex-col gap-2 sm:flex-row">

                                {/* Google Authentication Button */}
                                <button onClick={handleGoogle}
                                    type="button"
                                    className="btn btn-outline flex-1"
                                >
                                    <svg
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                        className="size-4"
                                    >
                                        <path
                                            fill="#EA4335"
                                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
                                        />

                                        <path
                                            fill="#4285F4"
                                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65Z"
                                        />

                                        <path
                                            fill="#FBBC05"
                                            d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.94 23.94 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19Z"
                                        />

                                        <path
                                            fill="#34A853"
                                            d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.17 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
                                        />
                                    </svg>

                                    Google দিয়ে চালিয়ে যান
                                </button>

                                {/* GitHub Authentication Button */}
                                <button
                                    onClick={handleGit}
                                    type="button"
                                    className="btn btn-outline flex-1"
                                >
                                    <svg
                                        viewBox="0 0 16 16"
                                        aria-hidden="true"
                                        className="size-4 fill-current"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                                    </svg>

                                    GitHub দিয়ে চালিয়ে যান
                                </button>

                            </div>


                            <p className="text-center text-sm text-base-content/70">
                                অ্যাকাউন্ট আছে?{" "}

                                <Link
                                    className="link  text-green-700"
                                    href="/signin"
                                >
                                    সাইন ইন করুন
                                </Link>
                            </p>

                        </form>
                    </div>
                </div>


                <p className="text-center text-sm text-base-content/60">
                    <Link className="link" href="/">
                        ← হোম পেজে ফিরে যান
                    </Link>
                </p>

            </div>
        </main>
    );
};

export default Signup;