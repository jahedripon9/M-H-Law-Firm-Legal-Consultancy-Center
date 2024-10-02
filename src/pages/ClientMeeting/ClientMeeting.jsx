import Client from '../../assets/Client.jpg'
const ClientMeeting = () => {
  return (
    <div>
        <span className="relative flex justify-center my-10">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 bg-white px-6">Client Meeting</span>
      </span>
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
            <img className="xl:max-w-6xl" src={Client} alt=""/>
            <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                <div className="flex justify-between font-bold text-sm">
                    <p>Office Time</p>
                    <p className="text-gray-400">10th October, 2024</p>
                </div>
                <h2 className="text-3xl font-semibold mt-4 md:mt-10">Client Meeting </h2>
                <div className="container mx-auto p-2">
      {/* Client's statement */}
      <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
        <strong>Client:</strong> I’m here to discuss a breach of contract case with my business partner. We had an agreement where they were supposed to deliver a set of services, but they’ve failed to do so within the agreed timeline.
      </p>

      {/* Lawyer's response */}
      <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
        <strong>Lawyer:</strong> Understood. Could you provide me with the details of the contract, including the timelines, specific obligations, and the correspondence between you and your partner leading up to the breach?
      </p>
         
    </div>
                <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Read
          More</button>
            </div>
        </section>
    </section>
    </div>
  )
}

export default ClientMeeting