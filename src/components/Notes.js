import React from 'react';
import { connect } from "react-redux";
import Note from './Note';

const Notes = ({ notes }) => {
  return (
    <div className="Notes">
      { notes && notes.length
        ? notes.map(note =>  <Note {...note} /> )
        : 'No notes'
      }
    </div>
  );
}

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);