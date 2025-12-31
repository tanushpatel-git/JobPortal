import React from 'react'
import jobData from "../Data/jobData.js";
import JobInfoCard from "../Component/JobInfoCard.jsx";

const Home = () => {
    document.title = "JobPortal | Home";

    return (
        <div className="relative top-0 flex justify-center items-center left-0 w-full h-screen">
            <div className="absolute top-[13vh] flex flex-col">
                <h1 className="text-6xl ml-6">Latest Jobs</h1>
                <div className="w-full h-[79vh] overflow-auto">
                    <JobInfoCard jobs={jobData} />
                </div>
            </div>
        </div>
    )
}
export default Home
