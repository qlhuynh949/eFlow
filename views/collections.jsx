const React = require('react')
const Default = require('./layouts/default.jsx')
const Collection = require('./components/collection.jsx')
const Breadcrumb = require('./components/breadcrumb.jsx')
// const Pagination = require('./components/pagination.jsx')
const Tile = require('./components/tile.jsx')
const Footer = require('./components/footer.jsx')

const Collections = (props) => {
  
  return (
    <Default>
      <Tile categ={props.category}/>
      <Breadcrumb cat={props.category}/>
        <div className="uk-margin-bottom-large">
          {props.stuff.map((item, index, arr) =>  <Collection card={item} /> )}
        </div>
      <Footer />
    </Default>
  )
}

module.exports = Collections