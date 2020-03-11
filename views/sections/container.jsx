const React = require('react')

const Container = props => {
  return (
    <div className="m-3">
        {props.children}
    </div>
  )
}

module.exports = Container
