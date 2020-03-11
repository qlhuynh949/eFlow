const React = require('react')

// Blank Card
const Card = props => {
  return (
    <div className="uk-margin uk-margin-left uk-margin-right">
            {props.children}
     </div>
  )
}

module.exports = Card
