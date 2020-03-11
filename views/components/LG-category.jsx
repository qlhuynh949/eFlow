const React = require('react')

const CategoryBanner = () => {
    return (
        <div className="uk-margin-top">
            <div class="uk-width-1-1 uk-visible@m uk-flex uk-flex-center uk-margin">
                <a href="/collections/Electronics">
                    <div>
                        <h3 class="uk-card-title uk-flex uk-flex-center">Electronics</h3>
                        <div class="uk-card-media-bottom">
                            <img className="ef-border-radius" src="images/eflow-banner-middle.jpg" width="350" height="350" alt=""/>
                        </div>
                    </div>
                </a>
                <a href="/collections/Apparel">
                    <div>
                        <h3 class="uk-card-title uk-flex uk-flex-center">Apparel</h3>
                        <div class="uk-card-media-bottom">
                            <img className="ef-border-radius uk-margin-left uk-margin-right" src="images/eflow-banner-left.jpg" width="350" height="350" alt=""/>
                        </div>
                    </div>
                </a>
                <a href="/collections/Automotive">
                    <div>
                        <h3 class="uk-card-title uk-flex uk-flex-center">Automotive</h3>
                        <div class="uk-card-media-bottom">
                            <img className="ef-border-radius" src="images/eflow-banner-right.jpg" width="350" height="350" alt=""/>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        
    )
}

module.exports = CategoryBanner