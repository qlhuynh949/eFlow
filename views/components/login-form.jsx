const React = require('react')

// Sign Up Form
const LogIn = () => {
    return (
        <form>
            <div id="alerts"></div>
            <div className="uk-margin">
                <input type="text" className="uk-input ef-border-radius" id="loginUsername" placeholder="Username"></input>
            </div>
            <div className="uk-margin">
                <input type="password" className="uk-input ef-border-radius" id="loginPassword" placeholder="Password"></input>
            </div>
            <div className="uk-flex uk-flex-right">
                <p><a href="api/forgetpasswordemail">Forgot Account Info?</a></p>
            </div>
            <button type="button" id="login" className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Log In</button>
            <p className="font-weight-light">By logging in you agree to our <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms Of Service</a> and <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Privacy Policy</a>.</p>
        </form>
    )
}

module.exports = LogIn
