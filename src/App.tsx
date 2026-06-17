import { VideoBackground } from '@/components/VideoBackground'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { AppShowcase } from '@/components/AppShowcase'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#f4f1ea] text-[#1f1d1a]">
      <VideoBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AppShowcase />
        <Footer />
      </main>
    </div>
  )
}

export default App
