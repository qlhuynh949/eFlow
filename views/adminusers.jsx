const React = require('react')
const Admin = require('./layouts/admin.jsx')

const Adminusers = (props) => {
  return (
    <Admin js={props.js} adminid={props.adminid}>
      <div className="container-fluid">
        <div class="card mb-4">
          <div class="card-header"><i class="fas fa-table mr-1"></i>User Management</div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table zero-configuration" id="userTable">

              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editTitle">Edit User - </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="user_id">User ID - </label><span id="user_id">0</span>
                </div>
                <div class="form-group">
                  <label for="first_name">First Name</label>
                  <input type="text" class="form-control" id="first_name" aria-describedby="emailHelp"></input>
                </div>
                <div class="form-group">
                  <label for="last_name">Last Name</label>
                  <input type="text" class="form-control" id="last_name"></input>
                </div>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" id="username"></input>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email"></input>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="checkActive"></input>
                      <label class="form-check-label" for="checkActive">Activated</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="checkAdmin"></input>
                      <label class="form-check-label" for="checkAdmin">Is Admin</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" id="editUserSave" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  </Admin>
  )
}

module.exports = Adminusers
