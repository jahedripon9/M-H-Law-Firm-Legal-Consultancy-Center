import { useState } from "react";
import img1 from "../../assets/auction.svg";
import img2 from "../../assets/building.svg";
import img3 from "../../assets/hammer.svg";
import img4 from "../../assets/law.svg";

const LawServices = () => {
  const [visibleCards, setVisibleCards] = useState(4);

  // Array of card data to render dynamically
  const cardData = [
    {
      id: 1,
      img: img4,
      title: "Civil & Criminal Case",
      description:
        "Environmental legal issues might occur since the planned business activities are designed.",
      bgColor: "bg-red-100",
    },
    {
      id: 2,
      img: img3,
      title: "Family Law & Criminal Law",
      description:
        "We provide a complete range of services for the continuity of your business activities.",
      bgColor: "bg-yellow-100",
    },
    {
      id: 3,
      img: img2,
      title: "Company Law & Property Law",
      description:
        "IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.",
      bgColor: "bg-blue-100",
    },
    {
      id: 4,
      img: img1,
      title: "Drafting of Deeds and Documentation",
      description:
        "In dealing with disruptive economic and legal challenge, our firm also provide various legal services.",
      bgColor: "bg-purple-100",
    },
    {
      id: 5,
      img: img4,
      title: "Family Dispute Cases",
      description:
        "Environmental legal issues might occur since the planned business activities are designed.",
      bgColor: "bg-red-100",
    },
    {
      id: 6,
      img: img3,
      title: "Matrimonial Disputes",
      description:
        "We provide a complete range of services for the continuity of your business activities.",
      bgColor: "bg-blue-100",
    },
    {
      id: 7,
      img: img2,
      title: "Registration Court Marriage",
      description:
        "IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.",
      bgColor: "bg-yellow-100",
    },
    {
      id: 8,
      img: img1,
      title: "Marriage Registration",
      description:
        "In dealing with disruptive economic and legal challenge, our firm also provide various legal services.",
      bgColor: "bg-red-100",
    },
  ];

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  return (
    <div className="container mx-auto" id="law">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Why do we help with
          <strong className="font-extrabold text-red-700 sm:block">
            {" "}
            legalization?{" "}
          </strong>
        </h1>
      </div>

      <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0">
        <section className="grid lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased">
          {cardData.slice(0, visibleCards).map((card) => (
            <article
              key={card.id}
              className={`flex flex-col shadow-xl mx-auto max-w-sm ${card.bgColor} py-8 px-10 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-fit rounded-md`}
            >
              <div className="min-h-62">
                <img className="mx-auto w-32" src={card.img} alt={card.title} />
              </div>
              <h1 className="font-extrabold text-6xl mt-12 mb-6 text-gray-800">
                {`0${card.id}.`}
              </h1>
              <h2 className="font-bold mb-5 text-2xl text-gray-800">
                {card.title}
              </h2>
              <p className="text-md leading-relaxed text-gray-700">
                {card.description}
              </p>
            </article>
          ))}
        </section>

        {/* Show More button */}
        {visibleCards < cardData.length && (
          <div className="text-center mt-10">
          <button
            onClick={showMoreCards}
            className="mx-auto shadow-xl bg-green-200 py-4 px-8 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-fit rounded-md text-2xl font-bold text-gray-800"
          >
            See More
          </button>
        </div>
        
        )}
      </section>
    </div>
  );
};

export default LawServices;
