import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

const AppliedJobs = () => {
    const [appliedJobs,setAppliedJobs]=useState([])
    const jobs=useLoaderData();
    useEffect(()=>{
        const storedJobIds=getStoredJobApplication();
        if(jobs.length>0){
            // const jobApplied=jobs.filter(job=>storedJobIds.includes(job.id))
            const jobApplied=[];
            for(const id of storedJobIds){
                const job=jobs.find(job=>job.id===id);
                if(job){
                    jobApplied.push(job)
                }
            }
            setAppliedJobs(jobApplied);
            // console.log(storedJobIds,jobs,jobApplied);
        }
    },[jobs])
    return (
        <div>
            <p>Applied Jobs Number: {appliedJobs.length}</p>
        </div>
    );
};

export default AppliedJobs;