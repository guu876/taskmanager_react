import React, {useState} from 'react'

const ForgotPasswordForm = (props) => {

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
        <>
            {props.sent ? 
            <div className="alert alert-success text-center" role="alert">
                {props.message}
            </div> : 
            <form onSubmit={(e) => props.onForgotSubmitHandler(e, data)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" >Email</label>
                    <input type="email" id="email" className="form-control" autoComplete="off" value={data.email} onChange={(e) => onChangeHandler('email', e.target.value)} />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit" disabled={props.isProcessing === true}>
                        Email Me
                    </button>
                </div>
            </form>
            }
        </>
        
    );
}

export default ForgotPasswordForm;