import { withStyles } from '@material-ui/core';
import CreateQuestion from './container';

const styles = () => ({
  form: {
    width: 400,
    margin: '0 auto',
    padding: '2rem',
  },
  input: {
    marginBottom: '2rem',
  },
});

export default withStyles(
  styles,
)(CreateQuestion);
