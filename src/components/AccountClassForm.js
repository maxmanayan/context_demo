import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';
import { AccountConsumer } from '../providers/AccountProvider';


class AccountClassForm extends Component {

  state = { username: this.props.username, membershipLevel: this.props.membershipLevel }

  handleChange = (e, {name,value}) => {
    this.setState({
      [name]:value
    })
  }

  handleSubmit = (e) => {
    this.props.updateAccount({...this.state})
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          name='username'
          value={this.state.username}
          label='New Username'
          type='text'
          onChange={this.handleChange}
        />
        <Form.Select 
          name='membershipLevel'
          value={this.state.membershipLevel}
          label='Membership Level'
          options={membershipOptions}
          onChange={this.handleChange}
        />
        <Form.Button type='submit'>Submit</Form.Button>
      </Form>
    )
  }
}

const ConnectedAccountClassForm = (props) => {
  return(
    <AccountConsumer>
      {(value)=>(
        <AccountClassForm username={value.username} membershipLevel={value.membershipLevel} updateAccount={value.updateAccount}/>
      )}
    </AccountConsumer>
  )
}


const membershipOptions = [
  {key: 'b', text: 'Bronze', value: 'Bronze'},
  {key: 's', text: 'Silver', value: 'Silver'},
  {key: 'g', text: 'Gold', value: 'Gold'},
]

export default ConnectedAccountClassForm;