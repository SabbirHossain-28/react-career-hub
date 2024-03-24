import JobCategoryCard from "../JobCategoryCard/JobCategoryCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const CategoryList = () => {
    return (
        <div>
            <div>
                <SectionTitle title={"Job Category List"} description={"Explore thousands of job opportunities with all the information you need. Its your future"}></SectionTitle>
            </div>
            <div>
                <JobCategoryCard></JobCategoryCard>
            </div>
        </div>
    );
};

export default CategoryList;