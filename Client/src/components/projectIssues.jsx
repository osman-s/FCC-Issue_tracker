import React, { Component } from "react";
import IssueForm from "./issueForm";


class ProjectIssues extends Component {
  state = {
    movies: []
  };



  render() {

    return (
      <div >
        <h1>Project Tracker</h1>
        <IssueForm />
      </div>
    );
  }
}

export default ProjectIssues;
