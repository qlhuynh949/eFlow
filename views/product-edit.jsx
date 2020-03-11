const React = require('react')
const Default = require('./layouts/default.jsx')
const Breadcrumb = require('./components/breadcrumb.jsx')
const Pricing = require('./components/pricing.jsx')
const Info = require('./components/productInfo.jsx')
const Footer = require('./components/footer.jsx')
const SidenavLink = require('./components/sidenavLink.jsx')
const Sidenav = require('./components/sidenav.jsx')
const Card = require('./components/card.jsx')
const Row = require('./sections/row.jsx')

const ProductEdit = props => {
console.log(props.editProd)
if(props.editProd.isSold) {
  return(
    <Default>
      <div className="uk-container uk-margin-top">
        <form>
          <button uk-toggle="target: #delete-listing-modal" className="uk-button uk-button-danger uk-width-1-1" type="button">Delete Listing</button>
          <button id="unmark-sold-btn" className="uk-button ef-button-unsold uk-width-1-1 uk-margin-small-top" value={props.editProd.id}>Unmark SOLD</button>
          <div className="uk-margin-top uk-margin-left uk-margin-right">

            <div class="uk-position-relative uk-visible-toggle uk-light uk-margin-top" tabindex="-1" uk-slider="center: true">

              <ul class="uk-slider-items uk-grid">
                {props.editProd.uploads.map((item, index) => {
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
            <div className="uk-margin uk-flex uk-flex-center">
              <input id="edit-product-title" className="uk-margin-remove ef-border-radius-input uk-input" value={props.editProd.name}></input>
            </div>
          </div>
          <Card>
            <Row>
              <div className="uk-flex uk-flex-center">
                <div className="uk-margin">
                  <p className="">Condition:</p>
                  <div className="form-group ef-border-radius-imp">
                    <select id="edit-item-condition" class="uk-select" value={props.editProd.condition}>
                      <option >New</option>
                      <option >Used</option>
                    </select>
                  </div>
                </div>
              </div>
            </Row>
            <div className="uk-flex uk-flex-center uk-text-bold">
              <p>Asking Price:</p>
            </div>
            <div className="uk-flex uk-flex-center">
              <label htmlFor="edit-price" className="ef-padding-top">$</label>
              <input id="edit-price" className="uk-inline-flex uk-margin-remove ef-border-radius-input uk-input uk-form-width-small" value={+props.editProd.price}></input>
            </div>
          </Card>
          {/* Info */}
          <ul class="uk-list uk-list-striped uk-margin-left uk-margin-right">
            <li className="uk-padding-remove-vertical uk-padding-remove-right">
              <h3 className="uk-text-small uk-text-bold uk-flex-inline uk-margin-remove-bottom">Location:</h3>
              <div className="uk-margin">
                <div className="form-group ef-border-radius-imp">
                  <select id="edit-item-location" value={props.editProd.location} className="uk-select">
                    <option>Los Angeles County</option>
                    <option>Orange County</option>
                    <option>San Diego County</option>
                  </select>
                </div>
              </div>
            </li>
            <li>
              <h3 className="uk-text-small uk-text-bold">Description:</h3>
              <div className="uk-margin">
                <textarea id="edit-description" className="uk-textarea ef-border-radius-imp" rows="5" value={props.editProd.description}></textarea>
              </div>
            </li>
          </ul>
          <button id="edit-prod-btn" className="uk-button uk-button-primary uk-width-1-1" value={props.editProd.id}>Edit Listing</button>
        </form>
        <div id="delete-listing-modal" uk-modal="true">
          <div class="uk-modal-dialog uk-modal-body">
            <h2>Are you sure you would like to delete this item?</h2>
            <button id="delete-listing-btn" class="uk-modal-close uk-button uk-button-danger uk-margin-right" type="button" value={props.editProd.id}>Confirm Delete</button>
            <a uk-toggle="target: #delete-listing-modal">Cancel</a>
          </div>
        </div>
      </div>
      <Footer />
    </Default>
  )
} else {
  return (
    <Default>
      <div className="uk-container uk-margin-top">
        <form>
          <button uk-toggle="target: #delete-listing-modal" className="uk-button uk-button-danger uk-width-1-1" type="button">Delete Listing</button>
          <button id="mark-sold-btn" className="uk-button ef-button-sold uk-width-1-1 uk-margin-small-top" value={props.editProd.id}>Mark As Sold</button>
          <div className="uk-margin-top uk-margin-left uk-margin-right">

            <div class="uk-position-relative uk-visible-toggle uk-light uk-margin-top" tabindex="-1" uk-slider="center: true">

              <ul class="uk-slider-items uk-grid">
                {props.editProd.uploads.map((item, index) => {
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
            <div className="uk-margin uk-flex uk-flex-center">
              <input id="edit-product-title" className="uk-margin-remove ef-border-radius-input uk-input" value={props.editProd.name}></input>
            </div>
          </div>
          <Card>
            <Row>
              <div className="uk-flex uk-flex-center">
                <div className="uk-margin">
                  <p className="">Condition:</p>
                  <div className="form-group ef-border-radius-imp">
                    <select id="edit-item-condition" class="uk-select" value={props.editProd.condition}>
                      <option >New</option>
                      <option >Used</option>
                    </select>
                  </div>
                </div>
              </div>
            </Row>
            <div className="uk-flex uk-flex-center uk-text-bold">
              <p>Asking Price:</p>
            </div>
            <div className="uk-flex uk-flex-center">
              <label htmlFor="edit-price">$</label>
              <input id="edit-price" className="uk-inline-flex uk-margin-remove ef-border-radius-input uk-input uk-form-width-small" value={+props.editProd.price}></input>
            </div>
          </Card>
          {/* Info */}
          <ul class="uk-list uk-list-striped uk-margin-left uk-margin-right">
            <li className="uk-padding-remove-vertical uk-padding-remove-right">
              <h3 className="uk-text-small uk-text-bold uk-flex-inline uk-margin-remove-bottom">Location:</h3>
              <div className="uk-margin">
                <div className="form-group ef-border-radius-imp">
                  <select id="edit-item-location" value={props.editProd.location} className="uk-select">
                    <option>Los Angeles County</option>
                    <option>Orange County</option>
                    <option>San Diego County</option>
                  </select>
                </div>
              </div>
            </li>
            <li>
              <h3 className="uk-text-small uk-text-bold">Description:</h3>
              <div className="uk-margin">
                <textarea id="edit-description" className="uk-textarea ef-border-radius-imp" rows="5" value={props.editProd.description}></textarea>
              </div>
            </li>
          </ul>
          <button id="edit-prod-btn" className="uk-button uk-button-primary uk-width-1-1" value={props.editProd.id}>Edit Listing</button>
        </form>
        <div id="delete-listing-modal" uk-modal="true">
          <div class="uk-modal-dialog uk-modal-body">
            <h2>Are you sure you would like to delete this item?</h2>
            <button id="delete-listing-btn" class="uk-modal-close uk-button uk-button-danger uk-margin-right" type="button" value={props.editProd.id}>Confirm Delete</button>
            <a uk-toggle="target: #delete-listing-modal">Cancel</a>
          </div>
        </div>
      </div>
      <Footer />
    </Default>
  )
  }
}

module.exports = ProductEdit
