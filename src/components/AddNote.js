import React, { Component } from 'react';
import { connect } from "react-redux";
import { addNote } from '../actions';
import Button from './common/Button';
import Modal from './common/Modal';

class AddNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      title: '',
      content: ''
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleNoteSave = this.handleNoteSave.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  toggleModal() {
    /** Hide or show the modal */
    this.setState({showModal: !this.state.showModal});
  }

  handleNoteSave() {
    /** Save the note */
    if( this.state.title && this.state.content ) {
      this.toggleModal();
      this.props.addNote({...this.state});
      this.setState({title: '', content: ''});
    }
  }

  handleTitleChange(e) {
    /** Update the title */
    this.setState( {title: e.target.value} );
  }

  handleContentChange(e) {
    /** Update the content */
    this.setState( {content: e.target.value} );
  }

  render() {
    return (
      <div className="Notes">
       <Button type="save" onClick={this.toggleModal}>Add note</Button>

        { this.state.showModal &&
          <Modal>
            <h2>Add a new note!</h2>
            <input onChange={this.handleTitleChange} type="text" value={this.state.title} />
            <textarea onChange={this.handleContentChange} value={this.state.content} />
            <Button type="save" onClick={this.handleNoteSave}>Save</Button>
          </Modal>
        }
      </div>
    );
  }
}


export default connect( null,{ addNote } )( AddNote );