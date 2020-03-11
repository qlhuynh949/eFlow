const React = require('react')

// Sign Up Form
const SignUp = () => {
  return (
    <form>
      <div id="alerts">
        
      </div>
      <div>
        <div className="uk-width-1-2@s uk-margin">
          <div className="form-group">
            <input type="first_name" className="uk-input ef-border-radius" id="first_name" placeholder="First Name"></input>
          </div>
        </div>
        <div className="uk-width-1-2@s uk-margin">
          <div className="form-group">
            <input type="last_name" className="uk-input ef-border-radius" id="last_name" placeholder="Last Name"></input>
          </div>
        </div>
      </div>
      <hr />
      <div className="uk-margin">
        <input type="text" className="uk-input ef-border-radius" id="username" aria-describedby="emailHelp" placeholder="Username"></input>
      </div>
      <div className="uk-margin">
        <input type="email" className="uk-input ef-border-radius" id="email" aria-describedby="emailHelp" placeholder="Email"></input>
      </div>
      <div className="uk-margin">
        <input type="password" className="uk-input ef-border-radius" id="password" placeholder="Password"></input>
      </div>
      <div className="uk-margin">
        <input type="password" className="uk-input ef-border-radius" id="password2" placeholder="Confirm Password"></input>
      </div>
      <div className="uk-margin">
        <p >By signing up, you agree to the <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms of Service</a> and <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Privacy Policy</a></p>
      </div>
      <button type="button" id="signUp" className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" >Sign Up</button>
    </form>
  )
}

module.exports = SignUp
