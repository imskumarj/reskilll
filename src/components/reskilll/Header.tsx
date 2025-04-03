
import React from "react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex w-full max-w-[1176px] items-center gap-5 text-xl font-medium justify-between max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eca006a2a8d5485653a05645002425da052ee730?placeholderIfAbsent=true"
        className="aspect-[4.85] object-contain w-40 self-stretch shrink-0 max-w-full my-auto"
        alt="Reskilll Logo"
      />
      <div className="bg-[rgba(255,255,255,0.10)] self-stretch flex flex-col items-stretch text-white justify-center my-auto px-[13px] py-2.5 rounded-[10px]">
        <div className="flex items-center gap-2.5 justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ecdb6a5cd3eff20b5682bf95e541752a996d931?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search events and opportunities"
            className="self-stretch my-auto bg-transparent border-none outline-none text-white w-full"
          />
        </div>
      </div>
      <div className="self-stretch flex items-center gap-10 text-white justify-center flex-wrap p-2.5 max-md:max-w-full">
        <div 
          className="self-stretch my-auto cursor-pointer hover:opacity-80"
          onClick={() => scrollToSection('current-events')}
        >
          Events
        </div>
        <div 
          className="self-stretch my-auto cursor-pointer hover:opacity-80"
          onClick={() => scrollToSection('community-section')}
        >
          Community
        </div>
        <div 
          className="self-stretch my-auto cursor-pointer hover:opacity-80"
          onClick={() => scrollToSection('testimonials')}
        >
          Partners
        </div>
        <div className="self-stretch bg-[linear-gradient(214deg,#FFF_6.04%,#FFA500_92.95%)] gap-2.5 text-black font-bold my-auto px-5 py-2.5 rounded-[10px] cursor-pointer hover:opacity-90">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Header;
