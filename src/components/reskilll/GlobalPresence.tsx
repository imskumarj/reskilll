import React from "react";

const GlobalPresence = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="text-white text-center text-[27px] font-medium mt-[89px] max-md:mt-10">
        Our Presence
      </div>
      <div className="text-white text-[40px] font-bold text-center mt-2 max-md:max-w-full">
        We are in{" "}
        <span className="font-black text-[rgba(0,255,0,1)]">17 countries</span>,
        and expanding!
      </div>
      <div className="text-white text-center text-[27px] font-medium mt-[31px] max-md:max-w-full">
        India | Australia | Canada | Sri Lanka | Bangladesh | Indonesia |
        Vietnam | Philippines | Singapore | USA | Kenya | Zambia | Zimbabwe |
        Nigeria | Portugal | Ukraine | Mexico
        <br />
      </div>
    </section>
  );
};

export default GlobalPresence;
