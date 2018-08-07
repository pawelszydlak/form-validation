import React from 'react';
import './RememberCheckbox.css';
    
const inputRequired = (props) => (
    <div>
    <div className='outer'>
        <label className="myCheckbox">
            <input type="checkbox" name="rememberMe"/>
            <label><strong>REMEMBER ME</strong></label>
        </label>
    </div>
    </div>
)
    
export default inputRequired;