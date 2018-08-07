import React, {Component} from 'react';
import './LoginBox.css';
import InputRequired from './InputRequired/InputRequired';
import RememberCheckbox from './RememberCheckbox/RememberCheckbox';
import LoginButton from './LoginButton/LoginButton';
import Link from './Link/Link';
import EmailRequired from '../ForgottenBox/EmailRequired/EmailRequired';
    
class LoginBox extends Component {

    state = {
        passwordForgotten: false,
        nothingTyped: true
    }

    passworFrogottenHandler = (event) => {
        const doesRemember = this.state.passwordForgotten;
        this.setState({passwordForgotten: !doesRemember});
    }

    cancelHandler = (event) => {
        const goBack = this.state.passwordForgotten;
        this.setState({passwordForgotten: !goBack});
    }

    render () {
        let container=null;
        if (this.state.passwordForgotten) {
            container = (
            <div className='container'>
                <div className='header'>
                    <p><strong>RESET PASSWORD</strong></p>
                </div>
                <p>Hey, it happens to everyone.<br/>
                Just let us know what email address you use to login<br/>
                and we'll send you an email with instructions</p>
                <EmailRequired/>
                <div className='footer'>
                    <LoginButton text='CANCEL' cancelClicked={this.cancelHandler}/>
                    <LoginButton text='RESET PASSWORD'/>
                </div>
            </div>
            )
        } else {
            container = (
            <div className='container'>
                <div className='header'/>
                    <InputRequired/>
                    <RememberCheckbox/>
                <div className='footer'>
                    <LoginButton text='LOGIN' nothingEntered={this.nothingEnteredHandler}/>
                    <Link message='Forgotten password?' linkClicked={this.passwordForgottenHandler}/>
                </div>
            </div>
            )
        }
    return (
        <div>
            <div className='wrapper'>
                {container}
            </div>
        </div>
    )
    };
}
    
export default LoginBox;