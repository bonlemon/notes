import React from 'react';
import { connect } from 'react-redux';

import App from './../components/App.jsx';

import * as actions from './../actions';



class ContainerNoteEditor extends React.Component {

    componentWillMount(){
        this.props.onLoadNotes();
    }

    handleCreateNote(note){
        console.log({note})

        this.props.onCreateNote(note);
    }

    render (){
        return <App 
            {...this.props} 
            onAddNote={this.handleCreateNote.bind(this)}
        />
    }   
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToPros = (dispatch) => {
    return {
        onCreateNote: (note) => {
            return dispatch(actions.createNote(note))
        } ,
        onLoadNotes:() => {
            return dispatch(actions.loadNotes())
        } ,
    }
}


export default connect(mapStateToProps, mapDispatchToPros)(ContainerNoteEditor);