import { connect } from 'react-redux';
import App from './App';
import { updateResponsiveBreakpoint } from './actions';

const mapStateToProps = state => ({
  currentBreakpoint: state.currentBreakpoint,
});

const mapDispatchToProps = dispatch => ({
  updateResponsiveBreakpoint: ({ breakpoint }) =>
    dispatch(updateResponsiveBreakpoint({ breakpoint }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
