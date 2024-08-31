import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100025936477035" target="_blank">
              <FaFacebook size={24} />
              </a>
              <a href="https://www.youtube.com/@jatinhasiwal" target="_blank">
              <FaYoutube size={24} /> </a>
              <a href="https://www.instagram.com/jatin_.thakur/" target="_blank">
              <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jatinhasiwal1/" target="_blank">
              <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 - All rights reserved.
              </p>
              <p className="text-sm">Jatin Hasiwal</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;