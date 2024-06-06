import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.avif"

const House = () => {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <br />
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
          <span className='text-xl'>Welcome in My Feed</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className='text-red-700 font-bold'
              strings={["Developer", "Scrapper", "DevOps"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <br />
          <p className='text-sm md:text-md text-justify'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam temporibus molestias, quidem ex rem consequatur 
            dolores ut, corrupti deleniti, provident tempora labore? 
            Deserunt soluta consequuntur eaque earum cumque itaque animi.
          </p>
          <br />
          {/* social media icons */}
          <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
            <div className='space-y-2'>
              <h1 className='font-bold'>Available on</h1>
              <ul className='flex space-x-5'>
                <li>
                  <a href="https://www.facebook.com/" target='_blank'>
                    {" "}
                    <FaSquareFacebook className='text-2xl cursor-pointer'/>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/prashantsbd" target='_blank'>
                    {" "}
                    <FaLinkedin className='text-2xl cursor-pointer'/>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target='_blank'>
                    {" "}
                    <IoLogoYoutube className='text-2xl cursor-pointer'/>
                  </a>
                </li>
                <li>
                  <a href="https://web.telegram.org/k/#-1559652138" target='_blank'>
                    {" "}
                    <FaTelegram className='text-2xl cursor-pointer'/>
                  </a>
                </li>
              </ul>
            </div>
            <div className='space-y-2'>
              <h1 className='font-bold'>Currently Working on</h1>
              <div className='flex space-x-5'>
                <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-210 rounded-full border-[2px]'/>
                <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-210 rounded-full border-[2px]'/>
                <FaReact className='text-xl md:text-3xl hover:scale-110 duration-210 rounded-full border-[2px]'/>
                <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-210 rounded-full border-[2px]'/>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 md:order-2 relative flex items-center'>
          <img src={pic} className='rounded-full md:w-[70%] xl:w-[400px] md:absolute md:right-0'/>
        </div>
      </div>
    </div>
    <hr />
    </>
  )
}

export default House
