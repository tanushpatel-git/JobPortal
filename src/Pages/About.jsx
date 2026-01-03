import { motion } from "framer-motion";

export default function About() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Header */}
           <div className="relative top-[12vh]">
               <header className="max-w-6xl mx-auto px-4 py-14">
                   <motion.h1
                       variants={fadeUp}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true }}
                       className="text-3xl md:text-5xl font-bold tracking-tight"
                   >
                       About Our Job Search Platform
                   </motion.h1>

                   <motion.p
                       variants={fadeUp}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true }}
                       className="mt-5 text-gray-600 max-w-3xl leading-relaxed"
                   >
                       Our platform is built to make finding and managing job opportunities
                       simple, transparent, and organized. From discovering roles to tracking
                       each application — everything lives in one clean workspace.
                   </motion.p>
               </header>

               {/* Main */}
               <main className="max-w-6xl mx-auto px-4 pb-24 grid gap-16">
                   {/* Job List / Explore */}
                   <motion.section
                       variants={fadeUp}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.2 }}
                       className="grid gap-6 md:grid-cols-2 items-center"
                   >
                       <a
                           href="#jobs"
                           className="block overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
                       >
                           <img
                               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=60"
                               alt="Explore job opportunities"
                               className="w-full h-72 object-cover"
                           />
                       </a>
                       <div>
                           <h2 className="text-2xl md:text-3xl font-semibold">Job List — Discover Opportunities</h2>
                           <p className="mt-4 text-gray-600 leading-relaxed">
                               The <span className="font-medium">Job List</span> page (sometimes called
                               "jobless" in the app) is where everything starts. Here, you can:
                           </p>
                           <ul className="mt-3 space-y-2 text-gray-600 list-disc pl-6">
                               <li>Browse hundreds of job posts across different roles</li>
                               <li>Search by keywords based on your interests</li>
                               <li>Quickly scan requirements and responsibilities</li>
                               <li>Open detailed pages to learn more and apply</li>
                           </ul>
                           <p className="mt-3 text-gray-600">
                               It’s designed to be simple and distraction‑free, so you can focus on
                               finding the right match instead of fighting the UI.
                           </p>
                       </div>
                   </motion.section>

                   {/* Saved Jobs */}
                   <motion.section
                       variants={fadeUp}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.2 }}
                       className="grid gap-6 md:grid-cols-2 items-center"
                   >
                       <a
                           href="#saved"
                           className="block overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
                       >
                           <img
                               src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=60"
                               alt="Saved jobs overview"
                               className="w-full h-72 object-cover"
                           />
                       </a>
                       <div>
                           <h2 className="text-2xl md:text-3xl font-semibold">Saved Jobs — Keep Favorites Handy</h2>
                           <p className="mt-4 text-gray-600">
                               When a role looks promising but you’re not ready to apply yet, you can
                               save it. The <span className="font-medium">Saved Jobs</span> page lets you:
                           </p>
                           <ul className="mt-3 space-y-2 text-gray-600 list-disc pl-6">
                               <li>Collect roles you want to review later</li>
                               <li>Compare different opportunities side‑by‑side</li>
                               <li>Open job details instantly without searching again</li>
                               <li>Apply directly whenever you’re ready</li>
                           </ul>
                           <p className="mt-3 text-gray-600">
                               Think of it as your personal shortlist of opportunities worth keeping.
                           </p>
                       </div>
                   </motion.section>

                   {/* My Applications */}
                   <motion.section
                       variants={fadeUp}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.2 }}
                       className="grid gap-6 md:grid-cols-2 items-center"
                   >
                       <a
                           href="#applications"
                           className="block overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
                       >
                           <img
                               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60"
                               alt="Track your applications"
                               className="w-full h-72 object-cover"
                           />
                       </a>
                       <div>
                           <h2 className="text-2xl md:text-3xl font-semibold">My Applications — Stay Organized</h2>
                           <p className="mt-4 text-gray-600">
                               Instead of guessing where you applied, the
                               <span className="font-medium"> My Applications</span> page shows:
                           </p>
                           <ul className="mt-3 space-y-2 text-gray-600 list-disc pl-6">
                               <li>Which jobs you’ve already applied for</li>
                               <li>Date and status of applications</li>
                               <li>Quick access back to each job description</li>
                               <li>A clear history of your entire job journey</li>
                           </ul>
                       </div>
                   </motion.section>

                   {/* Auth */}
                   <motion.section
                       variants={fadeUp}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.2 }}
                       className="grid gap-6 md:grid-cols-2 items-center"
                   >
                       <a
                           href="#auth"
                           className="block overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
                       >
                           <img
                               src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=60"
                               alt="Login and signup"
                               className="w-full h-72 object-cover"
                           />
                       </a>
                       <div>
                           <h2 className="text-2xl md:text-3xl font-semibold">Login & Sign Up — Your Personal Space</h2>
                           <p className="mt-4 text-gray-600">
                               Creating an account unlocks the full experience. With your profile you
                               can:
                           </p>
                           <ul className="mt-3 space-y-2 text-gray-600 list-disc pl-6">
                               <li>Save jobs safely</li>
                               <li>Apply faster with stored details</li>
                               <li>Access your applications anytime</li>
                               <li>Sync your progress across devices</li>
                           </ul>
                       </div>
                   </motion.section>

                   {/* Contact */}
                   <motion.section
                       variants={fadeUp}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.2 }}
                       className="grid gap-6 md:grid-cols-2 items-center"
                   >
                       <a
                           href="#contact"
                           className="block overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
                       >
                           <img
                               src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=60"
                               alt="Contact us"
                               className="w-full h-72 object-cover"
                           />
                       </a>
                       <div>
                           <h2 className="text-2xl md:text-3xl font-semibold">Contact Us — We’re Here to Listen</h2>
                           <p className="mt-4 text-gray-600">
                               Have suggestions, issues, or collaboration ideas? On the Contact page
                               you can share your details, ask questions, and stay connected with us.
                           </p>
                           <p className="mt-2 text-gray-600">
                               Your feedback helps us improve and build tools that genuinely support
                               your career journey.
                           </p>
                       </div>
                   </motion.section>
               </main>

               {/* Footer */}
               <footer className="border-t border-gray-200 py-10 mt-6">
                   <div className="max-w-6xl mx-auto px-4 text-gray-500 text-sm">
                       © {new Date().getFullYear()} — Job Search Platform. All rights reserved.
                   </div>
               </footer>
           </div>
        </div>
    );
}
