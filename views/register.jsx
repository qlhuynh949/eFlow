const React = require('react')
const LogInDefault = require('./layouts/login.jsx')
const HeaderOne = require('./components/headerOne.jsx')
const Card = require('./components/card.jsx')
const SignUp = require('./components/signup-form.jsx')


const User = () => {
  return (
    <LogInDefault>
      <HeaderOne />
      <div className="uk-container">
            <div className="uk-margin-top">
                <button type="button" id="signupPage" class="uk-button uk-button-text uk-width-1-2">Sign Up</button>
                <button type="button" id="loginPage" class="uk-button uk-button-text uk-width-1-2">Log In</button>
            </div>
            <div id="alerts"></div>
            <Card>
                <SignUp />
            </Card>
      </div>
    </LogInDefault>
  )
}

module.exports = User
