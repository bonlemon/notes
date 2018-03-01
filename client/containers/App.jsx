import connect from 'react-redux';

import App from './../components/App';

import * as actions from './../actions';


class ContainerApp extends React.Component {

    componentWillMount(){
        this.props.actions.loadNotes();
    }

    handleCreateNote(note){
        console.log({note})

        this.props.actions.createNote(note);
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


export default connect(mapStateToProps, actions)(ContanerApp);