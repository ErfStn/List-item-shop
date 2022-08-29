import React, { Component } from 'react';

class ClassTimer extends Component {
    state = { count: 0 } 
    componentDidMount() {
        this.myTimer = setInterval(() => {
            console.log("mount");
            this.setState({count: this.state.count+1})
            console.log("mount");
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.myTimer)
        console.log("componentWillUnmount");
    }
    render() { 
        return (
            <div>
                Class interval
            </div>
        );
    }
}
 
export default ClassTimer;