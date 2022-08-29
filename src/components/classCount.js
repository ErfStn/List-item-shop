import React, { Component } from "react";

class ClassCount extends Component {
  state = {
    count: 0,
    };
    addOneHandler =()=> {
        this.setState(prevState => { //=> prevState hamon state 3 khate balas
            return {
                count :prevState.count+1
            }
        })
    }
  render() {
    return (
      <div>
        <h2>Count = {this.state.count}</h2>
        <button onClick={this.addOneHandler}>add one</button>
        {/* <button onClick={addTweHandler}>add two</button>
            <button onClick={addFiveHandler}>add five</button> */}
      </div>
    );
  }
}

export default ClassCount;
