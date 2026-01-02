import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";

export default function JobInfoCard({jobs}) {

    let savedJobData = JSON.parse(localStorage.getItem("savedJobData")) || [];
    const navigate = useNavigate();
    const handleSavedJob = (data) => {
        const findSameJob = savedJobData.find((job) => job.id === data.id);
        if (!findSameJob) {
            savedJobData.push(data);
            localStorage.setItem("savedJobData", JSON.stringify(savedJobData));
            toast.success("Job saved successfully.");
        }else{
            toast.warning("Job already exists!");
        }
    }
    return (
        <div className="min-h-screen p-6 relative top-0 left-0">
            <ToastContainer position="bottom-left" />
            <div
                className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 justify-center items-center w-full">
                {jobs.map((job, index) => (<div key={index}>
                    <div
                        className="bg-white shadow-xl rounded-2xl max-w-md w-full p-6 space-y-5 border border-gray-100">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-900">{job.title}</h1>
                            <p className="text-gray-600 mt-1">{job.company}</p>
                            <p className="text-sm text-gray-500 mt-1">{job.location} • {job.type}</p>
                        </div>

                        <div className="rounded-2xl bg-gray-100 p-4">
                            <p className="text-sm text-gray-700 leading-relaxed">
                                We are seeking a skilled {job.title} to help build scalable,
                                reliable systems powering millions of users.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <div className="flex justify-between text-sm text-gray-700">
                                <span className="font-medium">Experience:</span>
                                <span>{job.experience}</span>
                            </div>

                            <div className="flex justify-between text-sm text-gray-700">
                                <span className="font-medium">Role Type:</span>
                                <span>{job.type}</span>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button
                                onClick={()=>navigate(`/jobDetailPage/${job.id}`)}
                                className="rounded-2xl px-4 py-2 bg-gray-900 text-white font-medium hover:bg-gray-800 transition w-full">
                                View Details
                            </button>
                            <button
                                onClick={()=>handleSavedJob(job)}
                                className="rounded-2xl active:scale-95 px-4 py-2 border border-gray-300 font-medium hover:bg-gray-100 transition w-full">
                                Save Job
                            </button>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
}
