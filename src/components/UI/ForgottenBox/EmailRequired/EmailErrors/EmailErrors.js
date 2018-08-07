import React from 'react';
import classes from './EmailErrors.css';


const emailErrors = ({errorsEmail}) =>
  <div className='errors'>
    {Object.keys(errorsEmail).map((fieldName, i) => {
            let emailMessageClass; 
            if (fieldName === 'email') {
                emailMessageClass = 'emailMessage'
            }
            else {
                emailMessageClass = 'passwordMessage'
            };
      if(errorsEmail[fieldName].length > 0){
        return (
            <div className={classes.EmailErrors}>
                <div className={emailMessageClass}>
                    <strong><p key={i}>{errorsEmail[fieldName]}</p></strong>
                </div>
            </div>
        )        
      } else {
        return '';
      }
    })}
  </div>
export default emailErrors; 