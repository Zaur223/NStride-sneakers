import { Fragment } from 'react';
import SignUp from './SignUp';
import Login from './Login';



const AuthForm = function() {
    return (
        <Fragment>
            <SignUp />
            <Login />
        </Fragment>
    )
}

export default AuthForm