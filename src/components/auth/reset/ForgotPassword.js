import React,{useState} from 'react'
import Env from '../../../Env';
import ForgotPasswordForm from './ForgotPasswordForm'

const ForgotPassword = () => {

  document.title = 'Forgot your password?';

  const [processing, setProcessing] = useState(false);
  const [sent, setSent]  = useState(false);
  const [message, setMessage] = useState('');


  const onForgotSubmitHandler = async(e, data) => {

    e.preventDefault();

    const response = await fetch(`${Env.API_URL}auth/request-reset`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const  responseData = await response.json();
    
    if (response.status == 200) {
      setSent(true);
      setMessage(responseData.message);
    }


  };

  return (
    <ForgotPasswordForm onForgotSubmitHandler={onForgotSubmitHandler} isProcessing={processing} sent={sent} message={message}  />
  )
}

export default ForgotPassword;