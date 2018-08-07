import React from 'react';
import './AvatarImage.css';
import avatar from '../../../assets/images/avatar.png';
    
const avatarImage = (props) => (
    <div>
        <img src={avatar} alt="Avatar" className='avatar'/>
    </div>
)


    
export default avatarImage;