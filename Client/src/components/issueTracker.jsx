import React, { Component } from "react";
import IssuePostForm from "./issuePostForm";
import IssueUpdateForm from "./issueUpdateForm";


class IssueTracker extends Component {
  state = {
    movies: []
  };



  render() {

    return (
      <div >
        <h1></h1>
        {/* <IssuePostForm /> */}
        <IssueUpdateForm />
      </div>
    );
  }
}

export default IssueTracker;
