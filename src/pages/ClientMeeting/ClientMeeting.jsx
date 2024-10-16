import Client from "../../assets/Client.jpg";
const ClientMeeting = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto max-w-xl text-center ">
        <h1 className="text-2xl font-extrabold sm:text-5xl ">
          Client Case
          <strong className="font-bold text-red-700 sm:font-extrabold">
            {" "}
            Consultation{" "}
          </strong>
        </h1>
      </div>
      <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
          <img className="xl:max-w-6xl" src={Client} alt="" />
          <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg md:max-w-md w-full lg:absolute top-48 right-5">
            <div className="flex justify-between font-bold text-sm">
              <p>Office Time</p>
              <p className="text-gray-400">10th October, 2024</p>
            </div>
            <h2 className="text-3xl font-semibold mt-4 md:mt-10">
              Client Meeting{" "}
            </h2>
            <div className="container mx-auto p-2">
              {/* Client's statement */}
              <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
                <strong>Client:</strong> I’m here to discuss a breach of
                contract case with my business partner. We had an agreement
                where they were supposed to deliver a set of services, but
                they’ve failed to do so within the agreed timeline.
              </p>

              {/* Lawyer's response */}
              <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
                <strong>Lawyer:</strong> Understood. Could you provide me with
                the details of the contract, including the timelines, specific
                obligations, and the correspondence between you and your partner
                leading up to the breach?
              </p>
            </div>
            <div className="mt-6">
            <a href="#contact"><button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-black">
              Book a Free Call Today
            </button></a>
          </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ClientMeeting;
