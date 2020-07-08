import React, { useContext, useEffect } from 'react';
import './Cell.scss';
import { FaEnvelope, FaMobileAlt, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaCodepen, FaCode } from "react-icons/fa";


export function MainHeaderCell({ props }) {

  return (
    <div className="MainHeaderCell">
      { props.value }

    </div>
  );
}

export function PeopleCell({ props }) {

  return (
    <div className="PeopleCell">
      { props.value }
    </div>
  );
}

export function StatusCell({ props }) {

  return (
    <div className="StatusCell">
      { props.value }
    </div>
  );
}

export function DateCell({ props }) {

  return (
    <div className="DateCell">
      { props.value }
    </div>
  );
}

export function NumberCell({ props }) {

  return (
    <div className="NumberCell">
      { props.value }
    </div>
  );
}

export function TimelineCell({ props }) {

  return (
    <div className="TimelineCell">
      { props.value }
    </div>
  );
}

export function TextCell({ props }) {

  return (
    <div className="TextCell">
      { props.value }
    </div>
  );
}

export function BlankCell({ props }) {

  return (
    <div className="BlankCell">
      { props.value }
    </div>
  );
}

