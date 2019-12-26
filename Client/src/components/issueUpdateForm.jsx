import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { issuePost } from "../services/issueService";

class IssueUpdateForm extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      text: "",
      createdby: "",
      assignedto: "",
      status: ""
    },
    errors: {}
  };

  schema = {
    _id: Joi.string()
      .required()
      .label("Project Id"),
    title: Joi.string()
      .allow("")
      .label("Title"),
    text: Joi.string()
      .allow("")
      .min(5)
      .label("Description"),
    createdby: Joi.string()
      .allow("")
      .label("Created By"),
    assignedto: Joi.string()
      .allow("")
      .label("Assigned to"),
    status: Joi.string()
      .allow("")
      .label("Status")
  };

  doSubmit = async () => {
    try {
      const response = await issuePost(this.state.data);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Post Issue</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("_id", "", "Project Id")}
          {this.renderInput("title", "", "Title  (optional)")}
          {this.renderInput("text", "", "Description  (optional)")}
          {this.renderInput("createdby", "", "Created By  (optional)")}
          {this.renderInput("assignedto", "", "Assigned To (optional)")}
          {this.renderInput("status", "", "Status (optional)")}
          {this.renderSelect("status","Status (optional)", ["yes", "no"])}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default IssueUpdateForm;
