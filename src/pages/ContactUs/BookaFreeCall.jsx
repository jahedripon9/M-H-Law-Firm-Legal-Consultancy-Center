const BookaFreeCall = () => {
  return (
    <section className="py-14 max-w-screen-xl mx-auto">
      <div className="relative overflow-hidden mx-4 px-4 py-14 shadow-md rounded-[65px]  md:px-8 md:mx-8">
        <div className="relative z-10 max-w-xl mx-auto sm:text-center">
          <div className="space-y-3">
            <h3 className="text-3xl text-black font-bold">
              Book a free call and get started today
            </h3>
            <p className="text-black leading-relaxed font-semibold">
              There’s NO retainer, pressure, or obligation
            </p>
          </div>
          <div className="mt-6">
            <a href="#contact"><button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-black">
              Book a Free Call Today
            </button></a>
          </div>
        </div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(137.92deg, rgba(192, 132, 252, 0) 20.43%, rgba(232, 121, 249, 0.26) 49.66%, rgba(204, 171, 238, 0) 92.38%)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default BookaFreeCall;
