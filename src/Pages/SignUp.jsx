import { useState } from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import {toast} from "react-toastify";


export default function SignupPage() {
    let signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name:"",
        password_confirmation: "",
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password_confirmation !== formData.password) {
            setError("Passwords do not match");
            return;
        }else{
            signUpData.push(formData);
            localStorage.setItem("signUpData", JSON.stringify(signUpData));
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            toast.success("Passwords account is created successfully!");
        }, 1200);
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
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-semibold">Create account</h1>
                    </div>

                    {error && (
                        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Full name</label>
                            <input
                                type="text"
                                className="w-full rounded-2xl border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-4 py-2"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full rounded-2xl border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-4 py-2"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Password</label>
                            <input
                                type="password"
                                className="w-full rounded-2xl border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-4 py-2"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Confirm password</label>
                            <input
                                type="password"
                                className="w-full rounded-2xl border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-4 py-2"
                                placeholder="••••••••"
                                value={formData.password_confirmation}
                                onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-2xl px-4 py-2 font-medium bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-70"
                        >
                            {loading ? "Creating account…" : "Sign up"}
                        </button>
                    </form>

                    <p className="text-center text-sm text-slate-500">
                        Already have an account? <Link className="font-medium underline" to="/login">Log in</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
