const React = require('react');

const ForgotPasswordResetForm = props => {
  return (
    <div className="uk-container">
        <div id="alerts">
    <form>
      </div>
      <h3>Please enter a new password.</h3>
      <hr />
      <div className="uk-margin">
        <input type="password" className="uk-input" id="password" placeholder="Password"></input>
      </div>
      <div className="uk-margin">
        <input type="password" className="uk-input" id="passwordConfirm" placeholder="Confirm Password"></input>
      </div>
      <input type="hidden" id="uid" name="uid" value={props.userid} />
      <input type="hidden" id="tid" name="tid" value={props.token} />
      
      <button type="button" id="ResetUserPassword" className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" >Submit</button>
    </form>
    </div>
  );
}


module.exports = ForgotPasswordResetForm;

