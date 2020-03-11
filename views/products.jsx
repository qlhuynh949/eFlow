const React = require('react')
const Default = require('./layouts/default.jsx')
const Breadcrumb = require('./components/breadcrumb.jsx')
const Pricing = require('./components/pricing.jsx')
const Info = require('./components/productInfo.jsx')
const ProductSlider = require('./components/productPageSlider.jsx')
const Footer = require('./components/footer.jsx')
const SidenavLink = require('./components/sidenavLink.jsx')
const Sidenav = require('./components/sidenav.jsx')

const Products = props => {
  if (props.prod.isSold) {
    return (
      <Default>
        <div>
          <Breadcrumb item={props.prod} />
          <div className="uk-margin-top uk-margin-left uk-margin-right">

            <div class="uk-position-relative uk-visible-toggle uk-light uk-margin-top" tabindex="-1" uk-slider="center: true">

              <ul class="uk-slider-items uk-grid">
                {props.prod.uploads.map((item, index) => {
                  console.log(' ')
                  console.log(item)

                  return (
                    <li class="uk-width-3-4">
                      <div class="uk-panel" >
                        <img src={item.path} alt="" />
                      </div>
                    </li>
                  )

                })}

              </ul>
            </div>
            <div className="uk-margin">
              <h1 id="product-title" className="uk-text-bold uk-text-center uk-text-muted">{'(SOLD)'+props.prod.name}</h1>
            </div>
          </div>
          <Pricing stuff={props.prod} />
          <ul class="uk-list uk-list-striped uk-margin-left uk-margin-right">
            <li className="uk-padding-remove-vertical uk-padding-remove-right">
              <h3 className="uk-text-small uk-text-bold uk-flex-inline">Location:</h3>
              <p id="product-price" className="uk-flex-inline uk-margin-left product-price-secondary">{props.prod.location}</p>
            </li>
            <li>
              <h3 className="uk-text-small uk-text-bold">Description:</h3>
              <p id="product-description">{props.prod.description}</p>
            </li>
          </ul>
          <Footer />
        </div>
      </Default>
    ) 
  } else {
    return(
    <Default>
      <div>
        <Breadcrumb item={props.prod} />
        <div className="uk-margin-top uk-margin-left uk-margin-right">
          <div class="uk-position-relative uk-visible-toggle uk-light uk-margin-top" tabindex="-1" uk-slider="center: true">
            <ul class="uk-slider-items uk-grid">
              {props.prod.uploads.map((item, index) => {
                console.log(' ')
                console.log(item)

                return (
                  <li class="uk-width-3-4">
                    <div class="uk-panel" >
                      <img src={item.path} alt="" />
                    </div>
                  </li>
                )
              })}

            </ul>
          </div>
          <div className="uk-margin">
            <h1 id="product-title" className="uk-text-bold uk-text-center">{props.prod.name}</h1>
          </div>
        </div>
      </div>
      <Pricing stuff={props.prod}/>
      <div className="uk-flex uk-flex-center">
        <p>
            <input type="hidden" id="prodName" name="custId" value={props.prod.name}></input>
            <button id={props.prod.userId} value={props.prod.id} className="uk-button uk-button-primary uk-button-medium startchat">Inquire</button>
        </p>
      </div>
      <Info blah={props.prod}/>
      <button id={props.prod.id} className='uk-button uk-button-default uk-button-small uk-margin-left report-btn' value={props.prod.id}>Report</button>
      <ProductSlider related={props.sim}/>
      <Footer />
    </Default>
    )
  }
  
}

module.exports = Products
