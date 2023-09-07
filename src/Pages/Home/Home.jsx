import Banner from "./Banner/Banner";
import BecomeInstructor from "./BecomeInstructor/BecomeInstructor";
import Contact from "./Contact/Contact";
import CountDown from "./CountDownn/CountDown";
import Faq from "./Faq/Faq";
import Feedback from "./Feedback/Feedback";
import PopularClass from "./PopularClass/PopularClass";
import PopularInstructors from "./PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div className="pt-24">
            <Banner></Banner>
            <CountDown></CountDown>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <BecomeInstructor></BecomeInstructor>
            <Feedback></Feedback>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;