import React from "react";

const Initiatives = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="text-white text-[40px] font-bold text-center mt-[103px] max-md:mt-10">
        <span className="font-normal">Our</span>{" "}
        <span className="font-black text-[rgba(0,255,0,1)]">Initiatives</span>
      </div>
      <div className="text-white text-center text-xl font-medium mt-2.5">
        AzDev Community Building
      </div>
      <div className="w-full max-w-[1196px] mt-[57px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[43%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/21c879e4fc85aa9b7493a4ad79205fe95b7dca95?placeholderIfAbsent=true"
              className="aspect-[0.82] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
              alt="Initiative image"
            />
          </div>
          <div className="w-[57%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col max-md:max-w-full max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9ff275d6558e35d4828a4d891bce372d688f039?placeholderIfAbsent=true"
                className="aspect-[6.49] object-contain w-[481px] max-w-full"
                alt="Azure Developer Community"
              />
              <div className="text-white text-3xl font-bold mt-[7px] max-md:max-w-full">
                Azure Developer Community
              </div>
              <div className="text-white text-[19px] font-medium leading-[34px] self-stretch mt-[9px] max-md:max-w-full">
                Azure Developer Community is a unique upskilling platform aimed
                at helping developers learn, upskill, and network by attending
                regular community-events, and sharing knowledge and growing
                along with the other community members. With a huge multitude of
                members already joining the bandwagon, this community is already
                making ripples of expansion.Azure Developer Community members
                work selflessly and wholeheartedly to enhance the technology
                learning and skilling that the developers of the future need to
                succeed.
                <br />
              </div>
              <div className="self-stretch gap-2.5 text-xl text-black font-bold px-5 py-2.5 rounded-[10px] cursor-pointer">
                Learn more
              </div>
              <div className="relative flex items-center gap-2 justify-center mt-[21px] px-3 py-2 rounded-[50px]">
                <div className="absolute z-0 flex flex-col overflow-hidden w-20 rounded-[100px] inset-0">
                  <div className="backdrop-blur-[25px] flex shrink-0 h-6" />
                </div>
                <div className="bg-white self-stretch z-0 flex w-2 shrink-0 h-2 my-auto rounded-[50px]" />
                <div className="bg-white self-stretch z-0 flex w-2 shrink-0 h-2 my-auto rounded-[50px]" />
                <div className="bg-white self-stretch z-0 flex w-2 shrink-0 h-2 my-auto rounded-[50px]" />
                <div className="bg-white self-stretch z-0 flex w-2 shrink-0 h-2 my-auto rounded-[50px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
