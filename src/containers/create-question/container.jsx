import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, TextField, Button } from '@material-ui/core';

class CreateQuestion extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    createQuestion: PropTypes.func.isRequired,
  };

  state = {
    question: '',
  };

  onInputChange = (event) => {
    const stateKey = event.target.getAttribute('id');
    this.setState({
      [stateKey]: event.target.value,
    });
  };

  handleSubmit = () => {
    this.props.createQuestion({
      question: this.state.question,
      userId: 'hFGuWP9jRBQBorJocsBMy2rsUrv2',
    });
  }

  render() {
    return (
      <main>
        <h1>Ask a question to the team</h1>
        <Card className={this.props.classes.form}>
          <form noValidate autoComplete="off">
            <TextField
              id="question"
              placeholder="Question"
              className={this.props.classes.input}
              value={this.state.question}
              onChange={this.onInputChange}
              fullWidth
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </form>
        </Card>
      </main>
    );
  }
}

export default CreateQuestion;
