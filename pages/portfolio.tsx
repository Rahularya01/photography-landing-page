import Head from "next/head";
import React from "react";

import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";

import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Alina Lee</title>
      </Head>
      <section className="section">
        <div className="container mx-auto h-full-relative">
          <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
            <div className="flex flex-col lg:items-start">
              <h1 className="h1">Portfolio</h1>
              <p className="mb-12 max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam dolorum nihil omnis totam saepe ullam tempora in
                maiores
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores, soluta?
              </p>
              <Link href={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
                Hire me
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:gap-2">
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <Image className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Image1} alt="" />
              </div>
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <Image className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Image2} alt="" />
              </div>
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <Image className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Image3} alt="" />
              </div>
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <Image className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Image4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
