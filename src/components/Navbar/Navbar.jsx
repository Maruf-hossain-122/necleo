import React from "react";
import logo from "../../assets/icons/logo.svg";
import userImg from "../../assets/icons/user.svg";
import dropdownIcon from "../../assets/icons/dropdown.svg";
import line from "../../assets/icons/line.svg";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({ toggleSidebar, isSidebarVisible }) => {
  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center md:ml-[5rem] md:mr-[2rem]">
        <div className="flex items-center gap-2  md:hidden">
          <div className="ml-3 text-4xl">
            <button onClick={toggleSidebar} className="block md:hidden">
              {!isSidebarVisible ? <GiHamburgerMenu /> : <RxCross1 />}
            </button>
          </div>
          {/* left side */}
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
        {/* logo */}
        <div className="hidden md:block">
          <img src={logo} alt="" />
        </div>
        {/* right side */}
        <div className="flex items-start">
          {/* free trial info */}
          <div className="flex flex-col gap-[4px] justify-center">
            <div className="flex items-center gap-[11px]">
              <span className="font-medium text-sm">Free Trial</span>
              <span>
                <img src={line} alt="" />
              </span>
              <span className="font-normal text-[10px]">2 days left</span>
            </div>
            <span className="text-primary text-[10px] font-medium">
              Extend Free Trial
            </span>
          </div>
          {/* user img & dropdown */}
          <div className="flex items-center gap-2 ml-[14px]">
            {/* user img */}
            <div className="mr-[12px]">
              <img src={userImg} alt="" />
            </div>
            {/* dropdown */}
            <div class="dropdown">
              <button class="dropbtn">
                <div>
                  <img src={dropdownIcon} alt="" />
                </div>
              </button>
              {/* <div class="dropdown-content">
                <a href="#/">Profile</a>
                <a href="#/">Settings</a>
                <a href="#/">Logout</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
