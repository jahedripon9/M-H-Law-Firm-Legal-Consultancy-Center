import CaseSuccessRate from "../CaseSuccessRate/CaseSuccessRate"
import ClientMeeting from "../ClientMeeting/ClientMeeting"
import Hero from "../Hero/Hero"
import LawServices from "../LawServices/LawServices"
import Navbar from "../Shared/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <LawServices />
        <ClientMeeting />
        <CaseSuccessRate />
    </div>
  )
}

export default Home