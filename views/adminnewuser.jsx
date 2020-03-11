const React = require('react')
const Admin = require('./layouts/admin.jsx')

const Adminnewuser = (props) => {
  return (
    <Admin js={props.js} adminid={props.adminid}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div id="alerts">

            </div>
            <div className="card">
              <div className="card-header">
                New User
              </div>
              <div className="card-body">
                <form>

                  <div className="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" className="form-control" id="first_name" aria-describedby="emailHelp"></input>
                  </div>
                  <div className="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" className="form-control" id="last_name"></input>
                  </div>
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username"></input>
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email"></input>
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label> <span className="badge badge-secondary" id="showPassword">Show</span>
                    <input type="password" className="form-control" id="password"></input>
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="checkAdmin"></input>
                    <label className="form-check-label" for="checkAdmin">Is Admin</label>
                  </div>
                </form>
              </div>
              <div className="card-footer text-muted">
                <button type="button" id="resetForm" className="btn btn-danger">Reset</button> 
                <button type="button" id="createUser" className="btn btn-success ml-3 float-right">Create User</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Admin>
  )
}

module.exports = Adminnewuser
