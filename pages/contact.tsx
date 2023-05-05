import Head from "next/head";
import Image from "next/image";
import React, { useRef } from "react";
import WomanImg from "../img/contact/woman.png";
import { doc } from "@firebase/firestore";
import { setDoc } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import { toast } from "react-hot-toast";

const Contact = () => {
  let toastID: string;

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLInputElement>(null);

  const form = useRef<HTMLFormElement>(null);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const timestamp: string = Date.now().toString();
    const _contact = doc(firestore, `todos/${timestamp}`);

    const contactData = {
      name: name.current?.value,
      email: name.current?.value,
      message: name.current?.value,
    };

    const promise = setDoc(_contact, contactData);

    toast.promise(promise, {
      loading: "Loading",
      success: "Message sent successfully",
      error: "Something Went Wrong",
    });

    promise.then(() => {
      form.current?.reset();
    });
  };
  return (
    <>
      <Head>
        <title>Contact | Alina Lee</title>
      </Head>
      <section className="section bg-white">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
            <div className="lg:flex-1  px-4">
              <h1 className="h1">Contact me</h1>
              <p className="mb-12">I would love to get suggestions from you.</p>
              <form
                ref={form}
                onSubmit={submitForm}
                className="flex flex-col gap-y-4"
              >
                <div className="flex gap-x-10">
                  <input
                    ref={name}
                    required
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Your name"
                  />
                  <input
                    ref={email}
                    required
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="email"
                    placeholder="Your email address"
                  />
                </div>
                <input
                  ref={message}
                  required
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your message"
                />
                <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                  Send it
                </button>
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
