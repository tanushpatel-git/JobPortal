import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import jobData from "../Data/jobData.js";
import { motion } from "framer-motion";
import { MapPin, Building2, Briefcase, FileText ,LucideCross } from "lucide-react";

const JobDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { title, experience, location, company, description, type } =
        jobData.find((job) => job.id === Number(id));

    return (
        <div className="min-h-screen bg-white text-gray-900 flex justify-center items-start py-12 px-4">
            <div className="w-[80%] mx-auto space-y-8">
                <header className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Job Listings
                    </h1>
                </header>

                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-5 space-y-4">
                            <div>
                                <div className="flex justify-between">
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {title}
                                    </h2>
                                    <LucideCross onClick={()=>navigate(-1)} className="w-7 rotate-45" />
                                </div>
                                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                    <Building2 className="w-4 h-4" /> {company}
                                </p>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin className="w-4 h-4" /> {location}
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Briefcase className="w-4 h-4" /> {experience}
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <FileText className="w-4 h-4" /> {type}
                                </div>
                            </div>

                            <p className="text-sm leading-relaxed text-gray-700">
                                {description}
                            </p>

                            <div className="flex items-center justify-between pt-2">
                                <button className="rounded-xl px-4 py-2 bg-black text-white hover:bg-gray-800">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailPage;
