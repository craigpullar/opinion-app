import { connect } from 'react-redux';
import CreateQuestion from './styles';
import { createQuestionThunk } from './thunks';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  createQuestion: ({ question, userId }) => dispatch(createQuestionThunk({ question, userId })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateQuestion);
