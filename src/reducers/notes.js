import { actions } from "../constants";
import uuid from 'uuid';

const initialState = {
  notes:[]
};

export default function(state = initialState, action) {
  switch (action.type) {

    case actions.ADD_NOTE: {
      const id = uuid.v1();
      const { title, content } = action.payload;
      return {
        ...state,
        notes: [...state.notes, {id, title, content}]
      };
    }

    default:
      return state;
  }
}