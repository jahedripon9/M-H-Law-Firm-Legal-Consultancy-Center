import CaseSuccessRate from "../CaseSuccessRate/CaseSuccessRate";
import ClientMeeting from "../ClientMeeting/ClientMeeting";
import Hero from "../Hero/Hero";
import LawServiceOne from "../LawServices/LawServiceOne";
import OurRecentWork from "../OurRecentWork/OurRecentWork";
import LawServices from "../LawServices/LawServices"
import OurTeam from "../OurTeam/OurTeam";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import TestimonialsOne from "../Testimonials/TestimonialsOne";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Our Services</span>
      </span>
      <LawServices />
      <LawServiceOne />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Our Services</span>
      </span>
      <ClientMeeting />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Our Services</span>
      </span>
      <CaseSuccessRate />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Our Services</span>
      </span>
      <OurTeam />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Our Services</span>
      </span>
      <TestimonialsOne />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Our Services</span>
      </span>
      <OurRecentWork />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Our Services</span>
      </span>
      <Footer />
    </div>
  );
};

export default Home;
