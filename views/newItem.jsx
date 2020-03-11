const React = require('react')
const Default = require('./layouts/default.jsx')
const Card = require('./components/card.jsx')
const NewListing = require('./components/newListing.jsx')



const NewItem = () => {
  return (
    <Default>
        <Card>
          <NewListing />
        </Card>
    </Default>
    )
  }
  
module.exports = NewItem