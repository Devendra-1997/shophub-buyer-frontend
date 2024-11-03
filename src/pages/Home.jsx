import CustomCarousel from "../components/custom/CustomCarousel";
import tesla from "../assets/images/tesla.png";
import rolls_royce from "../assets/images/rolls.png";
import audi from "../assets/images/audi.avif";
import { CustomCard } from "../components/custom/CustomCard";

const Home = () => {
  const images = [tesla, rolls_royce, audi];
  return (
    <>
      <CustomCarousel images={images} />
      {/* Popular product section */}
      <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-2 px-4 py-6">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </>
  );
};
export default Home;
