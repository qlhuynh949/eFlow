const React = require('react')
const Admin = props => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content=""/>
        <title>eFlow | Admin</title>
       <link href="../admin/css/styles.css" rel="stylesheet"/>
        <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet" crossOrigin="anonymous"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" crossOrigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/c7c1f14b64.js" crossorigin="anonymous"></script>
      </head>
      <body class="sb-nav-fixed">
        
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
              <div class="sb-sidenav-menu">
                <div class="nav">
                  <div class="sb-sidenav-menu-heading">Core</div>
                  <a class="nav-link" href="/admin/">
                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                    Dashboard</a>
                  
                  <div class="sb-sidenav-menu-heading">Users</div>
                  <a class="nav-link" href="/admin/users">
                    <div class="sb-nav-link-icon"><i class="fas fa-users"></i></div>
                    Manage</a>
                    <a class="nav-link" href="/admin/newuser">
                    <div class="sb-nav-link-icon"><i class="fas fa-user-plus"></i></div>
                    New User</a>
                  <div class="sb-sidenav-menu-heading">Items</div>
                  <a class="nav-link" href="/admin/items">
                    <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                    Manage</a>
                  <a class="nav-link" href="/admin/reports">
                    <div class="sb-nav-link-icon"><i class="fas fa-flag"></i></div>
                    Item Reports</a>
                </div>
              </div>
              <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
  <span id="adminid">{props.adminid}</span><span id="adminUsername"></span>
                </div>
            </nav>
          </div>
          <div id="layoutSidenav_content">
            <main>
             {props.children}
            </main>
            <footer class="py-4 bg-light mt-auto">
              <div class="container-fluid">
                <div class="d-flex align-items-center justify-content-between small">
                  <div class="text-muted">Copyright &copy; eFlow 2020</div>
                  <div>
                    <span>Beta 1.0.0</span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
        <script src="../admin/assets/tables/datatables.min.js" crossOrigin="anonymous"></script>
        <script src="../admin/assets/tables/datatables.bootstrap4.min.js" crossOrigin="anonymous"></script>
        <script src="../admin/assets/tables/datatables.buttons.min.js" crossOrigin="anonymous"></script>
        <script src="../admin/assets/tables/datatables.checkboxes.min.js" crossOrigin="anonymous"></script>
        <script src="../admin/assets/tables/datatables.select.min.js" crossOrigin="anonymous"></script>
        <script src="../admin/js/scripts.js"></script>
        <script src={props.js}></script>
        
      </body>
    </html>

  )
}

module.exports = Admin