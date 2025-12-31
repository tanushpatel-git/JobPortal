import React, {useEffect, useState} from 'react'
import JobInfoCard from "../Component/JobInfoCard.jsx";
import jobData from "../Data/jobData.js";

const Home = () => {

    const [search, setSearch] = useState("");
    const [jobDataState, setJobDataState] = useState(jobData)
    const [typeOfJobs, setTypeOfJobs] = useState("")
    useEffect(() => {
        const searchData = jobData.filter(job => {
            return (job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase()) ||  job.location.toLowerCase().includes(search.toLowerCase())) && job.type.toLowerCase().includes(typeOfJobs.toLowerCase());
        });
        setJobDataState(searchData);
    },[search,typeOfJobs])

    return (
        <div>
            <div className="w-full h-screen fixed top-[13vh]">
                <div className="ml-8 flex gap-5 justify-start items-start w-full">
                    <input
                        className="border-2 border-black w-1/2 h-[5vh] p-2 rounded-xl mt-3"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search title, role or location that prefer as per your requirement."
                    />
                    <select
                        value={typeOfJobs}
                        onChange={(e) => setTypeOfJobs(e.target.value)}
                        className="border-2 border-black w-[10vw] h-[5vh] p-2 rounded-xl mt-3"
                    >
                        <option value="">All type</option>
                        <option>Full time</option>
                        <option>Part time</option>
                        <option>Remote</option>
                        <option>Internship</option>
                        <option>Hybrid</option>
                    </select>
                </div>
                <div className=" h-[79vh] overflow-auto">
                    <JobInfoCard jobs={jobDataState}/>
                </div>
            </div>
        </div>
    )
}
export default Home
