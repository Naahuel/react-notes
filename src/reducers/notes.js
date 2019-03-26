import { actions } from "../constants";

const initialState = [{
  id: 1,
  title: 'test',
  content: 'Fuck you'
}];

export default function(state = initialState, action) {
  switch (action.type) {

    case actions.ADD_NOTE: {
      const { id, title, content } = action.payload;
      return {
        ...state,
        notes: [...state, {id, title, content}]
      };
    }

    default:
      return state;
  }
}