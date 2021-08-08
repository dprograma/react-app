import React, {Component} from 'react'
import {connect} from 'react-redux'


class Posts extends Component {
    render() { 
        console.log("Props", this.props);
        const post = this.props.post ? (
            <div className="row">
                <div className="offset-2 col-md-8">
                    <h4 className="text-center">{this.props.post.title}</h4>
                    <p className="text-left">{this.props.post.body}</p>
                </div>

            </div>
        ) : (
            <div className="text-center">Loading post...</div>
        )

        return(
            <div className="container">{post}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    var id  = ownProps.match.params.post_id
    return {
        post:state.data.find(d => d.id == id)
    }
}
 
export default connect(mapStateToProps)(Posts);