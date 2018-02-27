import React from 'react';
import Note from './Note.jsx';
import NoteEditor from './NoteEditor.jsx';
import NoteGrid from './NotesGrid.jsx';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        })
    }

    render (){
        return (
            <div>
                <h1>Hi {this.state.name}</h1>
                <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
                <Note />
                <NoteEditor />
                <NoteGrid />
            </div>
        )
    }
}

export default App;