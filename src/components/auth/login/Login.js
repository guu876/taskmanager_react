import React, {useState} from 'react'
import LoginForm from './LoginForm'
import {useLocation} from 'react-router-dom';
import Env from '../../../Env'

const Login = (props) => {

    document.title = 'Login';
    const location = useLocation();
    console.log(location);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(false);
    const [alert, setAlert] = useState( location.state ? location.state.alert: null);
    const [message, setMessage] = useState(location.state ? location.state.message : '');
    window.history.replaceState({}, document.title);

    const onLoginSubmitHandler = async (e, data) => {

        e.preventDefault();
        setProcessing(true);
        setError('');

        try 
        {
            const response = await fetch(Env.API_URL+'auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            
            if (response.status === 401 && responseData.auth === false) {
                setProcessing(false);
                return setError(responseData.message);
            }

            setError('');
            setProcessing(false);
            console.log(responseData);
            
  
        } catch (error) {
            setProcessing(false);
        }

    };

    return (
        <>
            {
                alert !== '' ? 
                <div className={`alert alert-${alert}`}>{message}</div>
                :
                null
            }
            <LoginForm isProcessing={processing} onLoginSubmitHandler={onLoginSubmitHandler} error={error} />
        </>
        
    );
}

export default Login;