import _ from "lodash"

export const MainReducer = function (state, action) {
  // let tempState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'MOVE_ROW':
      let dragging = _.pullAt(state[action.activeBoard].list, [action.draggingI]);
      console.log('dragging - ', dragging);
      state[action.activeBoard].list.splice(action.targetI, 0, dragging[0]);
      console.log('state', state[action.activeBoard].list);
      return state;
      break;
    default:
      break;
  }
  return state
}