import React, { useContext, useEffect } from 'react';
import './Cell.scss';
import { FaRegUserCircle } from "react-icons/fa";


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
      <div className="people-icon" title={props.value}><FaRegUserCircle /></div>
    </div>
  );
}



export function StatusCell({props}) {
  const currentState = parseInt(props.value)
  const { rowI } = props

  const statusCellStyle = [
    {
      name: 'Working on it',
      color: '#febf6f',
    },
    {
      name: 'Critical',
      color: '#a25ddc',
    },
    {
      name: 'Stuck',
      color: '#e2445b',
    },
    {
      name: 'Done',
      color: '#01c875',
    },
    {
      name: '',
      color: '#c4c4c4',
    },
  ]
  return (
    <div className="StatusCell">
      { rowI ? statusCellStyle[props.value].name : props.value}
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

