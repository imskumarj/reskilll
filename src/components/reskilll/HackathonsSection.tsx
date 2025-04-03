import React from "react";
import HackathonCard from "./HackathonCard";

const HackathonsSection = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="text-white text-[40px] font-bold text-center mt-[94px] max-md:max-w-full max-md:mt-10">
        Our <span className="text-[rgba(0,122,255,1)]">Current Hackathons</span>
      </div>
      <div className="w-full max-w-[1197px] mt-[26px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <HackathonCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/790f818854e1aaef942991688f3696cd0c576320?placeholderIfAbsent=true"
              date="31 March 2025"
              title="HACKATHON NAME"
              location="Microsoft Gurugram"
              buttonText="Register Now"
              buttonGradient="linear-gradient(81deg,#007AFF_45.89%,#FFF_98.28%)"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <HackathonCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/790f818854e1aaef942991688f3696cd0c576320?placeholderIfAbsent=true"
              date="31 March 2025"
              title="HACKATHON NAME"
              location="Microsoft Gurugram"
              buttonText="Register Now"
              buttonGradient="linear-gradient(81deg,#007AFF_45.89%,#FFF_98.28%)"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <HackathonCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/790f818854e1aaef942991688f3696cd0c576320?placeholderIfAbsent=true"
              date="31 March 2025"
              title="HACKATHON NAME"
              location="Microsoft Gurugram"
              buttonText="Register Now"
              buttonGradient="linear-gradient(81deg,#007AFF_45.89%,#FFF_98.28%)"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch border w-[337px] max-w-full gap-2.5 text-xl text-[rgba(0,122,255,1)] font-medium mt-12 px-5 py-2.5 rounded-[10px] border-[rgba(0,122,255,1)] border-solid max-md:mt-10 text-center cursor-pointer hover:opacity-80">
        Explore all Hackathons
      </div>
    </section>
  );
};

export default HackathonsSection;
