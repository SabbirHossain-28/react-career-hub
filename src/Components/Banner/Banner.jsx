import userImage from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="hero min-h-96 bg-[#F8F9FF]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={userImage}
          className="w-96 rounded-lg"
        />
        <div>
          <h1 className="text-7xl font-bold">One Step Closer To Your <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Dream Job</span></h1>
          <p className="py-6 text-[#757575]">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
