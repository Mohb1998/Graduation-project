import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

require('dotenv').config();

export class GoogleButton extends Component {

  responseGoogle=(response) => {
    console.log(response)
    console.log(response.profileObj)
  }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={process.env.MONGODB}
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    )
  }
}

export default GoogleButton