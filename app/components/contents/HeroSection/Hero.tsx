"use client";
import React, { useState } from "react";
import styles from "./Hero.module.css";
import Modal from "../../Modal/Modal";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className={`${styles.Hero} `}>
      {" "}
      <div className=" mt-[%] py-[6%] text-white tracking-widest px-[5%] flex flex-col gap-[20px] md:py-0 md:mt-[8%] lg:mt-0 lg:py-0 lg:gap-[25px]">
        <h1
          className={`pt-[25%] text-[37px] font-extrabold md:text-[47px] lg:text-[70px] lg:w-[80%] lg:mx-auto lg:text-center lg:pt-[8%] `}
        >
          Refresh Your Space with{" "}
          <span className="text-[#823ec9]">Sparkling Clean</span> Solution
        </h1>
        <p className="md:text-[24px] text-justify lg:text-center text-[#773bb8] bg-[#ffffffa0] p-[1%] lg:w-[80%] lg:mx-auto ">
          Crafting a spotless legacy in your home or office is not just our
          mission, it&apos;s our passion.
        </p>
        <button
          onClick={openModal}
          className="bg-[#823ec9] w-[60%] py-[4%] hover:bg-white hover:text-[#823ec9] md:text-[25px] lg:mx-auto lg:w-[25%] lg:rounded-[10px] lg:py-[1%]"
        >
          Request an Estimate
        </button>
      </div>
      {/* ======Estimate Modal====== */}
      {showModal && (
        <Modal>
          <form
            className="estimate relative  text-black bg-white w-full h-[94%] mx-[5%] rounded-[5px] overflow-auto lg:w-[60%] lg:rounded-[15px]"
            action="https://formspree.io/f/xqkrredp"
            method="POST"
          >
            <div className="estimate-bg flex flex-col gap-[15px] py-[10%] px-[5%] lg:py-[6%]">
              <FaTimes
                onClick={closeModal}
                className="text-[#823ec9] absolute right-[3%] top-[2%] text-2xl lg:text-3xl"
              />
              <Image
                className="logo-estimate mb-[7%] mx-auto lg:mb-[5%]"
                src="/the_gaily_logo.png "
                alt=""
                width={500}
                height={500}
              />
              <div className="lg:grid grid-cols-2 flex flex-col gap-[25px]">
                <div className="flex items-center gap-[10px]">
                  <FaUser className="text-2xl lg:text-3xl text-[#823ec9]" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-[10px]">
                  <FaUserAlt className="text-2xl lg:text-3xl text-[#823ec9]" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-[10px]">
                  {/* <label>Email:</label> */}
                  <MdEmail className="text-2xl lg:text-3xl text-[#823ec9]" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-[10px]">
                  {/* <label>Phone Number:</label> */}
                  <BsFillTelephoneFill className="text-2xl lg:text-3xl text-[#823ec9]" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telephone"
                    className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-[10px]">
                  {/* <label>Number of Pets:</label> */}
                  <MdOutlinePets className="text-2xl lg:text-3xl text-[#823ec9]" />
                  <input
                    type="number"
                    name="numberOfPets"
                    placeholder="Number of pets"
                    className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-[10px]">
                  {/* <label>Bedrooms:</label> */}
                  <IoBedSharp className="text-2xl lg:text-3xl text-[#823ec9]" />
                  <input
                    type="number"
                    name="bedrooms"
                    placeholder="How many bedrooms"
                    className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
                  />
                </div>
              </div>
              <div className="lg:my-[3%] flex flex-col gap-[15px] md:flex md:flex-row md:gap-[25px] ">
                {" "}
                <div className="lg:flex lg:w-full">
                  <label>Full Bathrooms:</label>
                  <input
                    type="number"
                    name="fullBathrooms"
                    placeholder="Number of full bathrooms"
                    className="focus:border-none focus:outline-none h-[35px] lg:h-[45px] w-full "
                  />
                </div>
                <div className="lg:flex lg:w-full">
                  <label>Half Bathrooms:</label>
                  <input
                    type="number"
                    name="halfBathrooms"
                    placeholder="Number of half bathrooms"
                    className="focus:border-none focus:outline-none h-[35px] lg:h-[45px] w-full"
                  />
                </div>
              </div>

              <p>Others:</p>

              <div className="grid grid-cols-2 gap-[10px]">
                <div>
                  <label>Dining Room:</label>
                  <input type="checkbox" name="dining" />
                </div>
                <div>
                  <label>Kitchen:</label>
                  <input type="checkbox" name="kitchen" />
                </div>
                <div>
                  <label>Living Room:</label>
                  <input type="checkbox" name="livingRoom" />
                </div>
                <div>
                  <label>Family Room:</label>
                  <input type="checkbox" name="familyRoom" />
                </div>
                <div>
                  <label>Laundry:</label>
                  <input type="checkbox" name="laundry" />
                </div>
                <div>
                  <label>Utility Room:</label>
                  <input type="checkbox" name="utilityRoom" />
                </div>
                <div>
                  <label>Den:</label>
                  <input type="checkbox" name="den" />
                </div>
                <div>
                  <label>Loft:</label>
                  <input type="checkbox" name="loft" />
                </div>
                <div>
                  <label>Basement:</label>
                  <input type="checkbox" name="basement" />
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#823ec9] text-white w-[50%] mx-auto p-[2%] lg:w-[30%] lg:text-[20px] lg:p-[1%] hover:bg-white hover:text-[#823ec9] hover:border hover:border-[#823ec9]"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Hero;
