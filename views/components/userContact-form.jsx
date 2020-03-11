const React = require('react');

const UserContactForm = props => {
  return (
    <form class="uk-form">

      <fieldset data-uk-margin>
        <legend>Contact</legend>
        <p><label>Subject</label><input id="SubjectInput" type="text" placeholder="" /></p>
        <p><label>FAQ</label>
          <select id="FAQSelect">
            <option>Can't bid on an item</option>
            <option>Need Help Posting item</option>
            <option>Want to become a partner</option>
            <option>Other</option>
          </select></p>
        <p>
          <div class="uk-margin">
            <div class="uk-inline">
              <a class="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
              <input id="ContactMessage" class="uk-input" type="text" />
            </div>
          </div>
        </p>
        <button class="uk-button" id='ContactSubmit'>Submit</button>
      </fieldset>

    </form>
  );
}


module.exports = UserContactForm;

