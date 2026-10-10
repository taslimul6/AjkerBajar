
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Profile = () => {
  const router = useRouter();

  // Get the logged-in user's session
  const { data: session, isPending, refetch } = authClient.useSession();

  const user = session?.user;

  // Update user name in the database
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.trim();

    if (!name) return;

    const { error } = await authClient.updateUser({ name });

    if (error) {
      toast.error("Update failed:", error);
      return;
    }

    // Refresh session to display the updated name
    await refetch();
     toast.success("Your name has been updated successfully!");
  };

  // Sign out the logged-in user
  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      console.error("Sign out failed:", error);
      return;
    }

    router.replace("/signin");
  };

  // Show loading state while fetching session
  if (isPending) {
    return (
      <main className="flex-1 py-16 text-center">
        প্রোফাইল লোড হচ্ছে...
      </main>
    );
  }

  // Show sign-in link if the user is not logged in
  if (!user) {
    return (
      <main className="flex-1 py-16 text-center">
        <p className="mb-4">প্রথমে সাইন ইন করুন।</p>

        <Link
          href="/signin"
          className="btn bg-emerald-600 text-white"
        >
          সাইন ইন করুন
        </Link>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6">

        {/* Page Header */}
        <header>
          <h1 className="text-2xl font-bold">
            আমার প্রোফাইল
          </h1>

          <p className="text-sm text-base-content/70">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </header>

        {/* User Profile Information */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-start">

          {/* User Avatar */}
          <span className="avatar avatar-placeholder">
            <span className="w-20 rounded-full bg-emerald-600 text-2xl text-white">
              <span>
                {user.name?.charAt(0).toUpperCase()}
              </span>
            </span>
          </span>

          {/* User Name and Email */}
          <div className="min-w-0 flex-1 text-center sm:text-left">

            <h2 className="text-xl font-semibold">
              {user.name}
            </h2>

            <p className="truncate text-base-content/70">
              {user.email}
            </p>

          </div>

          {/* Sign Out Button */}
          <button
            type="button"
            onClick={handleSignOut}
            className="btn btn-outline btn-error"
          >
            ↩︎ সাইন আউট
          </button>

        </div>

        {/* Update Name Section */}
        <div className="rounded-2xl border border-base-300 bg-base-100 p-5">

          <h3 className="mb-3 text-lg font-semibold">
            নাম হালনাগাদ করুন
          </h3>

          {/* Update Name Form */}
          <form
            onSubmit={handleUpdate}
            className="flex flex-col gap-3"
          >

            {/* Name Input */}
            <label className="form-control w-full">

              <span className="label-text mb-1 block font-medium">
                নাম
              </span>

              <input
                key={user.name}
                autoComplete="name"
                className="input input-bordered w-full"
                type="text"
                name="name"
                defaultValue={user.name}
                required
              />

            </label>

            {/* Update Name Button */}
            <button
              type="submit"
              className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:w-fit"
            >
              নাম হালনাগাদ করুন
            </button>

          </form>
        </div>

      </div>
    </main>
  );
};

export default Profile;
