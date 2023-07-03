import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import ResetForm from './ResetForm'
import Env from '../../../Env'

const Reset = () => {
  const params = useParams();
  const [errors, setErrors] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [validToken, setValidToken] = useState(true);
  const [message, setMessage] = useState('');
  const [resetComplete, setResetComplete] = useState(false);
  const [alert, setAlert] = useState('');

  const validateToken = async(token) => {

    try {
        const response = await fetch(Env.API_URL+`auth/reset/${params.token}`, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${params.token}`
            }
        });
        console.log(response.status);
        if (response.status === 401) throw Error('Invalid token.');

        setValidToken(true);
        return true;

      } catch (error) {
        setMessage(error.message);
        setAlert('secondary');
        setValidToken(false);
        return false;
      }
  };

  useEffect(() => {

    (async() => {
      await validateToken(params.token);
    })();
    
  }, [validToken]);

  const onResetSubmitHandler = async(e, data) => {
    e.preventDefault();
    setProcessing(true);

    try {
        let fieldErrors = [];
        const response = await fetch(`${Env.API_URL}auth/reset`, {
            method: 'post',
            headers: {
                Authorization: `Bearer ${params.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();

        if (response.status === 400) {
            responseData.inner.forEach(error => {
                fieldErrors[error.path] = error.message;
            });
            return setErrors(fieldErrors);
        } else {
            setResetComplete(true);
            setMessage(responseData.message);
            setAlert('success');
            return setErrors(fieldErrors);
        }
        return setProcessing(false);
    } catch (error) {
        setProcessing(false);
    }

  }

  return (
    <ResetForm resetComplete={resetComplete} alert={alert} message={message} errors={errors} isProcessing={processing} onResetSubmitHandler={onResetSubmitHandler} validToken={validToken} />
  )
}

export default Reset