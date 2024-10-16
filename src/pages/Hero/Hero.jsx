import img from '../../assets/Untitled-1.png'
const Hero = () => {
  return (
    <div className=''>
        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl ">

{/* <!-- Image Column --> */}
<div className="w-auto  h-76 lg:w-1/2 lg:h-auto ">
    <img className="h-full w-full object-cover" src={img} alt="Winding mountain road" />
</div>
{/* <!-- Close Image Column --> */}

{/* <!-- Text Column --> */}
<div
    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
    {/* <!-- Text Wrapper --> */}
    <div className="flex flex-col p-12 md:px-16">
        <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-5xl">Your Solution Legal Consultacy</h2>
        <p className="mt-4">
        We are here to help you take care of your legality with the best service especially for you.
        </p>
        {/* <!-- Button Container --> */}
        <div className="mt-6">
            <a href="#contact"><button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-black">
              Book a Free Call Today
            </button></a>
          </div>
    </div>
    {/* <!-- Close Text Wrapper --> */}
</div>
{/* <!-- Close Text Column --> */}

</div>
    </div>
  )
}

export default Hero