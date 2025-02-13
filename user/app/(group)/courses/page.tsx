"use client";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const FormPage = () => {
  const [degree, setDegree] = useState("");
  const [subject, setSubject] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/courses/choice");
  };

  return (
    <div className="bg-blue-100 text-black">
      <div className="container mx-auto py-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6 font-Montserrat text-teal-400">
          Begin your journey,{" "}
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent text-gradient-darks">
              Cultivate expertise
            </span>
            <img
              src="/highlight.svg"
              alt="highlight"
              className="absolute bottom-[-7px] left-0 w-full"
            />
          </span>
          ✨
        </h1>
        <h2 className="text-base lg:text-lg mb-6 text-zinc-600 leading-relaxed text-center font-Josefin">
          Discover beyond traditional courses. Our guidance spans all four
          stages of learning and evaluation.
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200 font-Josefin"
        >
          <div className="mb-4">
            <label
              htmlFor="degree"
              className="block font-bold mb-2 text-gray-800"
            >
              Select Degree:
            </label>
            <select
              id="degree"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-teal-400 bg-transparent"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            required>
              <option value="">Select Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">PhD</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block font-bold mb-2 text-gray-800"
            >
              Select Subject:
            </label>
            <select
              id="subject"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-teal-400 bg-transparent"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            required>
              <option value="">Select Subject</option>
              <option value="math">Mathematics</option>
              <option value="science">Science</option>
              <option value="history">History</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
      <hr className="mx-8 my-12 custom-hr dark:border-teal-400" />
      <footer className="text-white py-12">
        <div className="container mx-auto font-Josefin">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mr-6">
            <div className="col-span-1" id="company">
              <div className="mx-4">
                <a
                  href={"/"}
                  className="text-[40px] font-Josefin font-[900] text-black relative"
                >
                  <span className="text-gradient-darks dark:text-teal-500">
                    INSIGHT
                  </span>
                  <sup className="text-gradient-darks">Arc</sup>
                  <span className="text-gradient-darks dark:text-teal-500">
                    AI
                  </span>
                </a>
              </div>
              <p className="text-sm my-6 mx-4 text-black">
                InsightArcAI has been the front-runner in applying innovation at
                work. This simple philosophy has <br />
                been the cornerstone of all our processes and technologies.
              </p>
              <div className="social mx-4 flex">
                <a
                  href="/"
                  className="mr-2 transform transition duration-300 hover:scale-110"
                >
                  <FaFacebook className=" text-black dark:hover:text-blue-700 hover:text-blue-700 text-xl" />
                </a>
                <a
                  href="/"
                  className="mr-2 transform transition duration-300 hover:scale-110"
                >
                  <FaInstagram className=" text-black dark:hover:text-pink-700 hover:text-pink-700 text-xl" />
                </a>
                <a
                  href="/"
                  className="mr-2 transform transition duration-300 hover:scale-110"
                >
                  <FaYoutube className=" text-black dark:hover:text-red-700 hover:text-red-700 text-xl" />
                </a>
                <a
                  href="/"
                  className="mr-2 transform transition duration-300 hover:scale-110"
                >
                  <FaTwitter className=" text-black dark:hover:text-blue-600 hover:text-blue-600 text-xl" />
                </a>
                <a
                  href="/"
                  className="transform transition duration-300 hover:scale-110"
                >
                  <FaLinkedin className=" text-black dark:hover:text-blue-900 hover:text-blue-900 text-xl" />
                </a>
              </div>
            </div>

            <div className="col-span-1" id="services">
              <h2 className="text-xl mb-4 dark:text-teal-400 text-violet-600">
                Quick links
              </h2>
              <div className="links">
                <a href="/" className="block mb-2  text-black hover:underline">
                  Home
                </a>
                <a
                  href="/courses"
                  className="block mb-2  text-black hover:underline"
                >
                  Courses
                </a>
                <a
                  href="/about"
                  className="block mb-2  text-black hover:underline"
                >
                  About
                </a>
                <a
                  href="/courses"
                  className="block mb-2  text-black hover:underline"
                >
                  Labs
                </a>
              </div>
            </div>

            <div className="col-span-1" id="useful-links">
              <h2 className="text-xl mb-4 dark:text-teal-400 text-violet-600">
                Legal
              </h2>
              <div className="links">
                <a
                  href="/policy"
                  className="block mb-2  text-black hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="/policy"
                  className="block mb-2  text-black hover:underline"
                >
                  Terms of use
                </a>
                <a
                  href="/policy"
                  className="block mb-2  text-black hover:underline"
                >
                  Refund & Cancellation Policy
                </a>
                <a
                  href="/faq"
                  className="block mb-2  text-black hover:underline"
                >
                  Careers
                </a>
              </div>
            </div>

            <div className="col-span-1" id="contact">
              <h2 className="text-xl mb-4 dark:text-teal-400 text-violet-600">
                Contact
              </h2>
              <div className="contact-details flex items-center mb-2">
                <FaMapMarkerAlt className="dark:text-teal-400 text-violet-600 mr-2" />
                <p className=" text-black">
                  1234,XYZ Layout, Bangalore - 560001, Karnataka, India.
                </p>
              </div>
              <div className="contact-details flex items-center mb-2">
                <FaPhone className="dark:text-teal-400 text-violet-600 mr-2" />
                <p className="mt-2  text-black">+91-8168754874</p>
              </div>
              <div className="contact-details flex items-center mb-2">
                <FaEnvelope className="dark:text-teal-400 text-violet-600 mr-2" />
                <p className="mt-2  text-black">team@insightarcai.com</p>
              </div>
            </div>
          </div>

          <div className="centered-form mt-8 flex justify-center mb-5">
            <form action="" className="flex items-center">
              <input
                type="text"
                placeholder="Email here..."
                className="flex-1 px-4 py-2 border dark:border-gray-300 border-gray-600  text-black rounded-l focus:outline-none custom-input"
              />
              <button
                type="submit"
                className="dark:bg-teal-400 bg-purple-400 text-gray-900 px-5 py-3 rounded-r dark:hover:bg-teal-500 hover:bg-purple-500 transition duration-300 focus:outline-none"
              >
                <AiOutlineMail className="text-lg" />
              </button>
            </form>
          </div>
        </div>
        <hr className="mx-8 my-10 custom-hr dark:border-teal-400 border-purple-600" />
        <p
          className="text-center mt-4 font-Josefin  text-black text-lg"
          id="copyright"
        >
          © 2024,
          <a href="/" className="text-gradient-dark">
            {" "}
            InsightArcAI.com{" "}
          </a>
          , Inc. or its affiliates
        </p>
        <p className="mt-2  text-black text-center font-Josefin">
          Made with ❤️ by InsightArcAI Team
        </p>
      </footer>
    </div>
  );
};

export default FormPage;
