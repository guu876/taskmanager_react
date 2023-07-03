import logo from './logo.svg';
import './App.scss';
import {RouterProvider} from 'react-router-dom'
import routes from './routes'




/*
const routes = createRoutesFromElements(
  <Route path="/" element={<div>Hello World</div>}>
    <Route path="/auth/login" lazy={() => import('./components/auth/login/Login')} />
    <Route path="/auth/register" lazy={() => import('./components/auth/register/Register')} />
  </Route>
);
*/

const App = () => {

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
