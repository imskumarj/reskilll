import React from "react";
import StatCard from "./StatCard";

const CommunitySection = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="text-white text-center text-xl font-medium mt-[84px] max-md:mt-10">
        Our Community
      </div>
      <div className="text-white text-[40px] font-bold text-center max-md:max-w-full">
        Join a <span className="text-[rgba(255,204,0,1)]">community</span> with
        a strong drive to excel
      </div>
      <div className="self-stretch w-full mt-[54px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-3/12 max-md:w-full max-md:ml-0">
            <div className="shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.10)] flex grow items-stretch gap-[7px] w-full pl-6 pr-[7px] py-[30px] rounded-[10px] max-md:mt-[23px] max-md:pl-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fe51cfae840a5f4cfb3fc1f60a0a9070c418eb2?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[77px] shrink-0"
                alt="Developers icon"
              />
              <div className="flex flex-col items-stretch">
                <div className="text-[rgba(255,204,0,1)] text-3xl font-black">
                  100K+
                </div>
                <div className="text-white text-xl font-medium">
                  Active Developers
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.10)] flex grow gap-5 whitespace-nowrap w-full justify-between px-[42px] py-[27px] rounded-[10px] max-md:mt-[23px] max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d7e4dff6e14bf433cb6b80bedbc5bb150bf802?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[79px] shrink-0"
                alt="Hackathons icon"
              />
              <div className="flex flex-col items-stretch mt-[7px]">
                <div className="text-[rgba(255,204,0,1)] text-3xl font-black">
                  500+
                </div>
                <div className="text-white text-xl font-medium">Hackathons</div>
              </div>
            </div>
          </div>
          <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <StatCard
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c1e00748da4be74939edf057dbd807b6fe2198d6?placeholderIfAbsent=true"
              value="150+"
              label="Companies Participated"
              valueColor="text-[rgba(255,204,0,1)]"
            />
          </div>
          <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.10)] flex grow items-stretch gap-5 whitespace-nowrap w-full justify-between px-[50px] py-[31px] rounded-[10px] max-md:mt-[23px] max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eeedf4fc92a2a484f4f8530a4bc3656950c8813?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[61px] shrink-0 my-auto"
                alt="Countries icon"
              />
              <div className="flex flex-col items-stretch">
                <div className="text-[rgba(255,204,0,1)] text-3xl font-black">
                  17
                </div>
                <div className="text-white text-xl font-medium">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-center text-xl font-medium mt-12 max-md:max-w-full max-md:mt-10">
        Join the community which has a strive to excel - Be a part of our
        community and learn about various upcoming initiatives and
        opportunities.
      </div>
      <div className="self-stretch border border-[color:var(--Colors-Yellow,#FC0)] w-[337px] max-w-full gap-2.5 text-xl text-[#ffcc00] font-medium mt-[21px] px-5 py-2.5 rounded-[10px] border-solid text-center cursor-pointer hover:opacity-80">
        Join Our Community
      </div>
    </section>
  );
};

export default CommunitySection;
