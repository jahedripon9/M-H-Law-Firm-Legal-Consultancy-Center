import img1 from "../../assets/auction.svg";
import img2 from "../../assets/building.svg";
import img3 from "../../assets/hammer.svg";
import img4 from "../../assets/law.svg";
const CaseSuccessRate = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto max-w-xl text-center ">
        <h1 className="text-2xl font-extrabold sm:text-4xl ">
          Case Winning
          <strong className="font-bold text-red-700 sm:font-extrabold">
            {" "}
            Probability{" "}
          </strong>
        </h1>
      </div>
      <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-start ">
          <section className="p-5 py-10 text-left transform duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-gray-100">
            <img className="w-20 mx-auto " src={img1} alt="" />
            <h2 className="font-semibold my-12 text-gray-600 text-3xl">
              Civil & Criminal Case
            </h2>
            <div className="progress mt-10 w-full">
              <div className="bg-gray-300 h-2 rounded-md "></div>
              <div className="bg-green-600 w-4/4 h-2 rounded-md -mt-2"></div>
            </div>
            <div className="flex flex-row justify-between mt-2 font-semibold text-xl text-gray-600">
              <span>100%</span>
              <span>100%</span>
            </div>
          </section>

          <section className="p-5 py-10 text-left transform duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-gray-100">
            <img className="w-20 mx-auto " src={img2} alt="" />
            <h2 className="font-semibold my-12 text-gray-600 text-2xl">
              Family Law & Criminal Law
            </h2>
            <div className="progress mt-10 w-full">
              <div className="bg-gray-300 h-2 rounded-md "></div>
              <div className="bg-red-500 w-4/4 h-2 rounded-md -mt-2"></div>
            </div>
            <div className="flex flex-row justify-between mt-2 font-semibold text-xl text-gray-600">
              <span>100%</span>
              <span>100%</span>
            </div>
          </section>

          <section className="p-5 py-10 text-left transform duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-gray-100">
            <img className="w-20 mx-auto " src={img3} alt="" />
            <h2 className="font-semibold my-12 text-gray-600 text-2xl">
              Company Law & Property Law
            </h2>
            <div className="progress mt-10 w-full">
              <div className="bg-gray-300 h-2 rounded-md "></div>
              <div className="bg-blue-500 w-4/2 h-2 rounded-md -mt-2"></div>
            </div>
            <div className="flex flex-row justify-between mt-2 font-semibold text-xl text-gray-600">
              <span>100%</span>
              <span>100%</span>
            </div>
          </section>

          <section className="p-5 py-10 text-left transform duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-gray-100">
            <img className="w-20 mx-auto " src={img4} alt="" />
            <h2 className="font-semibold my-12 text-gray-600 text-2xl">
              Family Dispute Cases
            </h2>
            <div className="progress mt-10 w-full">
              <div className="bg-gray-300 h-2 rounded-md "></div>
              <div className="bg-green-500 w-5/5 h-2 rounded-md -mt-2"></div>
            </div>
            <div className="flex flex-row justify-between mt-2 font-semibold text-xl text-gray-600">
              <span>100%</span>
              <span>100%</span>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default CaseSuccessRate;
