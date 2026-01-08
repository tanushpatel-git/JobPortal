import React, {Activity, useEffect, useState} from 'react'
import ApplyCardInfo from "../Component/ApplyCardInfo.jsx";

const MyApllicationPage = () => {

    const [dataOfApplyJob, setDataOfApplyJob] = useState([])
    const [viewDetailState, setViewDetailState] = useState(null);
    const [toggleState, setToggleState] = useState(false);

    useEffect(() => {
        let applyInfoData = JSON.parse(localStorage.getItem("applyInfoData")) || [];
        setDataOfApplyJob(applyInfoData);
    }, [])
    return (<div className={`h-screen w-full ${toggleState?"bg-gray-800":""}`}>
        <div className="relative top-[13vh] m-10 h-full w-full">
            <div className="grid grid-cols-3 gap-y-2 gap-5 h-full w-full">
                <Activity mode={toggleState ? "visible" : "hidden"}>

                </Activity>
                {dataOfApplyJob.length === 0 ? <div className="flex w-[94vw] text-center justify-center h-full">
                    <h1 className="text-gray-400 font-medium text-6xl">You don't apply for a job right now</h1>
                </div> : dataOfApplyJob.map((item, index) => (<ApplyCardInfo
                    key={index}
                    companyName={item.company.display_name}
                    companyRole={item.title}
                    appliedAt={item.time}
                />))}
            </div>
        </div>
    </div>)
}
export default MyApllicationPage
