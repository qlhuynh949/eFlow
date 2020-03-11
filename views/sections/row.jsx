const React = require('react')

const Row = props => {
  return (
    <div className="row">
        {props.children}
    </div>
  )
}

module.exports = Row
