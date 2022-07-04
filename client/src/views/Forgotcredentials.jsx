import React,{Component} from 'react'

import '../css/forgotcredentials.css'
import Navbar2 from "../components/Navbar2"

class Forgotcredentials  extends Component
{
  state = {
    text: {
      recipient: '',
      textmessage: ''
    }
  }
  textHandler = _ =>
  {
    const { text } = this.state
    fetch(`/Forgotcredentials?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err => console.log(err))
  }

  render()
  {
    const { text } = this.state;

    return (
      <div className="forgotcredentials-container">
        <div className="forgotcredentials-forgotcredentials">
  
        <Navbar2 />
          <img
            alt="Ellipse622037"
            src="/images/f5fc9584-ea41-43a1-a88a-98cc3468688a-pol.svg"
            className="forgotcredentials-svg1"
          />
          <div className="forgotcredentials-signinform">
            <img
              src="/images/198734cf-2fb0-482f-8944-f61a8cb66365-sqk.svg"
              alt="Rectangle822048"
              className="forgotcredentials-rectangle8"
            />
  
  
            <span className="forgotcredentials-text1"></span>
            <span className="forgotcredentials-text2">Phone number :</span>
            <input  className="forgotcredentials-rectangle9" placeholder="Please use the appropriate country code" value={text.recipient}
            onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />

            <button className="forgotcredentials-button" onClick={this.textHandler}>
              <span className="forgotcredentials-text">Send</span>
            </button>

          </div>
  
          <span className="forgotcredentials-text3">
            Enter the phone number you use and we will send you your credentials.
          </span>
        </div>
      </div>
    )

  }  
}


export default Forgotcredentials
