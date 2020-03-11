const React = require('react')

const Sidenav = () => {
  return (
    
    <div id="sidenav" uk-offcanvas="true">
      <div className="uk-offcanvas-bar uk-background-default esc-close">
        <a className="uk-logo sidebar-text uk-position-top-center" href="/"><img src="../images/eflow_logo.png" alt="eFlow"></img></a>
        <a className="uk-offcanvas-close sidebar-text" type="button"><i className="gg-close"></i></a>
      <div className="uk-margin-small-left uk-margin-small-right">
        <h3 className="sidebar-header"><img src="https://www.aresprism.com/wp-content/uploads/2017/02/generic-user.png" id="user-img" alt="userImage" /><span id="side-username" className="sidebar-text">Username</span></h3>
        <ul uk-accordion="multiple: true">
          <li>
              <a class="uk-accordion-title sidebar-text" href="#">Account<i class="gg-push-chevron-down uk-align-right sidebar-text uk-margin-remove"></i></a>
            <div class="uk-accordion-content">
                <ul>
                  <li><h4><a href="/profile" className="sidebar-text">Profile</a></h4></li>
                  <li><h4><a href="/chat" className="sidebar-text">Messages</a></h4></li>
                  <li><h4><a href="#" className="sidebar-text">Support</a></h4></li>
                  <li><h4><a href="/newListing" className="sidebar-text">Post New Listing</a></h4></li>
                  <li>
                    <div>
                      <button id="logout" className="uk-button uk-button-primary">Logout</button>
                    </div>
                  </li>
                </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title sidebar-text">Browse<i class="gg-push-chevron-down uk-align-right sidebar-text uk-margin-remove"></i></a>
            <div class="uk-accordion-content">
              <div>
                <ul>
                    <li><h4><a href="/collections/All" className="sidebar-text">All</a></h4></li>
                    <li><h4><a href="/collections/Electronics" className="sidebar-text">Electronics</a></h4></li>
                    <li><h4><a href="/collections/Apparel" className="sidebar-text">Apparel</a></h4></li>
                    <li><h4><a href="/collections/Automotive" className="sidebar-text">Automotive</a></h4></li>
                </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>        
        {/* <a href=""><h4 className="sidebar-text sidebar-title">FAQ</h4></a>
        <a href=""><h4 className="sidebar-text sidebar-title">About Us</h4></a>
        <a href="/api/userContact"><h4 className="sidebar-text sidebar-title">Contact Us</h4></a> */}
      </div>
    </div>
  )
}

module.exports = Sidenav