import React from "react";
import Header from "@/components/reskilll/Header";
import Hero from "@/components/reskilll/Hero";
import Partners from "@/components/reskilll/Partners";
import EventsSection from "@/components/reskilll/EventsSection";
import CurrentEvents from "@/components/reskilll/CurrentEvents";
import Initiatives from "@/components/reskilll/Initiatives";
import HackathonsSection from "@/components/reskilll/HackathonsSection";
import CommunitySection from "@/components/reskilll/CommunitySection";
import Testimonials from "@/components/reskilll/Testimonials";
import GlobalPresence from "@/components/reskilll/GlobalPresence";
import ContactForm from "@/components/reskilll/ContactForm";
import Footer from "@/components/reskilll/Footer";

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="bg-[linear-gradient(113deg,#984D38_-30.3%,#181E41_58.12%)] flex w-full flex-col items-center pt-8 pb-[74px] px-[76px] max-md:max-w-full max-md:px-5">
        <Header />
        <Hero />
        <Partners />
        <EventsSection />
        <CurrentEvents />
        <Initiatives />
        <HackathonsSection />
        <CommunitySection />
        <Testimonials />
        <GlobalPresence />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
