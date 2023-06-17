import Banner from "./Banner/Banner";
import Feedback from "./Feedback/Feedback";
import PopularClass from "./PopularClass/PopularClass";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;