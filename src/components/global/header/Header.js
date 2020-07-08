import React, { useContext } from 'react';
import './Header.scss';
import { MainContext } from '../../../store/context/MainContext';
import { AppContext } from '../../../store/context/AppContext';
import { FaRegUserCircle, FaPlug, FaRobot, FaEllipsisH, FaRegListAlt, FaEyeSlash } from "react-icons/fa";
import { BsStar, BsPeople, BsChevronCompactDown, BsFilter } from "react-icons/bs";


function Header() {
  const { state, dispatch } = useContext(MainContext);
  const app = useContext(AppContext);

  return <>
    <header>
      <div className="mainHeader">
        <div className="mainHeader-left">
          <div className="header">
            { state[app.state.activeBoard].name } <BsStar />
          </div>
          <div className="subHeader">
            Add board description
          </div>
        </div>
        <div className="mainHeader-right">
          <div className="people-wrapper">
            <FaRegUserCircle />
          </div>
          <div className="hex-button">
            <FaPlug /> / 0
          </div>
          <div className="hex-button">
            <FaRobot /> / 0
          </div>
          <div className="round-button">
            Start zoom call
          </div>
          <div className="round-button">
            Start zoom call
          </div>
          <div className="button">
            <BsPeople /> / 1 | Activities / 0
          </div>
          <div className="menu">
            <FaEllipsisH />
          </div>
        </div>
      </div>
      <div className="subHeader">
        <div className="subHeader-left">
          <div className="header">
            <FaRegListAlt /> Main Table <BsChevronCompactDown />
          </div>
        </div>
        <div className="subHeader-right">
          <div className="round-button">
            Start zoom call
          </div>
          <div className="round-input">
            Start zoom call
          </div>
          <div className="icon">
            <FaRegUserCircle />
          </div>
          <div className="icon">
            <FaEyeSlash />
          </div>
          <div className="icon">
            <BsFilter />
          </div>
        </div>
      </div>
    </header>
  </>
}

export default Header;