const React = require('react')

const WhatsHot = (props) => {

  if(props.whats){
  return (
    <div className="uk-margin uk-margin-left uk-margin-right uk-hidden@m">
      <h3 className="uk-text-muted">{props.whats}</h3>
      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="true">

        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
          {props.list.map(hot => {
            return(
            <li className="home-sliders">
              <a href={"/products/"+hot.id}>
                <div class="uk-panel ef-card-home">
              <div className="uk-flex-inline">
                <div class="uk-card uk-card-default uk-card-small ef-card-home">
                  <div class="uk-card-media-top uk-flex uk-flex-center">
                        <img src={ 
                           hot.uploads.map((items) => {return items.path})} className="ef-home-img" alt="" />
                  </div>
                  <div class="uk-card-body ef-card-body">
                    <p class="uk-text-bold slider-product-title slider-margin-bottom-remove uk-text-truncate">{hot.name}</p>
                    <p className="uk-text-bold slider-product-title uk-margin-small-top uk-text-truncate">${hot.price}</p>
                  </div>
                </div>
              </div>
            </div>
                </a>
          </li>)})}
          
         
    </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>

    </div>
    
  )
                        }
                        else{
                          return(<div></div>)
                        }
}

module.exports = WhatsHot