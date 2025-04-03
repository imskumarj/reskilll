import React from "react";
import EventCard from "./EventCard";

const EventsSection = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="text-white text-[40px] font-bold text-center ml-[19px] mt-[89px] max-md:mt-10">
        We Got You Covered
      </div>
      <div className="text-white text-center text-xl font-medium w-[423px] ml-5 mt-2.5 max-md:w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="flex w-full max-w-[1197px] items-stretch gap-[15px] text-xl text-white font-medium flex-wrap mt-[30px] max-md:max-w-full">
        <div className="bg-[rgba(255,255,255,0.10)] whitespace-nowrap px-[70px] py-[5px] rounded-[10px] max-md:px-5 cursor-pointer hover:opacity-80">
          Startups
        </div>
        <div className="bg-[linear-gradient(214deg,#FFF_6.04%,#FFA500_92.95%)] text-black font-bold px-[21px] py-[5px] rounded-[10px] max-md:px-5 cursor-pointer hover:opacity-90">
          Hackathon & Bootcamp
        </div>
        <div className="bg-[rgba(255,255,255,0.10)] px-[51px] py-[5px] rounded-[10px] max-md:px-5 cursor-pointer hover:opacity-80">
          Jobs & Internships
        </div>
        <div className="bg-[rgba(255,255,255,0.10)] px-[70px] py-[5px] rounded-[10px] max-md:px-5 cursor-pointer hover:opacity-80">
          Little Minds
        </div>
      </div>
      <div className="w-full max-w-[1197px] mt-[30px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <EventCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/790f818854e1aaef942991688f3696cd0c576320?placeholderIfAbsent=true"
              date="31 March 2025"
              title="EVENT NAME"
              location="Microsoft Gurugram"
              buttonText="Register Now"
              buttonGradient="linear-gradient(214deg,#FFF_6.04%,#FFA500_92.95%)"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <EventCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/790f818854e1aaef942991688f3696cd0c576320?placeholderIfAbsent=true"
              date="31 March 2025"
              title="EVENT NAME"
              location="Microsoft Gurugram"
              buttonText="Register Now"
              buttonGradient="linear-gradient(214deg,#FFF_6.04%,#FFA500_92.95%)"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <EventCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/790f818854e1aaef942991688f3696cd0c576320?placeholderIfAbsent=true"
              date="31 March 2025"
              title="EVENT NAME"
              location="Microsoft Gurugram"
              buttonText="Register Now"
              buttonGradient="linear-gradient(214deg,#FFF_6.04%,#FFA500_92.95%)"
            />
          </div>
        </div>
      </div>
      <div className="justify-center items-center border border-[color:var(--pp2-purple,#B75CFF)] flex w-[337px] max-w-full gap-2.5 text-xl font-medium mt-[37px] px-5 py-2.5 rounded-[10px] border-solid cursor-pointer hover:opacity-80">
        <div className="bg-clip-text bg-[linear-gradient(214deg,#B75CFF_6.04%,#671AE4_92.95%)] self-stretch my-auto">
          Click for More
        </div>
      </div>
      <div className="justify-center items-center border border-[color:var(--Button-Reskilll,#FFF)] z-10 flex mt-[-50px] w-[337px] max-w-full gap-2.5 text-xl font-bold px-5 py-2.5 rounded-[10px] border-solid cursor-pointer hover:opacity-80">
        <div className="bg-clip-text bg-[linear-gradient(214deg,#FFF_6.04%,#FFA500_92.95%)] text-[#ffcc00] self-stretch my-auto">
          Click for More
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
