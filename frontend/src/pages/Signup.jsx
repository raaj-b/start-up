import React from "react";

function Signup() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* HEADER */}
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Create Your Account
        </h1>
        <p className="text-sm text-center text-gray-500 mt-1">
          Join us and start shopping smarter
        </p>

        {/* FORM */}
        <form className="mt-6 space-y-4">

          <div>
            <label className="text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@email.com"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a strong password"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Create Account
          </button>
        </form>

        {/* TERMS */}
        <p className="text-xs text-center text-gray-500 mt-4">
          By signing up, you agree to our
          <span className="text-blue-600 cursor-pointer"> Terms</span> &
          <span className="text-blue-600 cursor-pointer"> Privacy Policy</span>
        </p>

        {/* REDIRECT */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?
          <a
            href="/sign-in"
            className="text-blue-600 font-medium ml-1 hover:underline"
          >
            Sign In
          </a>
        </p>

      </div>
    </section>
  );
}

export default Signup;
