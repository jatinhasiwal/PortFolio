import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped,Typed } from "react-typed";
import pic from "../../public/jatinimg.jpg"
import resume from "../assets/My Resume (2).pdf"
function Home() {
  return (
    <>
      <div 
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className=" space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm Jatin Hasiwal </h1>
              {/* <span className="text-red-700 font-bold"> Developer</span> */}
              <ReactTyped className="text-red-700 font-bold md:text-5xl text-3xl"
          strings={["Develper", "Programmer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
           />
            </div> <br />
            <p className="text-sm md:text-md text-justify">
            I work to make a better web, one that is fast, easy to use, beautiful, acceassible to all, and frustration free. Regardless of your specific business requirements.
            </p>
            <br />
            <div>
            <a
      href={resume}  // Make sure the path to your resume is correct
      download="JatinHasiwal_Resume.pdf"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block text-center"
    >
      Download Resume
    </a>
            </div> <br />
            {/* social meida icons------------------------------------- */}
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 items-center justify-between">
              <div className="space-y-2 ">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-3 text-2xl cursor-pointer">
                  <li>
                    <a href="https://www.linkedin.com/in/jatinhasiwal1/" target="_blank">
                    <IoLogoLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100025936477035" target="_blank">
                    <FaFacebookSquare />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/jatin_.thakur/" target="_blank">
                    <FaSquareInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@jatinhasiwal" target="_blank">
                    <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5">
                <SiMongodb className="text=xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text=xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text=xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text=xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          {/* image part -------------------------------------------------- */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-6 ml-[90px] order-1 ">
          <img src={pic} className="rounded-full md:w-[350px] md:h-[340px] h-[200px] w-[200px]" alt="" />
          </div>
        </div>
      </div>
      <br /> <br />
      <hr />
    </>
  );
}

export default Home;
