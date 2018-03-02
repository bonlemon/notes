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

        this.handlerTextChange =    this.handlerTextChange.bind(this);
        this.handlerTitleChange =   this.handlerTitleChange.bind(this);
        this.handlerNoteAdd =       this.handlerNoteAdd.bind(this);
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

        this.props.onAddNote(newNote);

        this.setState({
            title: '',
            text: '',
            color: '#FFFFFF',
        })
    }
    render (){
        return (
            <div className="note-editor">
                <input
                    type="text"
                    className="note-editor__title"
                    placeholder="Enter title"
                    value={this.state.title}
                    onChange={this.handlerTitleChange}
                />

                <textarea
                    placeholder="Enter text"
                    rows={5}
                    className="note-editor__text"
                    value={this.state.text}
                    onChange={this.handlerTextChange}
                />
                <div className="note-editor__footer">
                    <button
                        className="note-editor__button"
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