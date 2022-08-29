import React, { Component, Fragment } from 'react';

class ClassComponent extends Component {
    state = {
        name: "",
        count:0
    } 
    componentDidMount() {
        document.title = `count: ${this.state.count}`
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("document title updating");
        document.title = `count: ${this.state.count}`
}
    }

    render() { 
        return (
            <Fragment>
                <input type="text" onChange={(e) => {this.setState({name:e.target.value}) }} />
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Count {this.state.count}</button>
            </Fragment>
        );
    }
}
 
export default ClassComponent;