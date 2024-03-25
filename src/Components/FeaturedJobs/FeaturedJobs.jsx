import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs , setJobs] = useState([]);
    const [dataLength,setDataLength]=useState([4]);
    const [isClicked,setIsClicked]=useState(false);

    useEffect(() => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <SectionTitle title={`Featured Jobs: ${isClicked?jobs.length:dataLength}`} description={"Explore thousands of job opportunities with all the information you need. Its your future"}></SectionTitle>
            <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                {
                    jobs.slice(0,dataLength).map(job =><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="mt-10 flex justify-center">
                <button onClick={()=>{setIsClicked(!isClicked);setDataLength(isClicked?4:jobs.length)}} className="btn btn-primary">{isClicked?"Show less Jobs":"Show all Jobs"}</button>
            </div>
            {/* <div className={`mt-10 flex justify-center ${dataLength===jobs.length ? "hidden": ""}`}>
                <button onClick={()=>{setDataLength(jobs.length)}} className="btn btn-primary">{isClicked?"Show less Jobs":"Show all Jobs"}</button>
            </div> */}
        </div>
    );
};

export default FeaturedJobs;