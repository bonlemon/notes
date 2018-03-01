import React from 'react';
import Note from './Note';
import NoteEditor from './NoteEditor';
import NoteGrid from './NotesGrid';

import './App.scss';

class App extends React.Component {

    render (){
        return (
            <div className="b-app">
                <h2 className="b-app__header">NotesApp</h2>
                <NoteEditor onAddNote={this.props.onAddNote}/>
                <Note />
                <NoteGrid />
            </div>
        )
    }
}

export default App;