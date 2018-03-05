import React from 'react';
import Note from './Note';
import ContainerNoteEditor from './../containers/NoteEditor.jsx';
import NoteGrid from './NotesGrid';

import './App.scss';

class App extends React.Component {

    render (){
            // <div className="app">
            //     <h2 className="app__header">NotesApp</h2>
            //     <ContainerNoteEditor />
            //     <Note />
            //     <NoteGrid />
            // </div>
        return (
            
            <div className="app">
                <div className="app__sidebar">
                    <img src="http://localhost:8080/client/imgs/try.png" alt="" className="app__flexible-image "/>
                </div>
                <div className="app__main">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia eveniet beatae maiores numquam consequuntur quae fuga ratione non, quasi aliquid ipsum delectus! Ipsa dicta sint dolorum nesciunt necessitatibus qui!
                </div>
            </div>
        )
    }
}

export default App;