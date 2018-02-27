import React from 'react';
 
import './NoteEditor.scss';

class NoteEditor extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            text: '',
            color: '#FFFFFF',
        };
    }

    handlerTextChange(event){
        this.setState({
            text: event.target.value
        })
    }
    handlerTitleChange(event){
        this.setState({
            title: event.target.value
        })
    }
    handlerNoteAdd(){
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        }

        this.props.onNoteAdd(newNote);

        this.setState({
            title: '',
            text: '',
            color: '#FFFFFF',
        })
    }
    render (){
        return (
            <div className="b-note-editor">
                <input
                    type="text"
                    className="b-note-editor__title"
                    placeholder="Enter title"
                    value={this.state.title}
                    onChange={this.handlerTitleChange}
                />

                <textarea
                    placeholder="Enter text"
                    rows={5}
                    className="b-note-editor__text"
                    value={this.state.text}
                    onChange={this.handlerTextChange}
                />
                <div className="b-note-editor__footer">
                    <button
                        className="b-note-editor__button"
                        disabled={!this.state.text}
                        onClick={this.handlerNoteAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

export default NoteEditor;