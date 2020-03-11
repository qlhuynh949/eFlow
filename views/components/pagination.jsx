const React = require('react')

const Pagination = () => {
  return(
    <div className="uk-text-center pagination">
    <ul className="uk-pagination" uk-margin="true">
      <li><a href="#"><span uk-pagination-previous="true"></span></a></li>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li className="uk-disabled"><span>...</span></li>
    
      <li><a href="#">20</a></li>
      <li><a href="#"><span uk-pagination-next="true"></span></a></li>
    </ul>
    </div>
  )
}

module.exports = Pagination