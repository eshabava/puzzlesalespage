import Script from 'next/script'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import HowItWorks from '@/components/home/HowItWorks'
import Pricing from '@/components/home/Pricing'
import Testimonials from '@/components/home/Testimonials'
import FAQ from '@/components/home/FAQ'
import Founders from '@/components/Founders'
import FinalCTA from '@/components/home/FinalCTA'
import ComingSoon from '@/components/home/ComingSoon'

export default function Home() {
  return (
    <>
      {/* Hidden WarriorPlus elements for approval */}
      <div className="hidden">
        <a href="https://warriorplus.com/o2/buy/xzp148/k2fb2h/zmnfrg">
          <img src="https://warriorplus.com/o2/btn/fn100011001/xzp148/k2fb2h/418924" alt="Buy Now" />
        </a>
        <div className="wplus_spdisclaimer"></div>
      </div>
      
      {/* WarriorPlus Disclaimer Script */}
      <Script 
        src="https://warriorplus.com/o2/disclaimer/xzp148" 
        strategy="lazyOnload"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
    </>
  );
}
