import React, { Fragment } from "react";
import { DownloadBtn } from "../core";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <Fragment>
      <div className="bg-[#00000010] backdrop-blur-[13px]">
        <div className="flex items-center justify-between px-6 md:px-14 py-4 max-w-[1440px] mx-auto">
          <Link to='/' className="text-xl font-semibold sm:text-2xl md:text-3xl text-blue_deep">
            ADDR-CHECKR
          </Link>

          {
            pathname == '/' && <DownloadBtn />
          }
        </div>
      </div>
    </Fragment>
  );
};

export { Navbar as default };
