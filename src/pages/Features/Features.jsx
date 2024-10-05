import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";


const features = [
	{
		desc: "Start making money today on each sale you make.",
	},
	{
		desc: "Sell from a big library of 1000+ courses",
	},
	{
		desc: "Sell any courses that match your niche.",
	},
	{
		desc: "Easy tracking system through Rakuten affiliate platform.",
	},
];

const FeaturedItem = ({ feature, index }) => {
	return (
		<div
			className={classNames(
				"bg-gray-100 dark:bg-slate-700 flex items-center rounded-xl p-4",
				{ "mb-4": index !== features.length - 1 }
			)}
		>
			<div className="flex justify-center items-center text-[15px] p-3 bg-blue-600 text-white rounded-full mr-3">
				<FontAwesomeIcon icon={faCheck} />
			</div>
			<h4 className="text-[17px]">{feature.desc}</h4>
		</div>
	);
};

FeaturedItem.propTypes = {
	feature: PropTypes.object.isRequired,
	index: PropTypes.number,
};

const Features = () => {
	return (
		<section className="py-24 md:py-36 bg-white dark:bg-[#0b1727] text-black dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex max-w-3xl justify-center text-center mx-auto">
					<div>
						<h1 className="text-3xl font-bold leading-tight md:text-[45px] mb-12">
							Become An Affiliate
						</h1>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-6 items-center">
					<div className="col-span-2 md:col-span-1 md:order-2">
						<div className="relative mb-12">
							<img
								src="https://cdn.easyfrontend.com/pictures/portfolio/portfolio29.jpg"
								alt=""
								className="rounded-3xl max-w-full h-auto mx-auto"
							/>
							<img
								src="https://cdn.easyfrontend.com/pictures/services/service19_1_2.png"
								alt=""
								className="absolute -bottom-24 left-0 -md:left-32 max-w-full h-auto"
							/>
						</div>
					</div>
					<div className="col-span-2 md:col-span-1 mt-12 md:mt-0 lg:mr-12">
						{features.map((feature, i) => (
							<FeaturedItem feature={feature} key={i} index={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Features;