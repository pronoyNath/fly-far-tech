import Banner from "./Banner/Banner";
import HotDeals from "./components/HotDeals/HotDeals";
import SliderSection from "./components/SliderSection/SliderSection";


const Home = () => {
  return (
    <div>
      <Banner />
      <div className="px-4">
      <SliderSection/>
      <HotDeals/>
      </div>
    </div>
  );
};

export default Home;
