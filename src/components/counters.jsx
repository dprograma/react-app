import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  componentDidMount(){
    console.log("component has just mounted")
  }

  componentDidUpdate(prevState, nextState){
    console.log("Component is updated", prevState, nextState)
  }

  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    // console.log("This has been clicked", counterId)
    let mycount = this.state.counter.filter(count => count.id !== counterId)
    this.setState({counter:mycount})
  }

  render() {
    return (
      <div>
        {this.state.counter.map(count => (
          <Counter key={count.id} value={count.value} id={count.id} onDelete={this.handleDelete}/>
        ))}
      </div>
    );
  }
}

export default Counters;


