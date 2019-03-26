import { actions } from "../constants";

export const addNote = ( {title, content} ) => ({
  type: actions.ADD_NOTE,
  payload: {title, content}
});