import { actions } from "../constants";

const initialState = {
  showModal: false,
  noteTitle: '',
  noteContent: ''
};

export default function(state = initialState, action) {
  switch (action.type) {

    case actions.SHOW_ADD_NOTE_MODAL: {
      return {
        ...state,
        ...{ showModal: true }
      };
    }

    case actions.HIDE_ADD_NOTE_MODAL: {
      return {
        ...state,
        ...{ showModal: false }
      };
    }

    default:
      return state;
  }
}