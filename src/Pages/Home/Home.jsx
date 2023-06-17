import Banner from "./Banner/Banner";
import Feedback from "./Feedback/Feedback";
import PopularClass from "./PopularClass/PopularClass";
import PopularInstructors from "./PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;