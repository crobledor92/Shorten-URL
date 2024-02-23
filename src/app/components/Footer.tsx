import React from "react";

const Footer = () => {
  return (
    <footer className="mt-32 bg-blue-700 px-10 text-white">
      <div className="max-w-screen-md mx-auto pt-8">
        <div className=" grid grid-cols-2 my-auto gap-10 justify-between">
          <ul className="">
            <li className="link-animation-on-hover w-fit mb-6 underline underline-offset-1 hover cursor-pointer">
              Home
            </li>
            <li className="link-animation-on-hover w-fit mb-6 underline underline-offset-1 cursor-pointer">About</li>
            <li className="link-animation-on-hover w-fit mb-6 underline underline-offset-1 cursor-pointer">Services</li>
            {/* <li className="mb-6 underline underline-offset-1">Contact</li> */}
          </ul>
          <div className="text-right">
            <h3 className="mb-6">Contact us:</h3>
            <p className="mb-6">
              Email: <span className="font-semibold">info@shortenurl.com</span>
            </p>
            <p className="mb-6">
              Phone: <span className="font-semibold">+1 (555) 123-4567</span>
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-center pb-2">
          &copy; {new Date().getFullYear()} ShortenURL Tool. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
