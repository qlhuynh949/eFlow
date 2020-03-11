const React = require('react')

const Info = (props) => {
  return (
    <ul class="uk-list uk-list-striped uk-margin-left uk-margin-right">
      <li className="uk-padding-remove-vertical uk-padding-remove-right">
        <h3 className="uk-text-small uk-text-bold uk-flex-inline">Location:</h3>
  <p id="product-price" className="uk-flex-inline uk-margin-left product-price-secondary">{props.blah.location}</p>
      </li>
      <li>
        <h3 className="uk-text-small uk-text-bold">Description:</h3>
        <p id="product-description">{props.blah.description}</p>
      </li>
    </ul>
  )
}

module.exports = Info