import { useRoutes } from 'react-router-dom';
import ROUTES from '../Constants/routes.jsx';
import LoginForm from '../Pages/LoginPage/Login.jsx'
import SignUpForm from '../Pages/SignUpPage/SignUp.jsx';

function AppRoutes() {
  return useRoutes([
    {
      path: ROUTES.HOME,
      element: <SignUpForm />
    },
    {
      path: ROUTES.LOGIN,
      element: <LoginForm />
    }
  ])
}

export default AppRoutes
