import customImg from "../../assets/images/tesla.png";
export const CustomCard = () => {
  return (
    <div className="hover:-translate-y-2 hover:duration-200   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-min">
      <a href="#">
        <img className="rounded-t-lg " src={customImg} alt="...img" />
      </a>
      <div className="p-5">
        <h4 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          Verified profiles drive closer to their dream car
        </h4>
        <div className="flex gap-4">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            5 Stars
          </p>
          <small className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            TeslaX
          </small>
        </div>
        <button className="shadow-lg rounded-lg bg-purple-800 px-4 py-1 text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
