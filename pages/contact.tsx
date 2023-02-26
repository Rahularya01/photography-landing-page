import Image from "next/image";
import React from "react";

import WomanImg from "../img/contact/woman.png";

const Contact = () => {
  return (
    <>
      <section className="section bg-white">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
            
            <div className="lg:flex-1  px-4">
              <h1 className="h1">Contact me</h1>
              <p className="mb-12">I would love to get suggestions from you.</p>
              <form className="flex flex-col gap-y-4">
                <div className="flex gap-x-10">
                  <input
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Your name"
                  />
                  <input
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="email"
                    placeholder="Your email address"
                  />
                </div>
                <input
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Your message"
                  />
                  <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send it</button>
              </form>
            </div>
            <div className="lg:flex-1">
              <Image src={WomanImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
