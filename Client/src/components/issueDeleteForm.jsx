import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { issuePost } from "../services/issueService";

class IssueDeleteForm extends Form {
  state = {
    data: {
      _id: ""
    },
    errors: {}
  };

  schema = {
    _id: Joi.string()
      .required()
      .label("Project Id")
  };

  doSubmit = async () => {
    console.log(this.state.data)
    // try {
    //   const response = await issuePost(this.state.data);
    //   window.location = "/";
    // } catch (ex) {
    //   if (ex.response && ex.response.status === 400) {
    //     const errors = { ...this.state.errors };
    //     errors.username = ex.response.data;
    //     this.setState({ errors });
    //   }
    // }
  };

  render() {
    return (
      <div className="form-space">
        <h1 className="lefter">Delete Issue</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("_id", "", "Project Id")}
          {this.renderButton("Delete Issue")}
        </form>
      </div>
    );
  }
}

export default IssueDeleteForm;