const React = require('react')
const Card = require('./card.jsx')
const Row = require('../sections/row.jsx')

const Pricing = props => {
  return (
    <Card>
      <Row>
        <div className="uk-flex uk-flex-center">
          <p className="">Condition: {props.stuff.condition}</p>
        </div>
      </Row>
        <div className="uk-flex uk-flex-center uk-text-bold">
          <p>Asking Price:</p> 
        </div>
        <div className="uk-flex uk-flex-center">
          <p className="product-page-price uk-text-bold">${props.stuff.price}</p>
        </div>
    </Card>
  )
}

module.exports = Pricing