import React from 'react';
import './ForgottenBox.css';
import EmailRequired from './EmailRequired/EmailRequired';
import LoginButton from '../LoginBox/LoginButton/LoginButton';
    
const forgottenBox = (props) => {
    return (
        <div className={classes.ForgottenBox}>
            <div className='wrapper'>
                <div className='container'>
                    <div className='header'>
                        <p><strong>RESET PASSWORD</strong></p>
                    </div>
                    <p>Hey, it happens to everyone.<br/>
                    Just let us know what email address you use to login<br/>
                    and we'll send you an email with instructions</p>
                    <EmailRequired/>
                    <div className='footer'>
                    <LoginButton text='CANCEL'/>
                    <LoginButton text='RESET PASSWORD'/>
                    </div>
                </div>
            </div>
        </div>
    )
};
    
export default forgottenBox;