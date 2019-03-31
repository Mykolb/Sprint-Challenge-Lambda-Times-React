import React, { Component } from 'react';
import PropTyes from 'prop-types';
import {Button, Form, FormGroup, Input} from 'reactstrap';


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:''
        }
    }



handleInputChange = event => {
this.setState({ [event.target.name]: event.target.value})
}



handleLogInSubmit = event => {
    const user = this.state.username;
    localStorage.setItem('user', user)
    window.location.reload()
}



render() {
    return (
      <div className='form-container'>
      <Form onSubmit={this.handleLogInSubmit} >
     <FormGroup>
        <Input 
        type='text'
        placeholder='Username'
        name='username'
        value={this.state.username}
        onChange={this.handleInputChange}
        />
     </FormGroup>

     <FormGroup>
        <Input 
        type='password'
        placeholder='Top Secret Password Here'
        name='password'
        value={this.state.password}
        onChange={this.handleInputChange}
        />
     </FormGroup>
     <Button>Click here to Login</Button>
        </Form>
      </div> 
    );
}  
}

export default LogIn;
