import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import SOSExperience from '@/components/sections/SOSExperience'
import OfflineMaps from '@/components/sections/OfflineMaps'
import Scenarios from '@/components/sections/Scenarios'
import BetaRegistration from '@/components/sections/BetaRegistration'
import CommunityFeedback from '@/components/sections/CommunityFeedback'
import Roadmap from '@/components/sections/Roadmap'
import Technical from '@/components/sections/Technical'
import IndiaFirst from '@/components/sections/IndiaFirst'
import Trust from '@/components/sections/Trust'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <IndiaFirst />
      <SOSExperience />
      <Scenarios />
      <OfflineMaps />
      <Problem />
      <Technical />
      <Roadmap />
      <CommunityFeedback />
      <BetaRegistration />
      <Trust />
      <Footer />
    </main>
  )
}
