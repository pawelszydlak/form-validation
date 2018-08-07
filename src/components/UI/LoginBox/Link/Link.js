import React from 'react';
import './Link.css';

const link = (props) => (
    <div>
        <div className='centerLink'>
            <div className='outer'>
                <label className='link' onClick={props.linkClicked}><strong>{props.message}</strong></label>
            </div>
        </div>
    </div>
)
    
export default link;