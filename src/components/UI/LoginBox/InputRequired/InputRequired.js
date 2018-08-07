import React, {Component} from 'react';
import Errors from './Errors/Errors';
import './InputRequired.css';

    
class InputRequired extends Component {
    state = {
        email: '',
        password: '',
        errors: {email: '', password: ''},
        emailValid: true,
        passwordValid: true,
        formValid: true
    }

    userInputHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value},
            () => { this.fieldValidateHandler(name, value) });
    }

    fieldValidateHandler = (fieldName, value) => {
        let fieldValidationErrors = this.state.errors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                if (value.length === 0) emailValid=1;
                fieldValidationErrors.email = emailValid ? '' : ' Invalid email address';
            break;
            case 'password':
                passwordValid = value.length >= 2;
                if (value.length === 0) passwordValid=1;
                fieldValidationErrors.password = passwordValid ? '': ' Invalid password';
            break;
            default:
            break;
        }

    this.setState({
        errors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid},
        this.validateForm);
    }

    validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
    }    

    render() {
        const emailIsValid = this.state.emailValid;
        const passwordIsValid = this.state.passwordValid;
        let emailInputClass = emailIsValid ? "requirement emailInputPositive" : "requirement emailInputNegative";
        let passwordInputClass = passwordIsValid ? "requirement passwordInputPositive" : "requirement passwordInputNegative";
        let emailLabelClass = emailIsValid ? "inputLabel emailLabelPositive" : "inputLabel emailLabelNegative";
        let passwordLabelClass = passwordIsValid ? "inputLabel passwordLabelPositive" : "inputLabel passwordLabelNegative";

        return(
    <div>
        <div className='formDefault'>
            <Errors errors={this.state.errors}/>
        </div>
            <div className={`email form-group ${this.errorClass(this.state.errors.email)}`}>
            <label className={emailLabelClass}>EMAIL ADDRESS</label>
            <div className={emailInputClass}>
                <input type='email' required className='form-control' name='email'
                placeholder='Enter your email address'
                value={this.state.email}
                onChange={this.userInputHandler}/>
                <div className='tooltip'>
                    <p>*</p>
                    <span className='tooltipContent'>required</span>
                </div>
            </div>
            </div>
            <div className={`form-group ${this.errorClass(this.state.errors.password)}`}>
            <label className={passwordLabelClass}>PASSWORD</label>
            <div className={passwordInputClass}>
                <input type='password' className='form-control' name='password'
                placeholder='Enter your password'
                value={this.state.password}
                onChange={this.userInputHandler}/>
                <div className='tooltip'>
                    <p>*</p>
                    <span className='tooltipContent'>required</span>
                </div>
            </div>
            </div>
    </div>
        )
    }
}
    
export default InputRequired;