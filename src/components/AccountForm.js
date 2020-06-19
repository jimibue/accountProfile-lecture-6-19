import React from "react";
import { Form } from "semantic-ui-react";

export default class AccountForm extends React.Component {
  state = { username: "", membershipLevel: membershipOptions[0].text };

  // TODO: figure out {name, value} here
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Enter username"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Select membership level"
          name="membershipLevel"
          value={this.state.membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
        />
      </Form>
    );
  }
}
const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
];
