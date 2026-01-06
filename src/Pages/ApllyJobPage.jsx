import { useState } from "react";
import { motion } from "framer-motion";
import {toast, ToastContainer} from "react-toastify";

export function Card({ children }) {
    return (
        <div className="border border-gray-200 shadow-sm rounded-2xl bg-white">
            {children}
        </div>
    );
}

export function CardHeader({ children }) {
    return <div className="p-6 border-b border-gray-100">{children}</div>;
}

export function CardTitle({ children }) {
    return <h2 className="text-2xl font-semibold text-gray-900">{children}</h2>;
}

export function CardContent({ children }) {
    return <div className="p-6">{children}</div>;
}

export function Button({ children, ...props }) {
    return (
        <button
            {...props}
            className={`w-full mt-2 rounded-2xl bg-black text-white px-4 py-2 font-medium hover:bg-gray-900 transition ${props.className || ""}`.trim()}
        >
            {children}
        </button>
    );
}

export function Input(props) {
    return (
        <input
            {...props}
            className={`w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gray-800 ${props.className || ""}`.trim()}
        />
    );
}

export function Textarea(props) {
    return (
        <textarea
            {...props}
            className={`w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gray-800 ${props.className || ""}`.trim()}
        />
    );
}

export default function ApllyJobPage() {
    const [form, setForm] = useState({ name: "", email: "", role: "", resume: "", message: "" });
    let applyInfoData = JSON.parse(localStorage.getItem("applyInfoData")) || [];
    let detailOfClickedJob = JSON.parse(localStorage.getItem("detailOfClickedJob"));
    let date = new Date();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let findApplyJob = applyInfoData.find((job)=>job.id === detailOfClickedJob.id);
        if (findApplyJob) {
            toast.warn("You already apply in this job.")
        }else{
            toast.success("You successfully apply in this job.")
            const currentTime = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            detailOfClickedJob["time"]=currentTime;
            applyInfoData.push(detailOfClickedJob);
        }
        localStorage.setItem("applyInfoData", JSON.stringify(applyInfoData));
    };

    return (
        <div className="min-h-screen bg-white text-black flex items-center justify-center p-6">
            <ToastContainer/>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-3xl relative top-[6vh]"
            >
                <Card>
                    <CardHeader>
                        <CardTitle>Apply for the Job</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="grid gap-6">
                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-gray-800">Full Name</label>
                                <Input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-gray-800">Email</label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-gray-800">Role Applying For</label>
                                <Input
                                    name="role"
                                    value={form.role}
                                    onChange={handleChange}
                                    placeholder="Eg. Frontend Developer"
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-gray-800">Resume Link</label>
                                <Input
                                    name="resume"
                                    value={form.resume}
                                    onChange={handleChange}
                                    placeholder="Paste Google Drive / URL"
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-gray-800">Cover Message</label>
                                <Textarea
                                    rows={5}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us briefly why you're a great fit"
                                />
                            </div>

                            <Button type="submit">Submit Application</Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
