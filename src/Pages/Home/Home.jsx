import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Faq from "./Faq/Faq";
import Feedback from "./Feedback/Feedback";
import PopularClass from "./PopularClass/PopularClass";
import PopularInstructors from "./PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div className="pt-24">
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <Feedback></Feedback>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;