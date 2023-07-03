import React from 'react'
import {Link, useLocation} from 'react-router-dom'


const AuthFooter = () => {

  const location = useLocation();

  return (
    <div className="row mt-2 justify-content-between">
        { location.pathname == '/auth/login' ?
          <div className="col-md-6">
            <Link to="/auth/register">Create New Account</Link>
          </div>
        :
        <div className="col-md-6">
          <Link to="/auth/login">Back to Login</Link>
        </div>
        }
        
        <div className="col-md-6 text-right">
          { location.pathname == '/auth/login' ?
            <Link to="/auth/forgot-password">Need Help?</Link>
          : null
          }    
        </div>
    </div>
  );
}

export default AuthFooter;

