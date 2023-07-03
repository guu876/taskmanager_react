import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'
import AuthHeader from './AuthHeader'
import AuthFooter from './AuthFooter'



const AuthLayout = () => {

  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);

  return (
    <div id="app-auth">
        <div className="container">
            <div className="row align-items-center" style={{height: '100vh', padding: '3rem'}}>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <AuthHeader />
                    <Outlet />
                    <AuthFooter />
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    </div>
  )
}

export default AuthLayout