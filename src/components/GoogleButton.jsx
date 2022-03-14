import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export class GoogleButton extends Component {

  responseGoogle=(response) => {
    console.log(response)
    console.log(response.profileObj)
  }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="295904385270-44p1pdo9e7v9g25l0dm9plcvtelpo576.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    )
  }
}

export default GoogleButton