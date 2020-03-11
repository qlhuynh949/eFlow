const React = require('react')
const Admin = require('./layouts/admin.jsx')

const Adminitems = (props) => {
  return (
    <Admin js={props.js} adminid={props.adminid}>
      <div className="container-fluid">
        <div class="card mb-4">
          <div class="card-header"><i class="fas fa-table mr-1"></i>Item Management</div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table zero-configuration" id="itemTable">

              </table>
            </div>
          </div>
        </div>
      </div>
    </Admin>
  )
}

module.exports = Adminitems
