import React, {useEffect, useState} from 'react'
import JobInfoCard from "../Component/JobInfoCard.jsx";
import jobData from "../Data/jobData.js";

const JobListPage = () => {
    document.title = "JobPortal | JobList";
    const [search, setSearch] = useState("");
    const [jobDataState, setJobDataState] = useState(jobData)
    const [typeOfJobs, setTypeOfJobs] = useState("");
    const [experienceTime, setExperienceTime] = useState("");
    useEffect(() => {
        const searchData = jobData.filter(job => {
            return ((job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase()) ||  job.location.toLowerCase().includes(search.toLowerCase())) && job.type.toLowerCase().includes(typeOfJobs.toLowerCase())) && job.experience.toLowerCase().includes(experienceTime.toLowerCase());
        });
        setJobDataState(searchData);
    },[search,typeOfJobs,experienceTime])
    return (
        <div>
            <div className="w-full h-screen fixed top-[13vh]">
                <div className="ml-8 flex gap-5 items-center w-full min-h-[5vh]">
                    <input
                        className="border-2 border-black w-1/2 h-[5vh] p-2 rounded-xl mt-3 outline-none"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search title, role or location that prefer as per your requirement."
                    />
                    <select
                        value={typeOfJobs}
                        onChange={(e) => setTypeOfJobs(e.target.value)}
                        className="border-2 border-black w-[10vw] h-[5vh] p-2 rounded-xl mt-3 outline-none"
                    >
                        <option value="">All type job</option>
                        <option>Full time</option>
                        <option>Part time</option>
                        <option>Remote</option>
                        <option>Internship</option>
                        <option>Hybrid</option>
                    </select>
                    <select
                        value={experienceTime}
                        onChange={(e) => setExperienceTime(e.target.value)}
                        className="border-2 border-black w-[10vw] h-[5vh] p-2 rounded-xl mt-3 outline-none"
                    >
                        <option value="">All type Experience</option>
                        <option>0-1 year</option>
                        <option>1-3 year</option>
                        <option>2-4 year</option>
                        <option>3-5 year</option>
                    </select>
                    <button
                        className="border-2 border-black w-[10vw] h-[5vh] mt-[1.2vh] p-2 rounded-xl"
                        onClick={() => {
                            setExperienceTime("");
                            setTypeOfJobs("");
                            setSearch("");
                        }}
                    >Clear Filter</button>
                </div>
                <div className="h-[79vh] overflow-auto">
                    {jobDataState.length === 0 ? <h1 className="text-3xl text-gray-500 ml-6 mt-4">No jobs Found.</h1> : <JobInfoCard jobs={jobDataState}/>}
                </div>
            </div>
        </div>
    )
}
export default JobListPage
