import React, { useState, useEffect } from 'react';
import './TodoTable.scss';
import { MdAddCircle } from "react-icons/md";
import { FaChevronCircleDown } from "react-icons/fa";
import { MainHeaderCell, PeopleCell, StatusCell, DateCell, NumberCell, TimelineCell, TextCell, BlankCell } from './Cell';

function TodoTable({ list, moveRow}) {
  const [draggingI, setDraggingI] = useState(null);
  const [targetI, setTargetI] = useState(null);

  const componentSetter = (cell, rowI, cellI) => {
    switch (cell.type) {
      case 'mainHeader':
        return <MainHeaderCell props={ { value: cell.value, rowI } } />
      case 'people':
        return <PeopleCell props={ { value: cell.value, rowI } } />
      case 'status':
        return <StatusCell props={ { value: cell.value, rowI } } />
      case 'date':
        return <DateCell props={ { value: cell.value, rowI } } />
      case 'number':
        return <NumberCell props={ { value: cell.value, rowI } } />
      case 'timeline':
        return <TimelineCell props={ { value: cell.value, rowI } } />
      case 'text':
        return <TextCell props={ { value: cell.value, rowI } } />
      case 'blank':
        return <BlankCell props={ { value: cell.value, rowI } } />
      case 'addColumn':
        return <div className="empty">  X  </div>
      case 'empty':
        return <div className="empty">empty</div>
      default:
        break;
    }
  }

  const handleDragStart = (event, rowI, cellI) => {
    setDraggingI(rowI)
  }
  const handleDragEnter = (event, rowI, cellI) => {
    setTargetI(rowI)
  }
  const handleDragEnd = (event, rowI, cellI) => {
    moveRow(draggingI, targetI);
  }

  const todoTableTemplate = () => {
    return list.map((row, rowI) => {
      return <div
        draggable={ !rowI ? false : true }
        onDragStart={ (e) => handleDragStart(e, rowI)}
        onDragEnd={ (e) => handleDragEnd(e, rowI)}
        onDragEnter={(e) => handleDragEnter(e, rowI)}
        className="row"
      >
        <div className={ "actionCol Cell-wrapper " + (!rowI && 'head') }>
          { !rowI && <FaChevronCircleDown /> }
        </div>
        { row.map((cell, cellI) => {
          return <div className={ `${cell.type} Cell-wrapper ` + (!rowI && 'head') }>
            { componentSetter(cell, rowI, cellI) }
          </div>
        }) }
        <div className={ "addCol Cell-wrapper " + (!rowI && 'head') }>
          { !rowI && <MdAddCircle /> }
        </div>
      </div>
    })
  }

  return (<>
    <div className="TodoTable">
      { todoTableTemplate() }
    </div>
  </>);
}

export default TodoTable;
