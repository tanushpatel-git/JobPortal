export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800 flex flex-col">

            <section id="contact" className="mx-auto max-w-5xl relative top-[12vh] px-6 py-12 grid lg:grid-cols-2 gap-10 items-start">
                <div>
                    <h2 className="text-2xl font-semibold text-black mb-4 tracking-tight">Get in touch</h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Have a question about jobs, applications, or your saved listings? Send us a message below — we usually reply within 24 hours.
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Full name</label>
                            <input className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300" placeholder="Your name" />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300" placeholder="you@example.com" />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                            <textarea rows={4} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300" placeholder="Write your message..." />
                        </div>

                        <button type="button" className="w-full bg-black text-white rounded-xl py-2 text-sm font-medium hover:bg-gray-900 transition">Send message</button>
                    </form>
                </div>

                <div className="space-y-6">
                    <div className="border border-gray-200 rounded-2xl p-5">
                        <h3 className="text-lg font-semibold text-black mb-2">About our platform</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Explore job opportunities, save roles you like, track what you’ve applied for, and search the latest openings — all in one clean, simple dashboard.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <a className="group block border border-gray-200 rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60"
                                alt="Browse jobs"
                                className="w-full h-36 object-cover group-hover:opacity-90 transition"
                            />
                            <div className="p-3 text-sm text-gray-700">Browse Jobs</div>
                        </a>

                        <a className="group block border border-gray-200 rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=60"
                                alt="Saved jobs"
                                className="w-full h-36 object-cover group-hover:opacity-90 transition"
                            />
                            <div className="p-3 text-sm text-gray-700">Saved Jobs</div>
                        </a>

                        <a className="group block border border-gray-200 rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=60"
                                alt="My applications"
                                className="w-full h-36 object-cover group-hover:opacity-90 transition"
                            />
                            <div className="p-3 text-sm text-gray-700">My Applications</div>
                        </a>

                        <a className="group block border border-gray-200 rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60"
                                alt="Search jobs"
                                className="w-full h-36 object-cover group-hover:opacity-90 transition"
                            />
                            <div className="p-3 text-sm text-gray-700">Search Jobs</div>
                        </a>
                    </div>
                </div>
            </section>

            <footer className="mt-auto border-t border-gray-200">
                <div className="mx-auto max-w-5xl px-6 py-6 text-xs text-gray-500 flex flex-wrap items-center justify-between gap-3">
                    <span>© {new Date().getFullYear()} JobFinder. All rights reserved.</span>
                    <div className="flex gap-4">
                        <a  className="hover:text-black">Privacy</a>
                        <a  className ="hover:text-black">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
