import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.jpg'
const Achievements = () => {
  return (
    <div>
      <div className="w-2/3">
        <h2 className="text-3xl md:text-[52px] font-bold">
          Some of Our{" "}
          <span className="text-red-500 underline">Achievements</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 py-12">
        <article className="flex bg-white transition hover:shadow-xl p-2 border border-gray-200 ">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-yellow-500"
            >
              <span>2022</span>
              <span className="w-px flex-1 bg-yellow-500"></span>
              <span>Oct 10</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Guitar"
              src={img1}
              className="aspect-square h-full w-auto object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between ">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 ">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900 text-2xl  py-14 sm:py">
                  CONSTITUTIONAL LAW EXPERT OF THE YEAR 2021 IN BANGLADESH
                </h3>
              </a>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
            <a
                href="#contact"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Book a Free Call Today
              </a>
            </div>
          </div>
        </article>

        {/* Duplicate card 1 */}
        <article className="flex bg-white transition hover:shadow-xl p-2 border border-gray-200 ">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-11-15"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-yellow-500"
            >
              <span>2022</span>
              <span className="w-px flex-1 bg-yellow-500"></span>
              <span>Nov 15</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Piano"
              src={img2}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900 text-2xl  py-14 sm:py">
                  NOTABLE LAW FIRM and RISING STAR PARTNER 2022
                </h3>
              </a>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
            <a
                href="#contact"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Book a Free Call Today
              </a>
            </div>
          </div>
        </article>

        {/* Duplicate card 2 */}
        <article className="flex bg-white transition hover:shadow-xl p-2 border border-gray-200 ">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-12-25"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-yellow-500"
            >
              <span>2022</span>
              <span className="w-px flex-1 bg-yellow-500"></span>
              <span>Dec 25</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Violin"
              src={img3}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900 text-2xl  py-14 sm:py">
                  BEST COMMERCIAL DISPUTES LAWYER 2022
                </h3>
              </a>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end"><a
                href="#contact"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Book a Free Call Today
              </a></div>
          </div>
        </article>
        <article className="flex bg-white transition hover:shadow-xl p-2 border border-gray-200 ">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-12-25"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-yellow-500"
            >
              <span>2022</span>
              <span className="w-px flex-1 bg-yellow-500"></span>
              <span>Dec 25</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Violin"
              src={img4}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900 text-2xl  py-14 sm:py">
                  LAW FIRM OF THE YEAR 2019
                </h3>
              </a>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#contact"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Book a Free Call Today
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Achievements;
