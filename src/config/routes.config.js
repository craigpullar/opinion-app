import Home from '../containers/home';
import SignUp from '../containers/sign-up';
import Login from '../containers/login';

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
};
