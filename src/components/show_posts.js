import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPost, deletePost } from "../actions/index";
import { Link } from "react-router";

class ShowPosts extends Component {
//   static contextTypes = {
//     router: PropTypes.object
//   };
  componentWillMount() {
    console.log("component will mount now!!!");
    this.props.fetchPost(this.props.params.id);
  }
  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
    // .then(() => {
    //   this.contextTypes.router.push("/");
    // });
  }
  render() {
    if (!this.props.post) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete
        </button>
        <h3>{this.props.post.title}</h3>
        <h6>Categories: {this.props.post.categories}</h6>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost, deletePost }, dispatch);
}

function mapstatetoProps(state) {
  return { post: state.posts.post };
}
//passing null as passing dispathes must be the seconed argument in connect function
export default connect(
  mapstatetoProps,
  mapDispatchToProps
)(ShowPosts);
