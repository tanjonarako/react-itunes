import { combineReducers } from 'redux';

const listReducer = (state = [], action) => {
  if (action.type === "updateList_SUCCESS") {
    return action.payload.list
  }
  return state;
};

export default combineReducers({
  list: listReducer
});
