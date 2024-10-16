import img1 from "../../assets//Litigation.jpg";
import img2 from "../../assets/Personal.jpeg";
import img3 from "../../assets/real.jpg";

const OurRecentWork = () => {
  return (
    <div>
      <section className="ezy__portfolio16 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="w-2/3">
              <h2 className="text-3xl md:text-[52px] font-bold">
                Our Recent Work
              </h2>
            </div>
            <div className="w-1/3 text-end">
              <button className="font-bold bg-blue-600 text-white px-8 py-3 hover:bg-opacity-90 duration-300 rounded">
                See All
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6 max-w-7xl mt-12 mx-auto">
            {/* <!-- card item --> */}
            <div className="grid grid-cols-12 bg-blue-100 bg-opacity-30 rounded-xl p-6 md:p-12">
              <div className="col-span-12 lg:col-span-5">
                <div className="bg-blue-100 bg-opacity-75 flex justify-center items-center p-6 rounded-xl">
                  <img src={img1} alt="" className="max-w-full w-full h-auto" />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="mt-6 lg:mt-0 lg:px-12 text-center lg:text-start h-full flex flex-col justify-center">
                  <h5 className="text-3xl md:text-[44px] leading-tight font-bold mb-4">
                    Corporate Litigation Success
                  </h5>
                  <p className="leading-loose opacity-80 mb-6 lg:pr-12">
                    Successfully defended a multinational corporation in a
                    high-stakes intellectual property dispute, protecting
                    valuable patents and securing a favorable outcome..
                  </p>
                  <div>
                    <div className="mt-6">
                      <a href="#contact">
                        <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-black">
                          Book a Free Call Today
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card item --> */}
            <div className="grid grid-cols-12 bg-green-100 bg-opacity-30 rounded-xl p-6 md:p-12">
              <div className="col-span-12 lg:col-span-5 lg:order-2">
                <div className="bg-green-100 bg-opacity-75 flex justify-center items-center p-6 rounded-xl">
                  <img src={img2} alt="" className="max-w-full w-full h-auto" />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="mt-6 lg:mt-0 lg:px-12 text-center lg:text-start h-full flex flex-col justify-center">
                  <h5 className="text-3xl md:text-[44px] leading-tight font-bold mb-4">
                    Personal Injury Settlement
                  </h5>
                  <p className="leading-loose opacity-80 mb-6 lg:pr-12">
                    Achieved a significant settlement for a client in a personal
                    injury case involving a workplace accident, ensuring
                    financial security for the victim and their family.
                  </p>
                  <div>
                    <div className="mt-6">
                      <a href="#contact">
                        <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-black">
                          Book a Free Call Today
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card item --> */}
            <div className="grid grid-cols-12 bg-yellow-100 bg-opacity-30 rounded-xl p-6 md:p-12">
              <div className="col-span-12 lg:col-span-5">
                <div className="bg-yellow-100 bg-opacity-75 flex justify-center items-center p-6 rounded-xl">
                  <img src={img3} alt="" className="max-w-full w-full h-auto" />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="mt-6 lg:mt-0 lg:px-12 text-center lg:text-start h-full flex flex-col justify-center">
                  <h5 className="text-3xl md:text-[44px] leading-tight font-bold mb-4">
                    Real Estate Dispute Resolution
                  </h5>
                  <p className="leading-loose opacity-80 mb-6 lg:pr-12">
                    Resolved a long-standing property dispute between commercial
                    real estate developers through strategic negotiation and
                    mediation, avoiding costly litigation.
                  </p>
                  <div>
                    <div className="mt-6">
                      <a href="#contact">
                        <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-black">
                          Book a Free Call Today
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurRecentWork;
