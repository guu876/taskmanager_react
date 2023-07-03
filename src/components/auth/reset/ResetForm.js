import React, {useState} from 'react'

const ResetForm = (props) => {

  const [data, setData] = useState({password: '', confirm_password: ''});

  const onChangeHandler = (property, value) => {
    switch (property) {
        case 'password':
            setData((prevData) => {
                return {...prevData, password: value};
            });
        break;
        case 'confirm_password': 
            setData((prevData) => {
                return {...prevData, confirm_password: value};
            });
        break;
    }
  };

  return (
    <>
        {
            props.validToken === false || props.resetComplete === true ?
                <div className={`alert alert-${props.alert}`} role="alert">{props.message}</div>
            :
            <form onSubmit={(e) => props.onResetSubmitHandler(e, data)} className="needs-validation">
            {props.error ? 
            <div className="alert alert-warning text-center" role="alert">
                {props.error}
            </div> : ''}
            <div className="mb-3">
                <label htmlFor="password" className="form-label" >Password</label>
                <input type="password" id="password" className={`form-control ${props.errors.hasOwnProperty('password') ? 'is-invalid' : ''}`} autoComplete="off" value={data.password} onChange={(e) => onChangeHandler('password', e.target.value)} />
                {props.errors.hasOwnProperty('password') ?
                <span className="invalid-feedback">{props.errors.password}</span>
                : null
                }
            </div>
            <div className="mb-3">
                <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                <input type="password" id="confirm_password" className={`form-control ${props.errors.hasOwnProperty('confirm_password') ? 'is-invalid' : ''}`} autoComplete="current-password" value={data.confirm_password} onChange={(e) => onChangeHandler('confirm_password', e.target.value)} />
                {props.errors.hasOwnProperty('confirm_password') ?
                <span className="invalid-feedback">{props.errors.confirm_password}</span>
                : null
                }
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit" disabled={props.isProcessing === true}>
                    {props.isProcessing ? 'Resetting Password...' : 'Reset Password'}
                </button>
            </div>
            </form>
        }
    </> 
  )
}

export default ResetForm