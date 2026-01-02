import { useState } from "react";
import { motion } from "framer-motion";
import {form} from "framer-motion/m";
import {Link, useNavigate} from 'react-router-dom'
import {toast} from "react-toastify";


export default function Login() {
    const navigate = useNavigate();
    const signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (signUpData.length === 0) {
            toast.warn("First you have to sign up!");
            navigate("/signUp");
        }else{
            //code pending.
        }
        setLoading(true);
        setTimeout(() => setLoading(false), 1200);
    };

    return (
        <div className="min-h-screen grid place-items-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md"
            >
                <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-2xl bg-slate-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-semibold">Login</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="w-full rounded-2xl border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-4 py-2"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData , email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full rounded-2xl border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-4 py-2"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData , password: e.target.value })}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-2xl px-4 py-2 font-medium bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-70"
                        >
                            {loading ? "Signing in…" : "Sign in"}
                        </button>
                    </form>

                    <p className="text-center text-sm text-slate-500">
                        Don’t have an account? <Link className="font-medium underline" to="/signUp">Sign up</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
