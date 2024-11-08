import Footer from "./Footer";
import Header from "./Header";

const ErrorElement = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[80vh] pt-[80px] flex justify-center items-center bg-white-500">
        <h2 className="text-2xl font-bold tracking-widest text-red-500">
          404 Path Not Found
        </h2>
      </div>
      <Footer />
    </div>
  );
};
export default ErrorElement;
