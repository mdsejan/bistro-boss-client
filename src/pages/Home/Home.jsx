import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import CallToAction from "./CallToAction/CallToAction";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Parallax from "./Parallax/Parallax";
import PopulerMenus from "./PopulerMenus/PopulerMenus";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="min-h-[60vh]">
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-2xl mx-auto py-20">
        <Category></Category>
        <Parallax></Parallax>
        <PopulerMenus></PopulerMenus>
        <CallToAction></CallToAction>
        <Featured></Featured>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
