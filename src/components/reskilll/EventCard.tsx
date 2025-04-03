import React from "react";

interface EventCardProps {
  imageSrc: string;
  date: string;
  title: string;
  location: string;
  buttonText: string;
  buttonGradient: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  date,
  title,
  location,
  buttonText,
  buttonGradient = "linear-gradient(214deg,#FFF_6.04%,#FFA500_92.95%)",
}) => {
  return (
    <div className="shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.10)] w-full mx-auto p-[26px] rounded-[10px] max-md:mt-[15px] max-md:px-5">
      <img
        src={imageSrc}
        className="aspect-[0.89] object-contain w-full rounded-[10px]"
        alt={title}
      />
      <div className="flex items-stretch gap-[13px] mt-5">
        <div className="flex flex-col items-stretch flex-1">
          <div className="text-white text-xl font-medium">{date}</div>
          <div className="text-white text-[27px] font-bold">{title}</div>
        </div>
        <div className="text-white text-right text-[15px] font-medium grow shrink w-[122px]">
          {location}
        </div>
      </div>
      <div
        className={`self-stretch bg-[${buttonGradient}] gap-2.5 text-xl text-black font-bold mt-[21px] px-5 py-2.5 rounded-[10px] text-center cursor-pointer hover:opacity-90`}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default EventCard;
