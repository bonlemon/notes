import React from 'react';
import Note from './Note.jsx';
import NoteEditor from './NoteEditor.jsx';
import NoteGrid from './NotesGrid.jsx';

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
            <div className="App">
                <h2 className="App__header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <Note />
                <NoteGrid />
            </div>
        )
    }
}

export default App;