// src/app/page.js
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import HowItWorks from '@/components/home/HowItWorks'
import Pricing from '@/components/home/Pricing'
import Testimonials from '@/components/home/Testimonials'
import FAQ from '@/components/home/FAQ'
import Founders from '@/components/Founders'  // Changed to match file name
import FinalCTA from '@/components/home/FinalCTA'
import ComingSoon from '@/components/home/ComingSoon'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hidden WarriorPlus button for approval */}
      <div className="hidden">
        <a href="https://warriorplus.com/o2/buy/xzp148/k2fb2h/zmnfrg">
          <img src="https://warriorplus.com/o2/btn/fn100011001/xzp148/k2fb2h/418924" alt="Buy Now" />
        </a>
      </div>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Founders />
      <FAQ />
      <FinalCTA />
      <ComingSoon />
    </div>
  );
}
