import React, { useContext } from 'react';
import './NavSub.scss';
import { MdWhatshot, MdNotificationsNone, MdFileDownload, MdDateRange, MdPermIdentity, MdSearch } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { MainContext } from '../../../store/context/MainContext';


function NavSub() {
  const {state, dispatch} = useContext(MainContext);

  const groupTemplate = () => state.map(item => <div className="item">
    { item.name }
  </div>)

  return <>
    <div className="subNav">
      <section className="top-section">
        <div className="header">
          Workspace
        </div>
        <div className="filter">
          <MdSearch />
        </div>
        <div className="group-header">
          { groupTemplate() }
        </div>
      </section>
      <section className="bottom-section">
        <div className="wide-title">
          Dashboards
        </div>
        <div className="add">
          <button>
            Get the app on mobile
          </button>
        </div>
      </section>
    </div>
  </>
}

export default NavSub;