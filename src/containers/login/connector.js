import { connect } from 'react-redux';
import Login from './styles';
import { loginUserThunk } from './thunks';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  loginUser: ({ email, password }) => dispatch(loginUserThunk({ email, password })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
