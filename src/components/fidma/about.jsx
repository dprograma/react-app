import React, { Component } from "react";
import axios from "axios";

// const About = () => {
//     return(
//         <div className="container-fluid">
//             <h4 className="text-center">About</h4>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt distinctio tempora ipsum quasi libero facere eos. Aspernatur recusandae molestiae laborum molestias, illum rerum, cupiditate voluptatibus quas consectetur magnam quia laudantium.</p>
//         </div>
//     );
// }

class About extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log("props", this.props)
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
      this.setState({ posts: res.data.slice(0, 10) });
    });
  }

  render() {
    const { posts } = this.state;
    const postList = this.state.posts.length ? (
      posts.map(post => {
        return (
          <div className="card m-3" key={post.id}>
            <div className="card-body">
              <h3 className="card-title text-center">{post.title}</h3>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <h3 className="text-center">No post yet</h3>
    );
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="offset-3 col-md-6">
            <h4 className="text-center">About</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              distinctio tempora ipsum quasi libero facere eos. Aspernatur
              recusandae molestiae laborum molestias, illum rerum, cupiditate
              voluptatibus quas consectetur magnam quia laudantium.
            </p>
            {postList}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
