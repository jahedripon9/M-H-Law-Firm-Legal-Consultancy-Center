import {
    faBehance,
    faDribbble,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const socialLinks = [
	{ icon: faTwitter, href: "#" },
	{ icon: faDribbble, href: "#" },
	{ icon: faBehance, href: "#" },
];

const infoList = [
	{ label: "Born in", value: "Bangladesh" },
	{ label: "Experience", value: "7+ Years" },
	{ label: "Date of Birth", value: "21 June 1994" },
];

const ProfileKeyInfo = () => (
	<div>
		{infoList.map((info, i) => (
			<p className="text-2xl mb-0" key={i}>
				<span className="opacity-50 mr-2 font-light">{info.label}</span>
				<strong>{info.value}</strong>
			</p>
		))}
	</div>
);

const SocialLinks = ({ links }) => (
	<ul className="inline-flex mt-6">
		{links.map((link, i) => (
			<li className="mr-5" key={i}>
				<a
					href={link.href}
					className="text-2xl opacity-70 hover:opacity-100 transition duration-300"
				>
					<FontAwesomeIcon icon={link.icon} />
				</a>
			</li>
		))}
	</ul>
);

SocialLinks.propTypes = {
	links: PropTypes.array.isRequired,
};

const OurTeam = () => {
  return (
    <section className="ezy__team10 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white" id="team">
  <div className="container px-4 mx-auto">
    <div className="flex justify-center mb-6 md:mb-12">
      <div className="max-w-lg text-center">
        <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">Our Experts Team</h2>
        <p className="">Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at qui.</p>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-y-20 md:gap-x-6 lg:gap-y-6 text-center pt-12">
      <div className="col-span-4 md:col-span-2 lg:col-span-1">
        <div
          className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8"
        >
          <img
            src="https://cdn.easyfrontend.com/pictures/users/user24.jpg"
            alt=""
            className="max-w-full h-auto rounded-full border-4 p-1 border-blue-600 mx-auto -mt-20"
            width="120"
          />
          <div className="mt-6">
            <h4 className="text-2xl font-medium mb-1">Akshay Kumar</h4>
            <p className="mb-4 text-sm">Founder / CEO</p>
            <p className="opacity-50">Subscribe Easy Tutorials Youtube Channel watch more videos</p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                ><span className="fab fa-facebook-f"></span
              ></a>
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                ><span className="fab fa-linkedin-in"></span
              ></a>
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                ><span className="fab fa-twitter"></span
              ></a>
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100"
                ><span className="fab fa-behance"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1">
        <div
          className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8"
        >
          <img
            src="https://cdn.easyfrontend.com/pictures/users/user5.jpg"
            alt=""
            className="max-w-full h-auto rounded-full border-4 p-1 border-blue-600 mx-auto -mt-20"
            width="120"
          />
          <div className="mt-6">
            <h4 className="text-2xl font-medium mb-1">Raima Ray</h4>
            <p className="mb-4 text-sm">Business Head</p>
            <p className="opacity-50">Subscribe Easy Tutorials Youtube Channel watch more videos</p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                ><span className="fab fa-facebook-f"></span
              ></a>
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                ><span className="fab fa-linkedin-in"></span
              ></a>
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                ><span className="fab fa-twitter"></span
              ></a>
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100"
                ><span className="fab fa-behance"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1">
        <div
          className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8"
        >
          <img
            src="https://cdn.easyfrontend.com/pictures/users/user28.jpg"
            alt=""
            className="max-w-full h-auto rounded-full border-4 p-1 border-blue-600 mx-auto -mt-20"
            width="120"
          />
          <div className="mt-6">
            <h4 className="text-2xl font-medium mb-1">Arjun Kapur</h4>
            <p className="mb-4 text-sm">UI Design</p>
            <p className="opacity-50">Subscribe Easy Tutorials Youtube Channel watch more videos</p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                ><span className="fab fa-facebook-f"></span
              ></a>
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                ><span className="fab fa-linkedin-in"></span
              ></a>
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                ><span className="fab fa-twitter"></span
              ></a>
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100"
                ><span className="fab fa-behance"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1">
        <div
          className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8"
        >
          <img
            src="https://cdn.easyfrontend.com/pictures/users/user3.jpg"
            alt=""
            className="max-w-full h-auto rounded-full border-4 p-1 border-blue-600 mx-auto -mt-20"
            width="120"
          />
          <div className="mt-6">
            <h4 className="text-2xl font-medium mb-1">Alia Bhatt</h4>
            <p className="mb-4 text-sm">Marketing Head</p>
            <p className="opacity-50">Subscribe Easy Tutorials Youtube Channel watch more videos</p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                ><span className="fab fa-facebook-f"></span
              ></a>
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                ><span className="fab fa-linkedin-in"></span
              ></a>
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                ><span className="fab fa-twitter"></span
              ></a>
              <a
                href="#"
                className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100"
                ><span className="fab fa-behance"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default OurTeam