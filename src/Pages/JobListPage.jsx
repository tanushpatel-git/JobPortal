import React, {useEffect, useState} from 'react'
import JobInfoCard from "../Component/JobInfoCard.jsx";
import {fetchJobs} from "../Services/jobservice.js";
import {CircularProgress} from "@mui/material";

const JobListPage = () => {
    document.title = "JobPortal | JobList";
    const [search, setSearch] = useState("");
    const [jobDataState, setJobDataState] = useState([]);
    const [loading, setLoading] = useState(true);
    const dataCallingFunc = async (q) => {
        let data = await fetchJobs(q);
        setJobDataState(data);
        setLoading(false);
    }
    useEffect(() => {
        dataCallingFunc(search)
    },[search])
    return (
        <div>
            <div className="w-full h-screen fixed top-[13vh]">
                <div className="ml-8 flex gap-5 items-center w-full min-h-[5vh]">
                    <input
                        className="border-2 border-black w-1/2 h-[5vh] p-2 rounded-xl mt-3 outline-none"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search role that prefer as per your requirement."
                    />
                </div>
                <div className="h-[79vh] overflow-auto">
                    {jobDataState.length === 0 ? <h1 className="text-3xl text-gray-500 ml-6 mt-4">No jobs Found.</h1> : <JobInfoCard jobs={jobDataState}/>}
                    {loading && <CircularProgress color="primary" className="relative top-[30vh] left-[50vw]"/>}
                </div>
            </div>
        </div>
    )
}
export default JobListPage
