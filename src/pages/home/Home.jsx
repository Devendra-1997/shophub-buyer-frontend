import CustomCarousel from "../../components/custom/CustomCarousel";
import tesla from "../../assets/images/tesla.png";
import rolls_royce from "../../assets/images/rolls.png";
const Home = () => {
  const images = [tesla, rolls_royce];
  return (
    <div className="flex justify-center items-center">
      <CustomCarousel images={images} />
    </div>
  );
};
export default Home;
