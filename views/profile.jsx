const React = require('react')
const Default = require('./layouts/default.jsx')
const MyListings = require('./components/mylistings.jsx')
const ActiveProductListing = require('./components/activeProductListing.jsx')

const Profile = props => {
  return (
    <Default>
        <div className="uk-card uk-margin-left uk-margin-right">
          <h1 className="uk-text-bold">Profile</h1>
        <div className="uk-card-header uk-padding-remove">
          <div className="uk-grid-small uk-flex-middle" uk-grid>
            <div className="uk-width-auto">
              <img className="uk-border-circle" width="80" height="80" src="https://mhcd.org/wp-content/uploads/2017/12/placeholder-man.png" />
               <a id="edit-btn" className="uk-flex-inline uk-flex-right uk-margin-left uk-link-muted">Edit</a>
            </div>
          <div id="edit-profile">
            <div className="uk-width-expand">
              <div className="uk-margin-small">
                <h3 className="uk-card-title uk-margin-small" id="profile-username"></h3>
              </div>
              </div>
              <div className="uk-card-body uk-padding-remove">
                <ul className="uk-list uk-list-striped">
                  <li className="uk-flex uk-padding">
                    <p className="uk-inline-flex uk-text-bold uk-margin-remove-bottom uk-margin-right">NAME:</p>
                    <p className="uk-inline-flex uk-text-muted uk-margin-remove" id="profile-name">Carlo Nazareno</p>
                  </li>
                  <li className="uk-flex uk-padding">
                    <p className="uk-inline-flex uk-text-bold uk-margin-remove-bottom uk-margin-right">EMAIL:</p>
                    <p className="uk-inline-flex uk-text-muted uk-margin-remove" id="profile-email">myemail@email.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <MyListings>
        {props.mylisting.map(listing => <ActiveProductListing card={listing} />)}
      </MyListings>
    </Default>
  )
}

module.exports = Profile
