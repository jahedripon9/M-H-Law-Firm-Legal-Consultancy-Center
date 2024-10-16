const faqsList = [
  {
    q: "What types of legal services do you offer to clients?",
    a: " We offer a wide array of legal services, including civil litigation, criminal defense, family law matters (such as divorce, custody, and inheritance), corporate and commercial law, property disputes, labor law, and Alternative Dispute Resolution (ADR) services like mediation and arbitration. Our dedicated team of experienced barristers and legal consultants ensures that our clients receive expert advice and representation tailored to their specific legal needs.",
  },
  {
    q: "Can you assist Bangladeshis living abroad with legal issues in Bangladesh?",
    a: " Yes, we specialize in providing legal assistance to Non-Resident Bangladeshis (NRBs). Whether it’s property management, inheritance matters, family disputes, or corporate legal issues, we ensure that Bangladeshis residing abroad are well-represented. We offer remote consultations and legal services to help protect their interests in Bangladesh.",
  },
  {
    q: "What is the process for Alternative Dispute Resolution (ADR), and how does it benefit me?",
    a: " ADR processes like arbitration, mediation, and conciliation offer a quicker and often more cost-effective way to resolve disputes outside of the traditional court system. At our law firm, we provide state-of-the-art ADR facilities, including virtual and face-to-face settings, for parties seeking amicable resolutions. ADR is especially beneficial for resolving commercial disputes, family matters, and other civil conflicts while maintaining privacy and reducing legal costs.",
  },
  {
    q: "What steps should I take if I want to file a legal case?",
    a: " The first step is to consult with our legal team to discuss the details of your case. We will assess the merits of your situation, advise you on the best legal course of action, and handle all necessary paperwork and filings. We represent clients in both lower courts and appellate courts across a range of legal areas. Our team is dedicated to guiding you through each stage of litigation with the utmost professionalism.",
  },
  {
    q: "How do I protect my property in Bangladesh if I live abroad?",
    a: " For Bangladeshis living abroad, protecting property can be a significant concern. We offer legal services that include property management, resolving land disputes, and handling fraudulent property claims. We ensure proper legal documentation, vetting of property papers, and handle any legal challenges that might arise, offering peace of mind to our clients overseas.",
  },
  {
    q: "Do you provide consultation for business or corporate law?",
    a: " Yes, we provide comprehensive corporate legal services. Whether you are starting a business, entering into contracts, or dealing with legal compliance issues, our law firm advises on matters of company law, contract disputes, mergers and acquisitions, regulatory compliance, and more. We ensure that businesses operate within legal frameworks and are protected from potential legal risks.",
  },
];

const Features = () => {
  return (
    <div className="leading-relaxed mt-12 mx-4 md:mx-8">
      <div className="text-center space-y-3">
        
        <div className="mx-auto max-h-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
        Frequently Asked
          <span className="font-extrabold text-red-500 ">
            {" "}
            Questions{" "}
          </span>
        </h1>
      </div>
        <p className="text-gray-500 max-w-lg mx-auto">
          Find quick answers to common legal queries in our FAQ section. If you
          need further assistance, feel free to contact us at M H Law Firm &
          Legal Consultancy Centre.
        </p>
        <div className="mt-6">
          <a href="#contact">
            <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-black">
              Book a Free Call Today
            </button>
          </a>
        </div>
      </div>
      <div
        className="relative bg-white rounded-md mt-10 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto"
        style={{ boxShadow: "0px 7px 20px 7px #F1F1F1" }}
      >
        <div className="grid gap-4 py-8 md:grid-cols-2">
          {faqsList.map((item, idx) => (
            <div className="space-y-3 mt-6 px-8" key={idx}>
              <h4 className="text-gray-800 text-xl font-semibold ">{item.q}</h4>
              <p className="text-gray-500">
                <span className="font-semibold text-black underline">
                  M H Law Firm & Legal Consultancy Centre:
                </span>
                {item.a}
              </p>
            </div>
          ))}
        </div>
        <span className="w-0.5 h-full bg-gray-200 m-auto absolute top-0 left-0 right-0 hidden md:block"></span>
      </div>
    </div>
  );
};

export default Features;
