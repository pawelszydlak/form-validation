import React from 'react';
import './LoginButton.css';
    

const loginButton = (props) => (
    <div>
        <div className='center'>
            <div className='outer'>
                <button className='login'><strong>{props.text}</strong></button>
            </div>
        </div>
    </div>
)
    
export default loginButton;