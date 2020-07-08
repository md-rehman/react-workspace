import React, { useContext } from 'react';
import './Viewer.scss';
import TodoTable from './todoTable/TodoTable';
import { AppContext } from '../../store/context/AppContext';
import { MainContext } from '../../store/context/MainContext';

function Viewer() {
  const app = useContext(AppContext);
  const { state, dispatch } = useContext(MainContext);

  // Later I'll loop through state to render all boards

  return (
    <>
      <div className="Viewer">
        <TodoTable list={ state[app.state.activeBoard].list } moveRow={ (draggingI, targetI) => dispatch({ type: 'MOVE_ROW', activeBoard: app.state.activeBoard, draggingI, targetI }) } />
      </div>
    </>
  );
}

export default Viewer;
