import React, { Component } from "react";
import IssueForm from "./issueForm";
// import SubmitIssue from './'


class IssueTracker extends Component {
  state = {
    movies: []
  };



  render() {

    return (
      <div >
        <h1></h1>
        <IssueForm />
      </div>
    );
  }
}

export default IssueTracker;
