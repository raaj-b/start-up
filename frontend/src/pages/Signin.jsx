import React from 'react'

function Signin() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                {/* Logo / Brand */}
                <h1 className="text-2xl font-bold text-center text-gray-800">
                    Welcome Back
                </h1>
                <p className="text-sm text-center text-gray-500 mt-1">
                    Login to continue shopping
                </p>

                {/* Form */}
                <form className="mt-6 space-y-4">
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#" className="text-blue-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-2 my-6">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-sm text-gray-400">OR</span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Social Login */}
                <button className="w-full py-3 border rounded-xl hover:bg-gray-50 transition">
                    Continue with Google
                </button>

                {/* Signup Redirect */}
                <p className="text-sm text-center text-gray-600 mt-6">
                    Don’t have an account?
                    <a href="/sign-up" className="text-blue-600 font-medium ml-1 hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Signin
