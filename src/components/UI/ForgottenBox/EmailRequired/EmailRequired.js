import React, {Component} from 'react';
import EmailErrors from './EmailErrors/EmailErrors';
import './EmailRequired.css';

    
class EmailRequired extends Component {
    state = {
        emailReq: '',
        errorsEmail: {emailReq: ''},
        emailIsValid: true,
        formIsValid: true
    }

    userInputHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value},
            () => { this.fieldValidateHandler(name, value) });
    }

    fieldValidateHandler = (fieldName, value) => {
        let fieldValidationErrors = this.state.errorsEmail;
        let emailIsValid = this.state.emailIsValid;

        switch(fieldName) {
            case 'email':
                emailIsValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                if (value.length === 0) emailIsValid=1;
                fieldValidationErrors.emailReq = emailIsValid ? '' : ' Invalid email address';
            break;
            default:
            break;
        }

    this.setState({
        errorsEmail: fieldValidationErrors,
        emailIsValid: emailIsValid},
        this.validateForm);
    }

    validateForm() {
    this.setState({formIsValid: this.state.emailIsValid && this.state.passwordValid});
    }

    errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
    }    

    render() {
        const emailIsValid = this.state.emailIsValid;
        let emailInputClass = emailIsValid ? "requirement emailInputPositive" : "requirement emailInputNegative";
        let emailLabelClass = emailIsValid ? "inputLabel emailLabelPositive" : "inputLabel emailLabelNegative";

        return(
    <div className='InputRequired'>
        <div className='formDefault'>
            <EmailErrors errorsEmail={this.state.errorsEmail}/>
        </div>
            <div className={`email form-group ${this.errorClass(this.state.errorsEmail.emailReq)}`}>
            <label className={emailLabelClass}>EMAIL ADDRESS</label>
            <div className={emailInputClass}>
                <input type='email' required className='form-control' name='email'
                placeholder='Enter your email address'
                value={this.state.emailReq}
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
    
export default EmailRequired;