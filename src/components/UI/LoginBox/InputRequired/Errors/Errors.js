import React from 'react';
import './Errors.css';


const errors = ({errors}) =>
  <div className='errors'>
    {Object.keys(errors).map((fieldName, i) => {
            let emailMessageClass; 
            if (fieldName === 'email') {
                emailMessageClass = 'emailMessage'
            }
            else {
                emailMessageClass = 'passwordMessage'
            };
      if(errors[fieldName].length > 0){
        return (
            <div className='Errors'>
                <div className={emailMessageClass}>
                    <strong><p key={i}>{errors[fieldName]}</p></strong>
                </div>
            </div>
        )        
      } else {
        return '';
      }
    })}
  </div>
export default errors; 