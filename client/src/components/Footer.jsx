import React from 'react';
import { BsChevronUp } from 'react-icons/bs'

function Footer() {
    return (
      <footer className="gradient-bg-welcome md:px-20 py-4 px-4">
        <div className="flex flex-row justify-between items-center mt-10">
          <div className="flex flex-1">
            <img src={require(`../images/logo.png`)} alt='' className="w-32" />
          </div>
          <div className="flex flex-1 justify-center">
            <p className="text-white text-2xl text-center sm:block hidden">RIAD Dex</p>
          </div>
          <div className="flex flex-1 justify-end">
            <a href="#" className="">
              <BsChevronUp fontSize={40} className="text-white" />
            </a>
          </div>
        </div>
        <p className="text-1xl text-white text-center mt-10">Copyright 2021-2022 RIAD. All Rights Reserved.</p>
      </footer>
    );
  }

export default Footer;
