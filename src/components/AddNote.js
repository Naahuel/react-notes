import React, { Component } from 'react';
import { connect } from "react-redux";
import { addNote, showAddNoteModal, hideAddNoteModal } from '../actions';
import Button from './common/Button';

class AddNote extends Component {

  render() {
    return (
      <div className="Notes">
       <Button type="save" onClick={this.props.showAddNoteModal}>Add note</Button>

        { this.props.addNoteModal.showModal &&
          <div className="AddNoteModal">
            <h2>Add a new note!</h2>
            <input type="text" />
            <textarea></textarea>
            <Button type="save" onClick={this.props.hideAddNoteModal}>Save</Button>
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