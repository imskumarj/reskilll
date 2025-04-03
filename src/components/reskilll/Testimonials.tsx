
import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full flex flex-col items-center">
      <div className="text-white text-[40px] font-bold text-center mt-[101px] max-md:max-w-full max-md:mt-10">
        What Our <span className="text-[rgba(255,0,0,1)]">Partners</span> Say?
      </div>
      <div className="text-white text-center text-xl font-medium mt-2.5">
        Testimonials
      </div>
      <div className="flex w-full max-w-[1238px] items-center justify-between gap-[15px] mt-[33px] max-md:max-w-full max-md:flex-col">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/82459366d5b8c06b8658f9e1499c0d51edd518c2?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 shrink-0 my-auto"
          alt="Left arrow"
        />
        
        <div className="flex flex-1 gap-5 max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(255,255,255,0.25)] shadow-[0px_5px_4px_rgba(0,0,0,0.25)] flex flex-col items-center mt-[34px] pb-[50px] rounded-[10px] max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7a9ff011a7e073b168259e7a345b9c1ebaed992?placeholderIfAbsent=true"
                className="aspect-[1.57] object-contain w-full self-stretch rounded-[10px_10px_0px_0px]"
                alt="Testimonial background"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22235fc75a8e9a5c6c7eb929f5f830d6ce3ffc51?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[85px] z-10 mt-[-42px] rounded-[10000000px]"
                alt="Nirupama Singh"
              />
              <div className="text-white text-xl font-bold text-center mt-3">
                Nirupama Singh
                <br />
                <span className="font-normal">Engineer</span>
              </div>
              <div className="text-white text-center text-[17px] font-medium mt-[22px] px-4">
                "Reskilll hackathons are innovative and the continuous events
                keep the audience engaged in the topic. Glad to have this
                experience at reskilll"
              </div>
            </div>
          </div>
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(255,255,255,0.25)] shadow-[0px_5px_4px_rgba(0,0,0,0.25)] flex grow flex-col items-center text-center w-full pb-[60px] rounded-[10px] max-md:mt-[11px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b33a170b142bed79e72ecea114195f339f6b4619?placeholderIfAbsent=true"
                className="aspect-[1.57] object-contain w-full self-stretch rounded-[0px_0px_0px_0px]"
                alt="Testimonial background"
              />
              <div className="text-white text-xl font-bold mt-3">
                Dr Monit Kapoor
                <br />
                <span className="font-normal text-[18px]">Professor,</span>
                <br />
                <span className="font-normal text-[18px]">
                  Chitkara University of Punjab
                </span>
              </div>
              <div className="text-white text-[17px] font-medium mt-[18px] px-4">
                "Reskilll has been at fore front of technology evangelism for
                young students of our Country. Rohit and his team have created
                an exemplary ecosystem utilising their network effect at top
                notch organization like Facebook and Microsoft. I wish them
                more strength to do more and more of what they are doing"
              </div>
            </div>
          </div>
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.10)] flex flex-col self-stretch items-center text-center w-full my-auto pb-[50px] rounded-[10px] max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d76190a99277e8870f5c063e5da86adbd1c1a6ab?placeholderIfAbsent=true"
                className="aspect-[1.54] object-contain w-full self-stretch rounded-[0px_0px_0px_0px]"
                alt="Testimonial background"
              />
              <div className="text-white text-xl font-bold mt-2">
                Chidroop Iyyhapan
                <br />
                <span className="font-normal text-[18px]">
                  Software Developer, Walmart Labs
                </span>
              </div>
              <div className="text-white text-[17px] font-medium mt-[26px] px-4">
                "have been associated with both the Vistara and Dish-Tv
                hackathons which were conducted by Reskilll. They were the
                most professionally conducted hacks. They seem to know the
                magic sauce to make people feel at place"
              </div>
            </div>
          </div>
        </div>
        
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b76613cd01eca0871b9e1dd85232ecd1089b5b3f?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 shrink-0 my-auto"
          alt="Right arrow"
        />
      </div>
    </section>
  );
};

export default Testimonials;
