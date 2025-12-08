"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import ContactUs from "./components/ContactUs";
import Benefits from "./components/Benefits";
import CallToAction from "./components/CallToAction";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
   <>
         <Hero />
         <About/>
         <Features/>
         <HowItWorks/>
         <Stats/>
         <Services/>
         <Benefits/>
         <Events/>
         <Testimonials/>
         <Faq/>
         <ContactUs/>
         <CallToAction/>
   </>
  );
}
