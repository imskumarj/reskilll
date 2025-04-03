import React from "react";

interface HackathonCardProps {
  imageSrc: string;
  date: string;
  title: string;
  location: string;
  buttonText: string;
  buttonGradient?: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  imageSrc,
  date,
  title,
  location,
  buttonText,
  buttonGradient = "linear-gradient(81deg,#007AFF_45.89%,#FFF_98.28%)",
}) => {
  return (
    <div className="shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.10)] flex w-full flex-col items-stretch font-bold mx-auto p-[26px] rounded-[10px] max-md:mt-[15px] max-md:px-5">
      <img
        src={imageSrc}
        className="aspect-[0.89] object-contain w-full rounded-[10px]"
        alt={title}
      />
      <div className="flex items-stretch gap-[40px_42px] text-white font-medium mt-5">
        <div className="text-xl grow shrink w-[114px]">{date}</div>
        <div className="text-right text-[15px] grow shrink w-[125px]">
          {location}
        </div>
      </div>
      <div className="text-white text-[27px]">{title}</div>
      <div
        className={`self-stretch bg-[${buttonGradient}] gap-2.5 text-xl text-black mt-[21px] px-5 py-2.5 rounded-[10px] text-center cursor-pointer hover:opacity-90`}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default HackathonCard;
