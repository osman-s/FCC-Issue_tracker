import React, { Component } from "react";
import IssuePostForm from "./issuePostForm";
// import SubmitIssue from './'


class IssueTracker extends Component {
  state = {
    movies: []
  };



  render() {

    return (
      <div >
        <h1></h1>
        <IssuePostForm />
      </div>
    );
  }
}

export default IssueTracker;
