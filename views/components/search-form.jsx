const React = require('react')

// Sign Up Form
const Search = () => {
  return (
    <form class="uk-search uk-search-default">
      <div className="form-group">
        <select id="search-item-category" class="uk-select">
          <option >All</option>
          <option >Electronics</option>
          <option >Apparel</option>
          <option >Automotive</option>
        </select>
        <a href="" class="uk-search-icon-flip" uk-search-icon></a>
        <input id="SearchText" class="uk-search-input" type="search" placeholder="Search..." />
        <button id="searchBtn" class="uk-button uk-button-default">Search</button>
      </div>

    </form>
  )
}

module.exports = Search
