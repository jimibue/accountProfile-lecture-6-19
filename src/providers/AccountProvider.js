import React from "react";

// Set Up The Initial Context
const AccountContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer;

// Create the provider using a traditional React.Component class
export default class AccountProvider extends React.Component {
  state = {
    username: "Fooman",
    dateJoined: "6/19/2020",
    membershipLevel: "Silver",
  };
  render() {
    return (
      <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    );
  }
}
