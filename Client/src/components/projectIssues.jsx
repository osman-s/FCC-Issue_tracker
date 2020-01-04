import React, { Component } from "react";
import IssuePostForm from "./issuePostForm";
import { getPosts } from "../services/issueService";

class ProjectIssues extends Component {
  state = {
    issues: []
  };
  async componentDidMount() {
    const { data: issues } = await getPosts();
    this.setState({ issues });
    console.log(this.state);
  }

  // handleDelete = async movie => {
  //   const originalMovies = this.state.movies;
  //   const movies = originalMovies.filter(m => m._id !== movie._id);
  //   this.setState({ movies });

  //   try {
  //     await deleteMovie(movie._id);
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       toast.error("This movie has already been deleted.");

  //     this.setState({ movies: originalMovies });
  //   }
  // };

  render() {
    const posts = this.state.issues;
    return (
      <div>
        <h1 className="center"></h1>
        <IssuePostForm />
        {posts.map(post => (
          <div className="projbox" key={post._id}>
            <div className="project-issues">
              <div className="project-id">{post._id}</div>
              <p className="project-title">
                {post.title} ({post.state})
              </p>
              <div className="project-text">
                {post.text} <br></br>
                {post.status}
              </div>
              <div className="project-keys">
                <b>Created by:</b> {post.createdby} <b>Assigned to: </b>
                {post.assignedto}
              </div>
              <div className="project-keys">
                <b>Created on:</b> {post.createdon}
                {post.updateddon && (
                  <span>
                    {" "}
                    <b>Last Updated: </b>
                    {post.updatedon}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectIssues;
