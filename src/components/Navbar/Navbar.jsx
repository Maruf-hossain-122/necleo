import React from "react";
import "./Navbar.css";
import logo from "../../assets/icons/logo.svg";
import userImg from "../../assets/icons/user.svg";
import dropdownIcon from "../../assets/icons/dropdown.svg";
import line from "../../assets/icons/line.svg";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center md:ml-[5rem] md:mr-[2rem]">
        {/* left side */}
        <div>
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
              <div class="dropdown-content">
                <a href="#/">Profile</a>
                <a href="#/">Settings</a>
                <a href="#/">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
