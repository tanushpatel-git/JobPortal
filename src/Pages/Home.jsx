import React, {useEffect, useState} from 'react'
import JobInfoCard from "../Component/JobInfoCard.jsx";
import {fetchJobs} from "../Services/jobservice.js";
import {CircularProgress} from "@mui/material";

const Home = () => {
    const [dataOfJob, setDataOfJob] = useState([])
    const [loading, setLoading] = useState(true);
    document.title = "JobPortal | Home";
    const dataCallingFunc = async () => {
        let data = await fetchJobs()
        setDataOfJob(data);
        setLoading(false);
    }
    useEffect(()=>{
        dataCallingFunc()
    },[])
    return (
        <div className="relative top-0 flex justify-center items-center left-0 w-full h-screen">
            <div className="absolute h-full top-[13vh] flex flex-col">
                <h1 className="text-6xl ml-6">Latest Jobs</h1>
                {loading && <CircularProgress className="absolute top-[35vh] left-[10vw]" color="primary" />}
                <div className="w-full h-[79vh] overflow-auto">
                    <JobInfoCard jobs={dataOfJob} />
                </div>
            </div>
        </div>
    )
}
export default Home
