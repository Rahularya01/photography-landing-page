import React from "react";
import WomanImg from "../img/about/woman.png";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
    <Head>
      <title>About | Alina Lee </title>
    </Head>
      <section className="section"> 
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
            <div className="flex-1 max-h-96 lg lg:max-h-[33rem] m order-2 lg:order-none overflow-hidden">
              <Image src={WomanImg} alt="Alina Lee" />
            </div>
            <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
              <h1 className="h1">About me</h1>
              <p className="mb-12 max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam dolorum nihil omnis totam saepe ullam tempora in
                maiores
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores, soluta?
              </p>
              <Link className="btn" href={"/portfolio"}>
                View my work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
