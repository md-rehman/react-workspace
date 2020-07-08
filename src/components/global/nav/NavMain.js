import React from 'react';
import './NavMain.scss';
import { MdWhatshot, MdNotificationsNone, MdFileDownload, MdDateRange, MdPermIdentity, MdSearch } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { DiAtom } from "react-icons/di";


function NavMain() {
  return <>
    <div className="nav">
      <div className="top-icons">
        <span className="logo">
          <DiAtom />
        </span>
        <span className="icon">
          <MdNotificationsNone />
        </span>
        <span className="icon">
          <MdFileDownload />
        </span>
      </div>
      <div className="bottom-icons">
        <span className="icon">
          <MdDateRange />
        </span>
        <span className="icon">
          <MdSearch />
        </span>
        <span className="icon">
          <MdPermIdentity />
        </span>
        <div className="text">
          ?
        </div>
        <span className="avatar">
          <FaRegUserCircle />
        </span>
      </div>
    </div>
  </>
}

export default NavMain;