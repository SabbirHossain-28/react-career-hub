import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section className=" my-24">
        <CategoryList></CategoryList>
      </section>
      <section>
        <FeaturedJobs></FeaturedJobs>
      </section>
    </div>
  );
};

export default Home;
