const React = require('react')

const HeroBanner = () => {
    return (
        <div class="uk-position-relative uk-width-1-1 uk-visible@m">
            <img src="images/lg-hero-banner-eflow.jpg" alt="" />
            <div class="uk-position-top">
                <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <img className="uk-margin-top uk-margin-left" src="images/favicon.ico" width="80" height="80" alt=""/>
                            <li><a href="/">Home</a></li>
                            <li>
                                <a href="#">Categories</a>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                        <li class=""><a href="/">Home</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li class="uk-nav-header">Header</li>
                                        <li><a href="#">Item</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li class="uk-nav-divider"></li>
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="/profile">Info</a>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

module.exports = HeroBanner