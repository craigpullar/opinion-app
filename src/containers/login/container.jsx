import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Card } from '@material-ui/core';

class Login extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    loginUser: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  onInputChange = (event) => {
    const stateKey = event.target.getAttribute('id');
    this.setState({
      [stateKey]: event.target.value,
    });
  }

  handleLogin = () => {
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <main>
        <h1>Login</h1>
        <Card className={this.props.classes.form}>
          <form noValidate autoComplete="off">
            <TextField
              id="email"
              placeholder="Email"
              margin="dense"
              className={this.props.classes.input}
              value={this.state.email}
              onChange={this.onInputChange}
              fullWidth
            />
            <TextField
              id="password"
              placeholder="Password"
              className={this.props.classes.input}
              value={this.state.password}
              type="password"
              onChange={this.onInputChange}
              fullWidth
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleLogin}
            >
              Login
            </Button>
          </form>
        </Card>
      </main>
    );
  }
}

export default Login;
