import { createBrowserRouter } from "react-router-dom";
import AuthLayout from './components/auth/AuthLayout'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import ForgotPassword from './components/auth/reset/ForgotPassword'
import Reset from "./components/auth/reset/Reset";


const routes = createBrowserRouter([
    {
        path: '/auth/', 
        element: <AuthLayout />,
        children: [
            {path: 'login', element: <Login />},
            {path: 'register', element: <Register />},
            {path: 'forgot-password', element: <ForgotPassword />},
            {path: 'reset/:token', element: <Reset />}
        ]
    }
]);

export default routes;