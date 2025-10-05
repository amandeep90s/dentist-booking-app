import { CTA, Footer, Header, Hero, HowItWorks, PricingSection, WhatToAsk } from "@/components/landing";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className={cn("min-h-screen bg-background")}>
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
