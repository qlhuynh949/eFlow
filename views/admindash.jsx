const React = require('react')
const Admin = require('./layouts/admin.jsx')

const Admindash = (props) => {
  return (
    <Admin js={props.js} adminid={props.adminid}>
      <div className="container-fluid">
        <div className="container-fluid">
          <h1 className="mt-4">Dashboard</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card bg-primary text-white mb-4 shadow text-center">
                <div className="card-header">
                  Total Users
                </div>
                <div className="card-body">
                  <h1 className="display-4" id="userCount"></h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-success text-white mb-4 shadow text-center">
                <div className="card-header">
                  Total Items
                </div>
                <div className="card-body">
                  <h1 className="display-4" id="itemCount"></h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            
          </div>
        </div>
      </div>
    </Admin>
  )
}

module.exports = Admindash
