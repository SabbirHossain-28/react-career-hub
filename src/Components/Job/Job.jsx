import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  console.log(job);
  const {id, logo, job_title, company_name, location, salary } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl border-2 p-4">
      <img src={logo} alt="Shoes" className="w-64 h-20 p-3" />
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-4 mt-4 mb-4">
          <button className="px-5 py-3 border border-[#7E90FE] rounded-lg text-[#7E90FE] font-manrope font-extrabold">
            Remote
          </button>
          <button className="px-5 py-3 border border-[#7E90FE] rounded-lg text-[#7E90FE] font-manrope font-extrabold">
            Full Time
          </button>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-2 items-center">
            <h2 className="text-2xl">
              <IoLocationOutline />
            </h2>
            <h2 className="text-lg">{location}</h2>
          </div>
          <div className="flex gap-2 items-center">
            <h2 className="text-2xl">
              <AiOutlineDollar />
            </h2>
            <h2 className="text-lg">{salary}</h2>
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
