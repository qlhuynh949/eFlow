const React = require('react')
const UploadForm = require('./upload-form.jsx')

// Sign Up Form
const NewListing = (props) => {
  return (
    <div className="uk-container">
    <form>
      <div>
        <h3 className="uk-text-muted uk-text-bold">Create a new listing</h3>
        <div className="uk-width-1-2@s uk-margin">
          <div className="form-group">
            <input type="text" className="uk-input ef-border-radius-imp" id="item-name" placeholder="Item Name"></input>
        <div className="uk-margin">
          <input type="text" className="uk-input ef-border-radius-imp" id="item-price" placeholder="Price"></input>
        </div>
        <div className="uk-width-1-2@s uk-margin">
          <div className="form-group">
            <select id="item-category" class="uk-select">
              <option >Electronics</option>
              <option >Apparel</option>
              <option >Automotive</option>
            </select>
          </div>
        </div>
      </div>
      <div className="uk-margin">
              <div className="form-group ef-border-radius-imp">
                <select id="item-condition" class="uk-select">
                  <option >New</option>
                  <option >Used</option>
                  </select>
      </div>
      </div>
            <div className="uk-margin">
              <div  className="form-group ef-border-radius-imp">
                <select id="item-location" className="uk-select">
                  <option>Los Angeles County</option>
                  <option>Orange County</option>
                  <option>San Diego County</option>
                </select>
              </div>
            </div>
      <div className="uk-margin">
        <textarea id="description" className="uk-textarea ef-border-radius-imp" rows="5" placeholder="Description..."></textarea>
      </div>
           
      <button type="button" id="postItem" className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" uk-toggle="target: #upload-modal" >Post Listing</button>
          </div>
        </div>
    </form>
      <div id="upload-modal" uk-modal="true">
        <div className="uk-modal-dialog uk-modal-body">
          <h2 className="uk-modal-title">Add Image</h2>
          <UploadForm />
          <button className="uk-modal-close uk-button uk-button-primary uk-margin" type="button" id="finish-post">Submit Post</button>
        </div>
      </div>
      
    </div>
  )
}

module.exports = NewListing
