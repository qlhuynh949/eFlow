const React = require('react');

const UploadForm = props => {
  return (
    <div className="uk-container">
    <form>
      <div id="reset-alerts"></div>
      <div className="uk-margin">
        <h3>Password Reset</h3>
        <p>Please enter in the email of account to reset</p>
        <input type="text" className="uk-input" id="forgetPasswordEmail" placeholder="Email"></input>
      </div>
      <button type="button" id="ResetEmail" className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Reset</button>
      
    </form>
    </div>
  );
}


module.exports = UploadForm;

