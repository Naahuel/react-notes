import React from 'react';
import { connect } from "react-redux";
import Note from './Note';
import Empty from './common/Empty';


const Notes = ({ notes }) => {
  return (
    <div className="Notes">
      { notes && notes.length
        ? notes.map(note =>  <Note key={note.id} {...note} /> )
        : <Empty>No notes</Empty>
      }
    </div>
  );
}

const mapStateToProps = state => {
  const { notes } = state;
  return { ...notes };
};

export default connect(mapStateToProps)(Notes);