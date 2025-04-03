import React from "react";
import EventCard from "./EventCard";

const CurrentEvents = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="text-white text-[40px] font-bold text-center mt-[73px] max-md:mt-10">
        Our <span className="text-[rgba(255,0,0,1)]">Current Events</span>
      </div>
      <div className="w-full max-w-[1197px] mt-7 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <EventCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/790f818854e1aaef942991688f3696cd0c576320?placeholderIfAbsent=true"
              date="31 March 2025"
              title="EVENT NAME"
              location="Microsoft Gurugram"
              buttonText="Register Now"
              buttonGradient="linear-gradient(89deg,#F00_41.69%,#FFF_96.13%)"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <EventCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/790f818854e1aaef942991688f3696cd0c576320?placeholderIfAbsent=true"
              date="31 March 2025"
              title="EVENT NAME"
              location="Microsoft Gurugram"
              buttonText="Register Now"
              buttonGradient="linear-gradient(89deg,#F00_41.69%,#FFF_96.13%)"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <EventCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/790f818854e1aaef942991688f3696cd0c576320?placeholderIfAbsent=true"
              date="31 March 2025"
              title="EVENT NAME"
              location="Microsoft Gurugram"
              buttonText="Register Now"
              buttonGradient="linear-gradient(89deg,#F00_41.69%,#FFF_96.13%)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentEvents;
