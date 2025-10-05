import { cn } from '@/lib/utils';
import { CTA, Footer, Header, Hero, HowItWorks, PricingSection, WhatToAsk } from '@/components/landing';

export default function Home() {
  return (
    <div className={cn('bg-background min-h-screen')}>
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
  );
}
