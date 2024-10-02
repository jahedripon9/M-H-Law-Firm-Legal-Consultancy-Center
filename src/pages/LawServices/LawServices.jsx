import img1 from "../../assets/auction.svg";
import img2 from "../../assets/building.svg";
import img3 from "../../assets/hammer.svg";
import img4 from "../../assets/law.svg";
const LawServices = () => {
  return (
    <div>
      <span className="relative flex justify-center my-24">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 bg-white px-6">Our Services</span>
      </span>
      <div className="mx-auto max-w-xl text-center ">
        <h1 className="text-3xl font-extrabold sm:text-5xl ">
          Why do we help with
          <strong className="font-extrabold text-red-700 sm:block">
            {" "}
            legalization?{" "}
          </strong>
        </h1>
      </div>
      <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0">
        <section className="grid lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased">
          <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-red-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-fit rounded-md">
            <div className="min-h-62">
              <img className="mx-auto" src={img4} alt="" />
            </div>
            <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
              01.
            </h1>
            <h2 className="font-bold mb-5 text-2xl text-gray-800">
              Civil & Criminal Case
            </h2>
            <p className="text-md leading-relaxed text-gray-700">
              Environmental legal issues might occur since the planned business
              activities are designed.
            </p>
          </article>

          <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-yellow-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-fit rounded-md">
            <div className="min-h-62">
              <img className="mx-auto" src={img3} alt="" />
            </div>
            <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
              02.
            </h1>
            <h2 className="font-bold mb-5 text-2xl text-gray-800">
              Family Law & Criminal Law
            </h2>
            <p className="text-md leading-relaxed text-gray-700">
              We provide a complete range of services for the continuity of your
              business activities.
            </p>
          </article>

          <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-blue-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-fit rounded-md">
            <div className="min-h-62">
              <img className="mx-auto" src={img2} alt="" />
            </div>
            <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
              03.
            </h1>
            <h2 className="font-bold mb-5 text-2xl text-gray-800">
              Company Law & Property Law
            </h2>
            <p className="text-md leading-relaxed text-gray-700">
              IT not followed by the existing regulation which might cause legal
              uncertainty and business uncertainty.
            </p>
          </article>

          <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-purple-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-fit rounded-md">
            <div className="min-h-62">
              <img className="mx-auto" src={img1} alt="" />
            </div>
            <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
              04.
            </h1>
            <h2 className="font-bold mb-5 text-2xl text-gray-800">
              Drafting of Deeds and Documentation
            </h2>
            <p className="text-md leading-relaxed text-gray-700">
              In dealing with disruptive economic and legal challenge, our firm
              also provide various legal services.
            </p>
          </article>
          <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-red-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-fit rounded-md">
            <div className="min-h-62">
              <img className="mx-auto" src={img4} alt="" />
            </div>
            <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
              05.
            </h1>
            <h2 className="font-bold mb-5 text-2xl text-gray-800">
              Family Dispute Cases
            </h2>
            <p className="text-md leading-relaxed text-gray-700">
              Environmental legal issues might occur since the planned business
              activities are designed.
            </p>
          </article>

          <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-yellow-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-fit rounded-md">
            <div className="min-h-62">
              <img className="mx-auto" src={img3} alt="" />
            </div>
            <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
              06.
            </h1>
            <h2 className="font-bold mb-5 text-2xl text-gray-800">
              Matrimonial Disputes
            </h2>
            <p className="text-md leading-relaxed text-gray-700">
              We provide a complete range of services for the continuity of your
              business activities.
            </p>
          </article>

          <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-blue-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-fit rounded-md">
            <div className="min-h-62">
              <img className="mx-auto" src={img2} alt="" />
            </div>
            <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
              07.
            </h1>
            <h2 className="font-bold mb-5 text-2xl text-gray-800">
              Registration Court Marriage
            </h2>
            <p className="text-md leading-relaxed text-gray-700">
              IT not followed by the existing regulation which might cause legal
              uncertainty and business uncertainty.
            </p>
          </article>

          <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-purple-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-fit rounded-md">
            <div className="min-h-62">
              <img className="mx-auto" src={img1} alt="" />
            </div>
            <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
              08.
            </h1>
            <h2 className="font-bold mb-5 text-2xl text-gray-800">
              Marriage Registration
            </h2>
            <p className="text-md leading-relaxed text-gray-700">
              In dealing with disruptive economic and legal challenge, our firm
              also provide various legal services.
            </p>
          </article>
          <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-red-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-fit rounded-md">
            <div className="min-h-62">
              <img className="mx-auto" src={img4} alt="" />
            </div>
            <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
              09.
            </h1>
            <h2 className="font-bold mb-5 text-2xl text-gray-800">
              Divorce / Separation
            </h2>
            <p className="text-md leading-relaxed text-gray-700">
              Environmental legal issues might occur since the planned business
              activities are designed.
            </p>
          </article>

          <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-yellow-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-fit rounded-md">
            <div className="min-h-62">
              <img className="mx-auto" src={img3} alt="" />
            </div>
            <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
              10.
            </h1>
            <h2 className="font-bold mb-5 text-2xl text-gray-800">
              Wills Deed, Sale Deed, Gift Deeds 
            </h2>
            <p className="text-md leading-relaxed text-gray-700">
              We provide a complete range of services for the continuity of your
              business activities.
            </p>
          </article>

          <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-blue-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-fit rounded-md">
            <div className="min-h-62">
              <img className="mx-auto" src={img2} alt="" />
            </div>
            <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
              11.
            </h1>
            <h2 className="font-bold mb-5 text-2xl text-gray-800">
              Power of Attorney
            </h2>
            <p className="text-md leading-relaxed text-gray-700">
              IT not followed by the existing regulation which might cause legal
              uncertainty and business uncertainty.
            </p>
          </article>

          <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-purple-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-fit rounded-md">
            <div className="min-h-62">
              <img className="mx-auto" src={img1} alt="" />
            </div>
            <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
              12.
            </h1>
            <h2 className="font-bold mb-5 text-2xl text-gray-800">
              Affidavit, Legal Notice
            </h2>
            <p className="text-md leading-relaxed text-gray-700">
              In dealing with disruptive economic and legal challenge, our firm
              also provide various legal services.
            </p>
          </article>
                  
        </section>
      </section>
    </div>
  );
};

export default LawServices;
