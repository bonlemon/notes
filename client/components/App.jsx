import React from 'react';
import Note from './Note';
import ContainerNoteEditor from './../containers/NoteEditor.jsx';
import NoteGrid from './NotesGrid';

import './App.scss';

class App extends React.Component {

    render (){
        return (
            <div className="app">
                <h2 className="app__header">NotesApp</h2>
                <ContainerNoteEditor />
                <Note />
                <NoteGrid />
            </div>
        )
    }
}

export default App;