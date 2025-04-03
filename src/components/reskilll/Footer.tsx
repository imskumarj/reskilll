import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center mt-[154px] max-md:mt-10">
      <div className="flex w-full max-w-[1235px] gap-5 text-[15px] justify-between max-md:flex-wrap">
        <div className="self-stretch text-white font-medium max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f35562e0d0fb8b27f831eeb35c91de0f9e4dcf94?placeholderIfAbsent=true"
            className="aspect-[4.85] object-contain w-[194px] max-w-full"
            alt="Reskilll Logo"
          />
          <div className="mt-[21px] max-md:max-w-full">
            For any queries or requests, feel free to reachout to us using the
            below mentioned email or using connect us button below
            <br />
            <br />
            <span className="font-bold">India</span>{" "}
            <span className="font-bold">Address</span>: 4th Floor, E4, Sector 3,
            Noida, Uttar Pradesh - 201301
            <br />
            <span className="font-bold">Email</span>: punit@reskilll.com
            <br />
            <span className="font-bold">Phone No</span>: +91 7877079666
            <br />
            <span className="font-bold">Canada</span>{" "}
            <span className="font-bold">Address</span>: 744 W Hastings St #420,
            Vancouver, BC V6C 1A5, Canada
            <br />
            <span className="font-bold">Email</span>: rsardana@reskilll.com
            <br />
            <span className="font-bold">Phone No</span>: Noorul Huda - +1
            2362347826
            <br />
            <span className="font-bold">Phone No</span>: Sheetal Issar - +1
            2362346532
          </div>
        </div>
        <div className="flex flex-col text-white font-medium">
          <div className="text-white text-xl font-bold">Quick Links</div>
          <div className="self-stretch mt-5 cursor-pointer hover:underline">
            Events/Hackathons
          </div>
          <div className="mt-5 cursor-pointer hover:underline">Community</div>
          <div className="mt-5 cursor-pointer hover:underline">Initiatives</div>
        </div>
        <div className="flex flex-col text-white font-medium">
          <div className="text-white text-xl font-bold text-center">
            Hackathons
          </div>
          <div className="mt-5 cursor-pointer hover:underline">MSHACK</div>
          <div className="mt-5 cursor-pointer hover:underline">
            Vistara Hackathon
          </div>
          <div className="mt-5 cursor-pointer hover:underline">Ideathon</div>
          <div className="self-stretch mt-5 max-md:mr-2.5 cursor-pointer hover:underline">
            Microsoft Code for Future
          </div>
          <div className="mt-5 cursor-pointer hover:underline">
            Assocham Launchpad
          </div>
          <div className="self-stretch mt-5 cursor-pointer hover:underline">
            Green Charcoal Hackathon
          </div>
          <div className="mt-5 cursor-pointer hover:underline">
            India Innovation Series
          </div>
        </div>
        <div className="flex flex-col items-stretch text-xl">
          <div className="text-white font-bold text-center">Follow Us</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eeea64684dfaa8d53983dde015186172831bb51?placeholderIfAbsent=true"
            className="aspect-[5.03] object-contain w-[211px] mt-5 max-md:mr-[5px]"
            alt="Social media icons"
          />
          <div className="self-stretch border border-[color:var(--Colors-Yellow,#FC0)] gap-2.5 text-[#ffcc00] font-medium mt-[19px] px-5 py-2.5 rounded-[10px] border-solid text-center cursor-pointer hover:opacity-90">
            Join Our Discord
          </div>
        </div>
      </div>
      <div className="text-white text-xl font-medium mt-[54px] max-md:mt-10">
        © 2021 Copyright: Reskilll
      </div>
    </footer>
  );
};

export default Footer;
