import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value ,
    imageUrl: "logo192.png",
    tags: ["tag 1", "tag 2", "tag 3", "tag 4"]
  };

  // styles = {
  //   fontSize:'10px',
  //   fontWeight: 'bold'
  // }
  renderTags = () => {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul className="list-group">
        {this.state.tags.map(tag => (
          <li className="list-group-item" key={tag}>  
            {tag}
          </li>
        ))}
      </ul>
    )  ;
  }
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    console.log('props', this.props)
    return (
      <div>
        <span
          style={{ fontSize: "10px", fontWeight: "bold" }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        {/* <img src={this.state.imageUrl} alt="logo" /> */}
        {/* <div className="offset-3 col-md-6">{this.renderTags()}</div> */}
      </div>
    );
  }
  formatCount = () => {
    const value = this.state.value;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  };
}

export default Counter;
