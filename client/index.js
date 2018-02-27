import ReactDOM from 'react-dom';
import React from 'react';

class HelloWorld extends React.Component {
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
            </div>
        )
    }
}


ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
)