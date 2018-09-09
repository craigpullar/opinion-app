import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { TextField, Button } from '@material-ui/core';

class SignUp extends Component {
  propTypes = {
    classes: PropTypes.objectOf(PropTypes.object).isRequired,
    signUpUser: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    email: '',
    password: '',
  }

  onInputChange = (event) => {
    const stateKey = event.target.getAttribute('id');
    this.setState({
      [stateKey]: event.target.value,
    });
  }

  handleSignUp = () => {
    console.log(this.state);
    this.props.signUpUser({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }).then(() => { console.log("success") });
  }

  render() {
    return (
      <main>
        <h1>Sign up</h1>
        <Card className={this.props.classes.form} >
          <form noValidate autoComplete="off">
            <TextField
              id='username'
              placeholder='Username'
              margin="dense"
              className={this.props.classes.input}
              value={this.state.username}
              onChange={this.onInputChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              className={this.props.classes.input}
              value={this.state.email}
              id="email"
              placeholder="Email Address"
              type="email"
              onChange={this.onInputChange}
              fullWidth
            />
            <TextField
              id='password'
              placeholder='Password'
              className={this.props.classes.input}
              value={this.state.password}
              type='password'
              onChange={this.onInputChange}
              fullWidth
            />
            <Button
              variant='outline'
              color='primary'
              onClick={this.handleSignUp}
            >
              Sign up
            </Button>
          </form>
        </Card>
      </main>
    )
  }
}

export default SignUp;
