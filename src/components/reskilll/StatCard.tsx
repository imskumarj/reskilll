import React from "react";

interface StatCardProps {
  iconSrc: string;
  value: string;
  label: string;
  valueColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  iconSrc,
  value,
  label,
  valueColor = "text-[rgba(255,204,0,1)]",
}) => {
  return (
    <div className="shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.10)] flex grow items-stretch gap-5 w-full px-10 py-4 rounded-[10px] max-md:mt-[23px] max-md:px-5">
      <img
        src={iconSrc}
        className="aspect-[1] object-contain w-[76px] shrink-0 my-auto"
        alt="Stat icon"
      />
      <div className="flex flex-col items-stretch">
        <div className={`${valueColor} text-3xl font-black`}>{value}</div>
        <div className="text-white text-xl font-medium">{label}</div>
      </div>
    </div>
  );
};

export default StatCard;
