import React, { Component } from "react";
import IssuePostForm from "./issuePostForm";


class ProjectIssues extends Component {
  state = {
    movies: []
  };



  render() {

    return (
      <div >
        <h1 className="center"></h1>
        <IssuePostForm />
      </div>
    );
  }
}

export default ProjectIssues;
