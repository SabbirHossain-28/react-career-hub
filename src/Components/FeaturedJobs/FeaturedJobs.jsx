import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs , setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <SectionTitle title={`Featured Jobs: ${jobs.length}`} description={"Explore thousands of job opportunities with all the information you need. Its your future"}></SectionTitle>
            <div>
                {
                    jobs.map(job =><Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;