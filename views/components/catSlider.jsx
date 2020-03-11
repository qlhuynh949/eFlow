const React = require('react')

const CatSlider = () => {
  return(
    <div className="uk-container uk-hidden@m">
        {/* <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="finite: true">
          <ul class="uk-slider-items  uk-grid">
            <li className="cat-width">
              <div className="uk-text-center">
            <div class="uk-panel">
                  <a href="/collections/Electronics" id="category-electronics"><h4 className="sidebar-text">Electronics</h4></a>
              </div>
              </div>
            </li>
          <li className="cat-width-apparel">
            <div className="uk-text-center">
              <div class="uk-panel">
                  <a href="/collections/Apparel" id="category-apparel"><h4 className="sidebar-text">Apparel</h4></a>
              </div>
              </div>
            </li>
          <li className="cat-width">
              <div className="uk-text-center">
              <div class="uk-panel">
                  <a href="/collections/Automotive" id="category-automotive"><h4 className="sidebar-text">Automotive</h4></a>
              </div>
            </div>
            </li>
          </ul>    
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
      </div> */}
      <div className="uk-flex uk-flex-center">
          <h2 className="uk-text-muted uk-margin-small-top">Select a Category</h2>
      </div>
      <div className="uk-flex uk-flex-center">
          <a href="/collections/Electronics" id="category-electronics"><button className="uk-button uk-button-default uk-button-small ef-border-radius uk-margin-small-right uk-margin-left">Electronics</button></a>
          <a href="/collections/Apparel" id="category-apparel"><button className="uk-button uk-button-default uk-button-small ef-border-radius">Apparel</button></a>
          <a href="/collections/Automotive" id="category-automotive"><button className="uk-button uk-button-default uk-button-small ef-border-radius uk-margin-small-left uk-margin-right">Automotive</button></a>
      </div>
    </div>
  )
}

module.exports = CatSlider