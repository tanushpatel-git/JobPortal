import React, {useState} from 'react'
import JobSavedCard from '../Component/JobSavedCard.jsx'


const SaveJobPage = () => {
    let savedJobData = JSON.parse(localStorage.getItem("savedJobData")) || [];

    const [savedJob, setSavedJob] = useState(savedJobData);

    const handleRemove = (id) => {
        const updatedData = savedJobData.filter(job => job.id !== id);
        setSavedJob(updatedData);
    }
    localStorage.setItem("savedJobData", JSON.stringify(savedJob));
    return (
        <div className="relative w-full h-screen top-0 left-0">
            <div className="absolute top-[13vh] flex w-full justify-center items-center">
                {savedJob.length === 0 ? <div>
                    <h1 className="text-gray-500 text-6xl">No job You save right now .</h1>
                    </div> :
                    <div>
                        <h1 className="text-gray-500 text-6xl m-3">Saved job.</h1>
                        <div className="w-full h-[79vh] overflow-auto">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                            {savedJob.map((job) => (
                                <JobSavedCard job={job} key={job.id} remove={() => handleRemove(job.id)} />))}
                        </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default SaveJobPage
