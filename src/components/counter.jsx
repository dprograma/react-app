import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCut} from '@fortawesome/free-solid-svg-icons'


class Counter extends Component {
  state = {
    count: this.props.value,
    // imageUrl: '19.jpg'
    tabs: ["Home", "About Us", "Contact Us", "FAQ", "News"]
  };

  assets = {
    images:{
      image1: '19.jpg',
      image2:'images/alex1.jpg'
    },
    font:{
      font1:'Roboto',
      font2:'San-serrif',
      font3:'Verdana'
    },
    styles:{
      fontSize: 12,
      height: 300,
      width: 300,
      fontWeight: 'bold',
      fontColor: 'whitesmoke',
      borderRadius: '50%'
    }
  }

  formatCount = () => {
    const count = this.state.count;
    return count === 0 ? "Zero" : count;
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  renderTags = () => {
    return (
      <nav className="nav nav-tabs">
        {this.state.tabs.map(tab => (
          <a href="#" key={tab} className={this.activeNav(tab)}>
            {tab}
          </a>
        ))}
      </nav>
    );
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  activeNav = navlink => {
    if (navlink === "Home"){
      return "nav-item nav-link active"
    }else{
      return "nav-item nav-link"
    }
  };

  render() {
    // let classes = this.formatBadge();

    return (
      <div>
        <span style={this.styles} className={this.formatBadge()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary m-2"
        ><FontAwesomeIcon icon={faCoffee} className="mr-2" />
          Increment
        </button>
        <img style={this.assets.styles} src={this.assets.images.image1} />
        {this.renderTags()}
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        ><FontAwesomeIcon icon={faCut} className="mr-2" />
          Delete
        </button>
      </div>
    );
  }

  formatBadge = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };
}

export default Counter;
