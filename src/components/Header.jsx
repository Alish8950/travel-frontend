import React from "react";
import { DummyProfile, Logo } from "../assets";

const Header = () => {
  return (
    <>
      <div className="h-[80px] flex items-center justify-between px-9 header-box-shadow bg-white">
        <div className="">
          <img src={Logo} alt="logo" />
        </div>
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <img src={DummyProfile} alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Header;
