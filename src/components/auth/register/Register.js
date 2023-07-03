import React, {useState} from 'react'
import RegisterForm from './RegisterForm';
import Env from '../../../Env'
import {useNavigate} from 'react-router-dom'

const Register = () => {

  document.title = 'Create an Account';

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const onRegisterSubmitHandler = async (e, data) => {
    e.preventDefault();
    setProcessing(true);
    let fieldErrors = [];

    try {

      const response = await fetch(Env.API_URL+'auth/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if (response.status === 400) {
        
        responseData.inner.forEach(error => {
          fieldErrors[error.path] = error.message
        });

        setErrors(fieldErrors);

      }

      if (response.status === 200) navigate('/auth/login', {
        state: {alert:'success', message: 'Registered successfully'}
      });


      setProcessing(false);

    } catch (error) {

      setProcessing(false);

    }

  }

  return (
    <RegisterForm error={error} isProcessing={processing} onRegisterSubmitHandler={onRegisterSubmitHandler} errors={errors} />
  )
}

export default Register;