import React from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to a server
    alert("Form submitted successfully!");
  };

  return (
    <section className="flex flex-col items-center justify-center mt-[49px] max-md:mt-10 w-full">
      <div className="text-white text-[40px] font-bold leading-[72px] text-center">
        Contact Us
      </div>
      <div className="text-white text-xl font-medium mt-2.5">
        We are keen to hear from you :)
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[808px] flex flex-col items-center"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="bg-[rgba(118,118,128,0.12)] w-full max-w-full text-3xl text-white font-normal text-center leading-[54px] mt-16 px-[70px] py-4 rounded-[10px] max-md:mt-10 max-md:px-5 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          {...register("fullName", { required: true })}
        />
        {errors.fullName && (
          <span className="text-red-500 mt-1">Full name is required</span>
        )}

        <div className="flex w-full max-w-full items-stretch gap-[15px] text-3xl text-white font-normal text-center leading-[54px] flex-wrap mt-[33px]">
          <input
            type="email"
            placeholder="Email"
            className="bg-[rgba(118,118,128,0.12)] whitespace-nowrap grow shrink-0 basis-0 w-fit px-[70px] py-4 rounded-[10px] max-md:px-5 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-[rgba(118,118,128,0.12)] grow shrink-0 basis-0 w-fit px-[70px] py-4 rounded-[10px] max-md:px-5 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            {...register("phone", { required: true })}
          />
        </div>
        {(errors.email || errors.phone) && (
          <span className="text-red-500 mt-1">
            Valid email and phone are required
          </span>
        )}

        <input
          type="text"
          placeholder="Subject"
          className="bg-[rgba(118,118,128,0.12)] w-full max-w-full text-3xl text-white font-normal whitespace-nowrap text-center leading-[54px] mt-[33px] px-[70px] py-4 rounded-[10px] max-md:px-5 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <span className="text-red-500 mt-1">Subject is required</span>
        )}

        <textarea
          placeholder="Your Message"
          className="bg-[rgba(118,118,128,0.12)] w-full max-w-full text-3xl text-white font-normal text-center leading-[54px] mt-[33px] pt-3.5 pb-[90px] px-[70px] rounded-[10px] max-md:pb-[110px] max-md:px-5 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 resize-none"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="text-red-500 mt-1">Message is required</span>
        )}

        <button
          type="submit"
          className="self-stretch bg-[linear-gradient(81deg,#007AFF_45.89%,#FFF_98.28%)] gap-2.5 text-xl text-black font-bold whitespace-nowrap mt-[33px] px-5 py-2.5 rounded-[10px] hover:opacity-90 w-full"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
