import React from 'react';
import Note from './Note';
import NoteEditor from './NoteEditor';
import NoteGrid from './NotesGrid';

import './App.scss';

class App extends React.Component {
    constructor(props){
        super(props);

    }

    handleNoteAdd(data){
        console.log({data})
    }

    render (){
        return (
            <div className="b-app">
                <h2 className="b-app__header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <Note />
                <NoteGrid />
            </div>
        )
    }
}

export default App;