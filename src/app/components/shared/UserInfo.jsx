'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const UserInfo = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;




    return (

        <div className="ms-auto flex items-center gap-2" >

            {user ? <>


                <div className="dropdown dropdown-end">

                    {/* Dropdown Trigger */}
                    <div
                        tabIndex={0}
                        role="button"
                        className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 transition hover:border-emerald-300 hover:bg-emerald-100"
                    >
                        {/* User Avatar */}
                        <span className="grid size-9 place-items-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                            {user.name?.charAt(0).toUpperCase()}
                        </span>

                        {/* User Name */}
                        <span className="max-w-28 truncate text-sm font-semibold text-slate-800">
                            {user.name}
                        </span>

                        {/* Dropdown Arrow */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-emerald-700"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>

                    {/* Dropdown Menu */}
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu z-50 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
                    >

                        {/* User Information */}
                        <li>
                            <div className="flex cursor-default flex-col items-start gap-1 rounded-xl bg-emerald-50 px-3 py-3 hover:bg-emerald-50">
                                <p className="font-semibold text-slate-900">
                                    {user.name}
                                </p>

                                <p className="max-w-full truncate text-xs text-slate-500">
                                    {user.email}
                                </p>
                            </div>
                        </li>

                        {/* Menu Divider */}
                        <li className="my-2 border-t border-slate-100" aria-hidden="true" />

                        {/* Profile Link */}
                        <li>
                            <Link
                                href="/profile"
                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="8" r="4" />
                                    <path d="M5 21a7 7 0 0 1 14 0" />
                                </svg>

                                আমার প্রোফাইল
                            </Link>
                        </li>

                        {/* Sign Out Button */}
                        <li>
                            <button
                                type="button"
                                onClick={async () => {
                                    await authClient.signOut();
                                    redirect("/");
                                }}
                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-rose-600 transition hover:bg-rose-50 hover:text-rose-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1="21" y1="12" x2="9" y2="12" />
                                </svg>

                                সাইন আউট
                            </button>
                        </li>

                    </ul>
                </div>

            </>






                : <div >
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
                </div>}


        </div>

    );
};

export default UserInfo;