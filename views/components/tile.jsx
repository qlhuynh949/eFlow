const React = require('react')

const Tile = (props) => {
  return(
    <div className="uk-tile uk-tile-muted collection-tile">
      <p className="uk-h4">{props.categ}</p>
    </div>
  )
}

module.exports = Tile