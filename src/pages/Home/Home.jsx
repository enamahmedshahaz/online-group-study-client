import Banner from "./Banner";
import Faq from "./Faq";
import FeaturesList from "./FeaturesList";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturesList></FeaturesList>
           <Faq></Faq>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;