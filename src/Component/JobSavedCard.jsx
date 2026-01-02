import {useNavigate} from "react-router-dom";

export default function SavedJobCard(props) {
    const navigate = useNavigate();
    return (
        <div className="max-w-sm w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-5 space-y-4">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h2 className="text-lg font-semibold leading-tight">{props.job.title}</h2>
                    <p className="text-sm text-gray-500 mt-1">{props.job.company}</p>
                </div>
                <span className="px-3 py-1 rounded-xl text-xs font-medium bg-indigo-50 text-indigo-600">
          Saved
        </span>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                    <span className="font-medium text-gray-500">Location</span>
                    <span>{props.job.location}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-500">Experience</span>
                    <span>{props.job.experience}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-500">Type</span>
                    <span>{props.job.type}</span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-3">
                <div className="text-xs text-gray-400">Job ID: {props.job.id}</div>
                <div className="flex gap-2">
                    <button
                        onClick={props.remove}
                        className="px-3 py-2 rounded-xl border border-gray-200 text-sm hover:bg-gray-50">
                        Remove
                    </button>
                    <button
                        onClick={()=>navigate(`/jobDetailPage/${props.job.id}`)}
                        className="px-3 py-2 rounded-xl text-sm bg-black text-white hover:bg-gray-950">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
