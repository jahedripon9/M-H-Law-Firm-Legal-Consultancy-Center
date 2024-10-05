import CaseSuccessRate from "../CaseSuccessRate/CaseSuccessRate";
import ClientMeeting from "../ClientMeeting/ClientMeeting";
import Hero from "../Hero/Hero";
import LawServiceOne from "../LawServices/LawServiceOne";
import OurRecentWork from "../OurRecentWork/OurRecentWork";
// import LawServices from "../LawServices/LawServices"; 
import ContactUs from "../ContactUs/ContactUs";
import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";
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
      {/* <LawServices /> */}
      <LawServiceOne />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Client Meetings</span>
      </span>
      <ClientMeeting />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Case Success Rate</span>
      </span>
      <CaseSuccessRate />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Our Team</span>
      </span>
      <OurTeam />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Testimonials</span>
      </span>
      <TestimonialsOne />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Our Recent Work</span>
      </span>
      <OurRecentWork />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">FAQ</span>
      </span>
      <FAQ />
      <Features />
      <span className="relative flex justify-center my-12">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white px-6">Contact Us </span>
      </span>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
