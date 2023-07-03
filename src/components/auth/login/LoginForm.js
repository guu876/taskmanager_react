import React, {useState} from 'react'

const LoginForm = (props) => {

    const [data, setData] = useState({email: '', password: ''});

    const onChangeHandler = (property, value) => {
        switch (property) {
            case 'email':
                setData((prevData) => {
                    return {...prevData, email: value};
                });
            break;
            case 'password':
                setData((prevData) => {
                    return {...prevData, password: value};
                });
            break;
        }
    };

    return (
        <form onSubmit={(e) => props.onLoginSubmitHandler(e, data)}>
            {props.error ? 
            <div className="alert alert-warning text-center" role="alert">
                {props.error}
            </div> : ''}
            <div className="mb-3">
                <label htmlFor="email" className="form-label" >Email</label>
                <input type="email" id="email" className="form-control" autoComplete="off" value={data.email} onChange={(e) => onChangeHandler('email', e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className="form-control" autoComplete="current-password" value={data.password} onChange={(e) => onChangeHandler('password', e.target.value)} />
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit" disabled={props.isProcessing === true}>
                    {props.isProcessing ? 'Authentication...' : 'Login'}
                </button>
            </div>
        </form>
    );
}

export default LoginForm;