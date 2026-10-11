
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

// Shared Components
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Marque from "./components/homepage/Marque";

// React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "বাজার দর | বাংলাদেশের নিত্যপণ্যের বাজারদর",
  description:
    "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ বাজারদর ও বাজারভিত্তিক মূল্য তুলনা দেখুন।",
};

// Root Layout
export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">

        {/* Header with Loading Fallback */}
        <Suspense
          fallback={
            <div className="border-b border-slate-200 bg-white">
              <div className="mx-auto flex max-w-6xl animate-pulse items-center gap-3 px-4 py-4">
                <div className="size-11 rounded-xl bg-emerald-100" />
                <div className="space-y-2">
                  <div className="h-5 w-28 rounded bg-slate-200" />
                  <div className="h-3 w-36 rounded bg-slate-100" />
                </div>
                <div className="ml-auto h-9 w-24 rounded-lg bg-slate-200" />
              </div>
              <div className="h-12 border-t border-slate-100 bg-slate-50" />
            </div>
          }
        >
          <Header />
        </Suspense>

        {/* Marquee with Loading Fallback */}
        <Suspense
          fallback={
            <div className="h-10 w-full animate-pulse bg-emerald-50" />
          }
        >
          <Marque />
        </Suspense>

        {/* Dynamic Page Content */}
        {children}

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="light"
        />

      </body>
    </html>
  );
}
