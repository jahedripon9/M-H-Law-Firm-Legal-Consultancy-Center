import React from 'react'

const OurRecentWork = () => {
  return (
    <div>
        <section className="ezy__portfolio16 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
  <div className="container px-4 mx-auto">
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      <div className="w-2/3">
        <h2 className="text-3xl md:text-[52px] font-bold">Our Recent Work</h2>
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
            <img
              src="https://cdn.easyfrontend.com/pictures/portfolio/portfolio16_1.png"
              alt=""
              className="max-w-full w-full h-auto"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="mt-6 lg:mt-0 lg:px-12 text-center lg:text-start h-full flex flex-col justify-center">
            <h5 className="text-3xl md:text-[44px] leading-tight font-bold mb-4">
              Jobbazar Job Finder Web Exploration
            </h5>
            <p className="leading-loose opacity-80 mb-6 lg:pr-12">
              It’s easier to reach your savings goals when you have the right savings account. Take a look and find
              the right one for you!Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores,
              illum at, aliquid blanditiis eligendi qui.
            </p>
            <div>
              <button
                className="font-bold bg-blue-600 text-white px-8 py-3 hover:bg-opacity-90 duration-300 rounded inline-flex"
              >
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- card item --> */}
      <div className="grid grid-cols-12 bg-green-100 bg-opacity-30 rounded-xl p-6 md:p-12">
        <div className="col-span-12 lg:col-span-5 lg:order-2">
          <div className="bg-green-100 bg-opacity-75 flex justify-center items-center p-6 rounded-xl">
            <img
              src="https://cdn.easyfrontend.com/pictures/portfolio/portfolio16_2.png"
              alt=""
              className="max-w-full w-full h-auto"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="mt-6 lg:mt-0 lg:px-12 text-center lg:text-start h-full flex flex-col justify-center">
            <h5 className="text-3xl md:text-[44px] leading-tight font-bold mb-4">Slep Social Media apps Exploration</h5>
            <p className="leading-loose opacity-80 mb-6 lg:pr-12">
              It’s easier to reach your savings goals when you have the right savings account. Take a look and find
              the right one for you!Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores,
              illum at, aliquid blanditiis eligendi qui.
            </p>
            <div>
              <button
                className="font-bold bg-blue-600 text-white px-8 py-3 hover:bg-opacity-90 duration-300 rounded inline-flex"
              >
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- card item --> */}
      <div className="grid grid-cols-12 bg-yellow-100 bg-opacity-30 rounded-xl p-6 md:p-12">
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-yellow-100 bg-opacity-75 flex justify-center items-center p-6 rounded-xl">
            <img
              src="https://cdn.easyfrontend.com/pictures/portfolio/portfolio16_3.png"
              alt=""
              className="max-w-full w-full h-auto"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="mt-6 lg:mt-0 lg:px-12 text-center lg:text-start h-full flex flex-col justify-center">
            <h5 className="text-3xl md:text-[44px] leading-tight font-bold mb-4">Costa Restaurant Landing Page</h5>
            <p className="leading-loose opacity-80 mb-6 lg:pr-12">
              It’s easier to reach your savings goals when you have the right savings account. Take a look and find
              the right one for you!Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores,
              illum at, aliquid blanditiis eligendi qui.
            </p>
            <div>
              <button
                className="font-bold bg-blue-600 text-white px-8 py-3 hover:bg-opacity-90 duration-300 rounded inline-flex"
              >
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default OurRecentWork