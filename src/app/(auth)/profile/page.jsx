
const Profile = () => {
  return (
    <main className="flex-1">

     
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6">

       
        <header>
          <h1 className="text-2xl font-bold">
            আমার প্রোফাইল
          </h1>

          <p className="text-sm text-base-content/70">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </header>

        <div className="flex flex-col items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-start">

          {/* User Avatar */}
          <span className="avatar avatar-placeholder">
            <span className="w-20 rounded-full bg-emerald-600 text-2xl text-white">
              <span>h</span>
            </span>
          </span>

          {/* User Name and Email */}
          <div className="min-w-0 flex-1 text-center sm:text-left">

            <h2 className="text-xl font-semibold">
              hasan
            </h2>

            <p className="truncate text-base-content/70">
              hasan@gmail.com
            </p>

          </div>

          {/* Sign Out Button */}
          <button
            type="button"
            className="btn btn-outline btn-error"
          >
            ↩︎ সাইন আউট
          </button>

        </div>

       
        <div className="rounded-2xl border border-base-300 bg-base-100 p-5">

          <h3 className="mb-3 text-lg font-semibold">
            নাম হালনাগাদ করুন
          </h3>

          {/* Update Name Form */}
          <form noValidate className="flex flex-col gap-3">

            {/* Name Input */}
            <label className="form-control w-full">

              <span className="label-text mb-1 block font-medium">
                নাম
              </span>

              <input
                autoComplete="name"
                className="input input-bordered w-full"
                placeholder="যেমন: রহিম উদ্দিন"
                type="text"
                defaultValue="hasan"
                name="name"
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
