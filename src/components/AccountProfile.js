import React from "react";
import Account from "./Account";
import AccountForm from "./AccountForm";

export default class AccountProfile extends React.Component {
  render() {
    return (
      <div>
        <Account />
        <AccountForm />
      </div>
    );
  }
}
