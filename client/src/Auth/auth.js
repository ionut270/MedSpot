import React from 'react';

import GoogleLogin from 'react-google-login'

import Logo from '../props/logo4x.png'
import '../Styles/auth.less'

export default class Auth extends React.Component {
    handleLogin = async googleData => {
        const res = await fetch(`${process.env.REACT_APP_SERVER}/api/auth/google`, {
            method: "POST",
            body: JSON.stringify({googleData: googleData, token: googleData.tokenId}),
            headers: {"Content-Type": "application/json"}
        })
        const data = await res.json();
        if(data.error) throw new Error(data.error)
        localStorage.sessionID = data.sessionID; // A rather forcefull method but one that will work nonetheless
        window.location.reload();
    }
    render() {
        return (
            <div className="auth">
                <img className="auth_logo" alt="amazing app logo" src={Logo} />
                <GoogleLogin
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    buttonText="Log in with Google"
                    onSuccess={this.handleLogin}
                    onFailure={this.handleLogin}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}
