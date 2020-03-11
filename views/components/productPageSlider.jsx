const React = require('react')

const ProductSlider = (props) => {
  console.log("related:", props.related.id)
  return (
    <div className="uk-margin uk-margin-left uk-margin-right">
      <h3>Related Products</h3>
      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="true" >

        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
            {props.related.map(item => {
              return (
                <li>
                  <a href={"/products/" + item.id}>
                  <div class="uk-panel">
                  <div className="uk-card uk-card-default uk-card-small ef-card-related">
                      <div className="uk-card-media-top uk-flex uk-flex-center">
                    <img src={ (!item.uploads === undefined) ?  
                    (item.uploads[0].path) : ('/images/favicon.ico')
                    } alt="" />
                      </div>
                        <div className="uk-card-body ef-card-body">
                        <p className="uk-text-bold slider-product-title slider-margin-bottom-remove uk-text-truncate">{item.name}</p>

                        <p className="uk-text-bold slider-price slider-margin-small-top uk-text-truncate">${item.price}</p>
                      </div>
                    </div>
                     
            </div>
                  </a>
        </li>

               
              )
            })}
            
            </ul>
              <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
              <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
        
    </div>
  </div>
 )
}
{/* 
<div className="uk-margin uk-margin-left uk-margin-right">
  <h3>Related Products</h3>
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex = "-1" uk-slider="true" >

  <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
    <li>
      <div class="uk-panel">
        <img src="images/slider1.jpg" alt="">
          <div class="uk-position-center uk-panel"><h1>1</h1></div>
            </div>
        </li>
     
    </ul>

                      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
</div>
                       */}
module.exports = ProductSlider

  