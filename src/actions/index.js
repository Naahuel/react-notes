import { actions } from "../constants";

export const addNote = content => ({
  type: actions.addNote,
  payload: { }
});

export const showAddNoteModal = () => ({
  type: actions.SHOW_ADD_NOTE_MODAL
});

export const hideAddNoteModal = () => ({
  type: actions.HIDE_ADD_NOTE_MODAL
});