import React, { Component } from 'react';
import { connect } from "react-redux";
import { addNote, showAddNoteModal, hideAddNoteModal } from '../actions';

class AddNote extends Component {

  render() {
    return (
      <div className="Notes">
       <button onClick={this.props.showAddNoteModal}>Add note</button>

        { this.props.addNoteModal.showModal &&
          <div className="AddNoteModal">
            <h2>Add a new note!</h2>
            <input type="text" />
            <textarea></textarea>
            <button onClick={this.props.hideAddNoteModal}>Save</button>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { addNoteModal } = state;
  return { addNoteModal };
};

export default connect(mapStateToProps,{ addNote, showAddNoteModal, hideAddNoteModal })(AddNote);