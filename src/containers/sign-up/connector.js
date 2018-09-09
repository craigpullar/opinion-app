import { connect } from 'react-redux';
import SignUp from './styles';
import { signUpUserThunk } from './thunks';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  signUpUser: ({ username, email, password }) =>
    dispatch(signUpUserThunk({ username, email, password })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
