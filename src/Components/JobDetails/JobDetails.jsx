import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  console.log(jobs, idInt);
  return (
    <div>
        <div className="my-12 w-11/12 mx-auto">
            <h1 className="text-5xl text-center font-manrope font-bold bg-[#F4F2FF] py-14">Job Details</h1>
        </div>
      <div className="flex gap-4 w-11/12 mx-auto mb-24">
        <div className="w-3/5 p-2">
          <h3 className="text-lg font-bold font-manrope">Job Description:</h3><span className="text-[#757575] font-manrope">{job.job_description}</span>
          <h3 className="text-lg font-bold font-manrope">Job Responsibility:</h3><span className="text-[#757575] font-manrope">{job.job_responsibility}</span>
          <h3 className="text-lg font-bold font-manrope">Educational Requirements:</h3><span className="text-[#757575] font-manrope">{job.educational_requirements}</span>
          <h3 className="text-lg font-bold font-manrope">Experiences:</h3><span className="text-[#757575] font-manrope">{job.experiences}</span>
        </div>
        <div className="w-2/5 font-manrope">
          <div className="p-6 mb-4 rounded-lg bg-[#F4F2FF]">
            <h2 className="text-xl font-manrope font-bold text-[#1A1919] mb-4">Job Details</h2>
            <hr className="mb-4"/>
            <div className="flex items-center gap-2 mb-2">
              <AiOutlineDollar className="text-xl text-[#7E90FE]"></AiOutlineDollar>
              <p className="text-lg font-medium ">Salary:</p><span className="text-[#474747]">{job.salary}(Per Month)</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <SlCalender className="text-xl text-[#7E90FE]"></SlCalender>
              <p className="text-lg font-medium">Job Title:</p><span className="text-[#474747]">{job.job_title}</span>
            </div>
            <h2 className="text-xl font-manrope font-bold text-[#1A1919] mb-4">Contact Information</h2>
            <hr className="mb-4"/>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FiPhone className="text-xl text-[#7E90FE]"></FiPhone>
                <p className="text-lg font-medium">Phone:</p><span>{job.contact_information.phone}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <MdOutlineMail className="text-xl text-[#7E90FE]" />
                <p className="text-lg font-medium">Email:</p><span>{job.contact_information.email}</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <IoLocationOutline className="text-xl text-[#7E90FE]"></IoLocationOutline>
                <p className="text-lg font-medium">Address:</p><span>{job.contact_information.address}</span>
              </div>
            </div>
          </div>
        <Link>
          <button className="btn btn-primary w-full">Apply Now</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
