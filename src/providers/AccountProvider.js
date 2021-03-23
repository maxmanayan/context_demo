import React from 'react';

// Setup initial context
export const AccountContext = React.createContext()

//export a consumer
export const AccountConsumer = AccountContext.Consumer


class AccountProvider extends React.Component {

  state = {
    username: 'FooMan',
    dateJoined: '12/23/21',
    membershipLevel: 'Silver',
    updateAccount: (account) => this.updateAccount(account)
  }

  updateAccount = (account) => {
    console.log(account)
    this.setState({
      ...account
    })
  }

  render() {
    return(
      <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;

//createContext() returns a provider and consumer


