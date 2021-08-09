import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {createPosts} from './actions/postaction'

class Home extends Component {
  state = {};
  componentDidMount() {
    this.props.createPosts();
  }

  render() {
    console.log("Props", this.props);
    const postLink = this.props.data.length ? (
      this.props.data.slice(0, 10).map(post => {
        return (
          <div className="card m-3" key={post.id}>
            <div className="card-body">
              <Link to={"/" + post.id} className="text-decoration-none">
                <h3 className="card-title text-center">{post.title}</h3>
              </Link>
              <p className="card-text">{post.body}</p>
            </div>
          </div> 
        );
      })
    ) : (
      <div className="text-center">No post yet.</div>
    );
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="offset-2 col-md-8">
            <h4 className="text-center">Home</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              distinctio tempora ipsum quasi libero facere eos. Aspernatur
              recusandae molestiae laborum molestias, illum rerum, cupiditate
              voluptatibus quas consectetur magnam quia laudantium.
            </p>
            {postLink}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({data={}}) => ({
  data:data
});

export default connect(mapStateToProps,{createPosts})(Home);
