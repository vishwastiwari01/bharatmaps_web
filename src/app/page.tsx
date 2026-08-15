import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TheIdea from '@/components/sections/TheIdea'
import OfflineSimulator from '@/components/sections/OfflineSimulator'
import AppShowcase from '@/components/sections/AppShowcase'
import HowItWorksStory from '@/components/sections/HowItWorksStory'
import SOSOrbital from '@/components/sections/SOSOrbital'
import OfflineNavigation from '@/components/sections/OfflineNavigation'
import ScenariosGallery from '@/components/sections/ScenariosGallery'
import Privacy from '@/components/sections/Privacy'
import Community from '@/components/sections/Community'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheIdea />
        <OfflineSimulator />
        <AppShowcase />
        <HowItWorksStory />
        <SOSOrbital />
        <OfflineNavigation />
        <ScenariosGallery />
        <Privacy />
        <Community />
      </main>
      <Footer />
    </>
  )
}
