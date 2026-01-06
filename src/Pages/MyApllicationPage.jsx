import React, {useEffect, useState} from 'react'
import ApplyCardInfo from "../Component/ApplyCardInfo.jsx";

const MyApllicationPage = () => {

    const [dataOfApplyJob, setDataOfApplyJob] = useState([])

    useEffect(() => {
        let applyInfoData = JSON.parse(localStorage.getItem("applyInfoData")) || [];
        setDataOfApplyJob(applyInfoData);
    }, [])

    const handleView = (id) => {
        // .
        // .
        // .
        // code pending for further accessibility of project.
        //.
        //.
        //.
    }
    return (<div className="h-screen w-full">
        <div className="relative top-[13vh] m-10 h-full w-full">
            <div className="grid grid-cols-3 gap-y-2 gap-5 h-full w-full">
                {dataOfApplyJob.length === 0 ? <div className="flex w-[94vw] text-center justify-center h-full">
                    <h1 className="text-gray-400 font-medium text-6xl">You don't apply for a job right now</h1>
                </div> : dataOfApplyJob.map((item, index) => (<ApplyCardInfo
                    key={index}
                    companyName={item.company.display_name}
                    companyRole={item.title}
                    appliedAt={item.time}
                    onView={() => handleView(index)}
                />))}
            </div>
        </div>
    </div>)
}
export default MyApllicationPage
