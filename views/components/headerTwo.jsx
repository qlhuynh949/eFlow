const React = require('react')
const Sidenav = require('../components/sidenav.jsx')
const SidenavLink = require('../components/sidenavLink.jsx')

// Header with links
const HeaderTwo = () => {
    return (
        <div className="uk-hidden@m">
            <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                <nav className="uk-navbar uk-navbar-container uk-margin nav-margin nav-background">
                    <div className="uk-navbar-left">
                        <a className="uk-navbar-toggle" uk-toggle="target: #sidenav" href="#"><i class="gg-menu"></i></a>
                    </div>
                    <div className="uk-navbar-center">
                        <a className="uk-navbar-item uk-logo" href="/"><img src="../images/eflow_logo.png" alt="eFlow"></img></a>
                    </div>
                    <div className="uk-navbar-right">
                        <div className="uk-navbar-item search-icon">
                            <form action="javascript:void(0)">
                                <div className="uk-inline">
                                    <a className="uk-form-icon" id="inputSearch" uk-icon="icon: search"></a>
                                    <input className="uk-input uk-form-width-medium" type="text" placeholder="Search..." id="searchForm"></input>
                                </div>
                                <button className="uk-button uk-button-default search-bar-button" id="search"><i className="gg-search"></i></button>
                                <button className="uk-button uk-button-default search-bar-button" id="close"><i className="gg-close"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <Sidenav />
            <SidenavLink />
        </div>
            )
        }
        
      module.exports = HeaderTwo
