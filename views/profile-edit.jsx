const React = require('react')
const Default = require('./layouts/default.jsx')

const BreadCrumbs = require('./components/breadcrumb.jsx')

const ProfileEdit = () => {
  return (
    <Default>
      <div className="uk-card uk-margin-left uk-margin-right">
        <h1 className="uk-text-bold">Profile</h1>
        <div className="uk-card-header uk-padding-remove">
          <div className="uk-grid-small uk-flex-middle" uk-grid>
            <div className="uk-width-auto">
              <img className="uk-border-circle" width="80" height="80" src="https://mhcd.org/wp-content/uploads/2017/12/placeholder-man.png" />
            </div>
            <div id="edit-profile">
              <div className="uk-width-expand">
                <div className="uk-margin-small-top uk-margin-small">
                  <input className="uk-card-title uk-margin-small uk-input ef-border-radius-input" id="profile-edit-username" placeholder="New Username"></input>
                </div>
              </div>
              <div className="uk-card-body uk-padding-remove">
                <ul className="uk-list uk-list-striped">
                  <li className="uk-flex uk-padding">
                    <p className="uk-inline-flex uk-text-bold uk-margin-remove-bottom uk-margin-right">FIRST NAME:</p>
                    <input className="uk-input uk-inline-flex uk-margin-remove ef-border-radius-input" id="profile-name-first" placeholder="First Name"></input>
                  </li>
                  <li className="uk-flex uk-padding">
                    <p className="uk-inline-flex uk-text-bold uk-margin-remove-bottom uk-margin-right">Last NAME:</p>
                    <input className="uk-input uk-inline-flex uk-margin-remove ef-border-radius-input" id="profile-name-last" placeholder="Last Name"></input>
                  </li>
                  <li className="uk-flex uk-padding">
                    <p className="uk-inline-flex uk-text-bold uk-margin-remove-bottom uk-margin-right">EMAIL:</p>
                    <input className="uk-input uk-inline-flex uk-margin-remove ef-border-radius-input" id="profile-edit-email" placeholder="newEmail@email.com"></input>
                  </li>
                </ul>
              </div>
              <button id="submit-profile-edit" class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom uk-margin-small-top">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </Default>
  )
}

module.exports = ProfileEdit
