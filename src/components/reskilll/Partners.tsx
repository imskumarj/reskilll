import React from "react";

const Partners = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="text-white text-[40px] font-bold text-center mt-[68px] max-md:max-w-full max-md:mt-10">
        Trusted by 132+ Global Corporations
      </div>
      <div className="flex w-full max-w-[1220px] items-center gap-5 flex-wrap justify-between mt-[27px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/67511c82ca6e3b38c5302ca5a375317dd63f8546?placeholderIfAbsent=true"
          className="aspect-[4.69] object-contain w-[211px] self-stretch shrink-0 max-w-full my-auto"
          alt="Partner logo 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b736ca890a505aad9f0a29f63b8a6073d84cec6b?placeholderIfAbsent=true"
          className="aspect-[2.89] object-contain w-[136px] self-stretch shrink-0 max-w-full my-auto"
          alt="Partner logo 2"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7aa1c7fcf611be1d53a53be9d81410873b58377?placeholderIfAbsent=true"
          className="aspect-[3.11] object-contain w-[180px] self-stretch shrink-0 max-w-full"
          alt="Partner logo 3"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/71b36426dd51dcfaa675e467ffa9ae062b14e909?placeholderIfAbsent=true"
          className="aspect-[3.64] object-contain w-[171px] self-stretch shrink-0 max-w-full my-auto"
          alt="Partner logo 4"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/70bc33a100a25740c3eb29d705d4ca0ff2b8456e?placeholderIfAbsent=true"
          className="aspect-[3.82] object-contain w-[210px] self-stretch shrink-0 max-w-full my-auto"
          alt="Partner logo 5"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/17ed1ffb0cc9a57bcc54225927e7c86331463abe?placeholderIfAbsent=true"
          className="aspect-[3.32] object-contain w-[183px] self-stretch shrink-0 max-w-full my-auto"
          alt="Partner logo 6"
        />
      </div>
      <div className="text-white text-center text-xl font-medium mt-[25px]">
        and many <span className="underline">more partners</span>...
      </div>
    </section>
  );
};

export default Partners;
