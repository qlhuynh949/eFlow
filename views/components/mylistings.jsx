const React = require('react')

const MyListings = props => {
  return (
    <div>
      <hr class="uk-divider-icon" />
      <h1 className="uk-text-muted uk-margin-left uk-margin-top uk-text-large uk-flex-inline">My Listings</h1>
      <a href="/newListing"><button className="uk-align-right uk-button uk-button-primary uk-button-small uk-margin-right uk-text-center new-listing-margin">Post New Listing</button></a>
        <ul className="uk-margin uk-margin-left uk-margin-right uk-list uk-list-striped">
            {props.children}
        </ul>
    </div>
  )
}

module.exports = MyListings
