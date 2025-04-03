import React from "react";

const Hero = () => {
  return (
    <div className="w-full max-w-[1195px] mt-[93px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch mt-1.5 max-md:max-w-full max-md:mt-10">
            <div className="text-white text-[50px] font-bold leading-[60px] mr-[31px] max-md:max-w-full max-md:text-[40px] max-md:leading-[53px] max-md:mr-2.5">
              Enhance your skills with{" "}
              <span className="text-[62px]">Reskilll</span>
            </div>
            <div className="text-white text-xl font-medium leading-[33px] mt-[23px] max-md:max-w-full">
              An Experiential learning platform helping Students, Developers,
              Professionals & Startups to Skill, Upskill and Reskill themselves.
            </div>
            <div className="flex w-[431px] max-w-full items-stretch gap-6 text-xl mt-10">
              <div className="self-stretch bg-[linear-gradient(214deg,#FFF_6.04%,#FFA500_92.95%)] gap-2.5 text-black font-bold px-5 py-2.5 rounded-[10px] cursor-pointer hover:opacity-90">
                Get Started
              </div>
              <div className="self-stretch bg-[rgba(255,255,255,0.10)] gap-2.5 text-white font-medium grow shrink basis-auto px-5 py-2.5 rounded-[10px] cursor-pointer hover:opacity-80">
                Join Our Community
              </div>
            </div>
            <div className="ml-2.5 mt-[45px] max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[33%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch whitespace-nowrap max-md:mt-10">
                    <div className="text-white text-3xl font-bold">100K+</div>
                    <div className="text-white text-xl font-medium">
                      Active
                      <br />
                      Developers
                    </div>
                  </div>
                </div>
                <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch whitespace-nowrap max-md:mt-10">
                    <div className="text-white text-3xl font-bold">500+</div>
                    <div className="text-white text-xl font-medium">
                      Hackathons
                    </div>
                  </div>
                </div>
                <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch whitespace-nowrap max-md:mt-10">
                    <div className="text-white text-3xl font-bold">132+</div>
                    <div className="text-white text-xl font-medium">
                      Companies
                      <br />
                      Participated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full max-md:max-w-full max-md:mt-10">
            <div className="max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-6/12 max-md:w-full max-md:ml-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ef04e11fc4bccf421193c12e09b39963f62454a?placeholderIfAbsent=true"
                    className="aspect-[0.91] object-contain w-full grow rounded-[10px] max-md:mt-[21px]"
                    alt="Hero image 1"
                  />
                </div>
                <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b51e70c464358a4580204734bf79431707e08ea?placeholderIfAbsent=true"
                    className="aspect-[0.91] object-contain w-full grow rounded-[10px] max-md:mt-[21px]"
                    alt="Hero image 2"
                  />
                </div>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/827a5cf6d6b02a683d4016643d189faa726bfb5b?placeholderIfAbsent=true"
              className="aspect-[2.82] object-contain w-full mt-[18px] rounded-[10px] max-md:max-w-full"
              alt="Hero image 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
