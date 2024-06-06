import React from 'react'
import {
    FaFacebook,
    FaTwitter, 
    FaLinkedinIn, 
    FaInstagram} from "react-icons/fa6"

function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <FaFacebook size={24} className='cursor-pointer'/>
                    <FaTwitter size={24} className='cursor-pointer'/>
                    <FaInstagram size={24} className='cursor-pointer'/>
                    <FaLinkedinIn size={24} className='cursor-pointer'/>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p className='text-sm '>
                        &copy; all right reserved by prashant subedi
                    </p>
                    <p className='text-sm '>
                        Made By : Prashant
                    </p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
