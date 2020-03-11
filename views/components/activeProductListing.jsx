const React = require('react')

// Blank Card
const ActiveProduct = props => {
  if(props.card.isSold){
    return (
      <div className="uk-card uk-card-default uk-margin-bottom">
        <div className="uk-card-header">
          <img className="uk-align-left uk-width-1-2 uk-margin-remove" width="50" height="50" src={props.card.uploads.map(item => { return item.path })} />
          <div className="uk-align-right uk-width-1-2 uk-margin-remove">
            <h3 className="uk-card-title uk-margin-left uk-margin-remove-bottom uk-text-truncate uk-text-muted">{'(SOLD)'+props.card.name}</h3>
            <p className="uk-text-meta uk-margin-left uk-margin-remove-top">Asking Price: ${props.card.price}</p>
            <div className="uk-flex uk-flex-center uk-margin-left">
              <button id="edit-prod-listing" className="uk-button uk-button-danger uk-button-small uk-margin-small-left" value={props.card.id}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="uk-card uk-card-default uk-margin-bottom">
        <div className="uk-card-header">
          <img className="uk-align-left uk-width-1-2 uk-margin-remove" width="50" height="50" src={props.card.uploads.map(item => { return item.path })} />
          <div className="uk-align-right uk-width-1-2 uk-margin-remove">
            <h3 className="uk-card-title uk-margin-left uk-margin-remove-bottom uk-text-truncate">{props.card.name}</h3>
            <p className="uk-text-meta uk-margin-left uk-margin-remove-top">Asking Price: ${props.card.price}</p>
            <div className="uk-flex uk-flex-center uk-margin-left">
              <a href={"/products/" + props.card.id}><button className="uk-button uk-button-primary uk-button-small">View</button></a>
              <button id="edit-prod-listing" className="uk-button uk-button-danger uk-button-small uk-margin-small-left" value={props.card.id}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = ActiveProduct

