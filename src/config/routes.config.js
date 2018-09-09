import Home from '../containers/home';
import SignUp from '../containers/sign-up';
import Login from '../containers/login';
import CreateQuestion from '../containers/create-question';

export default {
  HOME: {
    url: '/',
    container: Home,
  },
  SIGN_UP: {
    url: '/sign-up',
    container: SignUp,
  },
  LOGIN: {
    url: '/login',
    container: Login,
  },
  CREATE_QUESTION: {
    url: '/create-question',
    container: CreateQuestion,
  },
};
