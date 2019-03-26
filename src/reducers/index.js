import { combineReducers } from "redux";
import notes from './notes';
import addNoteModal from './addNoteModal';


export default combineReducers({ notes, addNoteModal });
