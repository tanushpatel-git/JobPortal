import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ApplyCardInfo({
                                           companyName,
                                           companyRole,
                                           jobType,
                                           appliedAt,
                                           onView,
                                       }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-xl"
        >
            <div className="rounded-2xl border bg-white shadow hover:shadow-lg transition p-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-3">
                        <div className="h-12 w-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                            <Briefcase className="h-6 w-6 text-gray-700" />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">{companyRole}</h3>
                            <p className="text-sm text-gray-600">{companyName}</p>

                            <div className="flex gap-2 mt-2">
                                {jobType && (
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{jobType}</span>
                                )}
                                {appliedAt && (
                                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Applied • {appliedAt}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <button onClick={onView} className="px-4 py-2 text-sm font-medium rounded-full bg-gray-900 text-white hover:bg-gray-800">View</button>
                </div>
            </div>
        </motion.div>
    );
}


// jobs.map(job => (
//   <AppliedJobCard
//     key={job.id}
//     companyName={job.company}
//     companyRole={job.role}
//     jobType={job.type}
//     appliedAt={job.appliedAt}
//     onView={() => console.log(job.id)}
//   />
// ))
