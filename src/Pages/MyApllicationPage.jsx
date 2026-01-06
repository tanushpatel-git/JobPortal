import React, {useEffect, useState} from 'react'
import ApplyCardInfo from "../Component/ApplyCardInfo.jsx";

const MyApllicationPage = () => {

    const [dataOfApplyJob, setDataOfApplyJob] = useState([])

    useEffect(()=>{
        let applyInfoData = JSON.parse(localStorage.getItem("applyInfoData")) || [];
        setDataOfApplyJob(applyInfoData);
    },[])
    return (
        <div>
            {dataOfApplyJob.map((item, index) => (
                <div className="grid-cols-4">
                    <ApplyCardInfo
                        companyName={item.company.display_name}
                    companyRole={item.title}
                    appliedAt={"3:00:00"}
                    />
                </div>
            ))}
        </div>
    )
}
export default MyApllicationPage
