import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
    return (
        <div>
            <Banner/>
            <JobCategoryList/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;