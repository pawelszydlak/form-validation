import React, {Component} from 'react';
import LoginBox from '../../components/UI/LoginBox/LoginBox';
import AvatarImage from '../../components/UI/AvatarImage/AvatarImage';
import Bubbles from '../../components/UI/Bubbles/Bubbles';

class LoginWindow extends Component {
    render () {
    return (
        <React.Fragment>
            <Bubbles/>
            <LoginBox/>
            <AvatarImage/>
        </React.Fragment>
        )
    };
}
export default LoginWindow;