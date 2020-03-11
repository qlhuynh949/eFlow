async function getUsers() {
  let response = await new Promise((resolve, reject) => {
    axios.get(`./admin/allusers`)
      .then(({ data }) => {
        if (!data) {
          reject(new Error('Error communicating with server'))
        } else {
          resolve(data)
        }
      })
  })
  return response
}

async function getUser(id) {
  let response = await new Promise((resolve, reject) => {
    axios.get(`./admin/user/${id}`)
      .then(({ data }) => {
        if (!data) {
          reject(new Error('Error communicating with server'))
        } else {
          resolve(data)
        }
      })
  })
  return response
}

async function deleteUser(user_id) {
  let response = await new Promise((resolve, reject) => {
    axios.get(`./admin/users/delete/${user_id}`)
      .then(({ data }) => {
        if (!data) {
          reject(new Error('Error communicating with server'))
        } else {
          resolve(data)
        }
      })
  })
  return response
}

function loadUsers() {
  getUsers()
    .then(data => {
      $('#userTable').html('')
      $('#totalUsers').text(data.length)
      data.forEach(user => {

        let active
        if (user.active === 1) {
          active = `<span class="badge badge-success">Activated</span>`
        } else {
          active = `<span class="badge badge-danger">Deactivated</span>`
        }

        let perm
        if (user.permissions === 1) {
          perm = `<span class="badge badge-info">Admin</span>`
        } else {
          perm = `<span class="badge badge-light">User</span>`
        }

        let tableElem = `
      <tr>
        <th scope="row">${user.id}</th>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${active}</td>
        <td>${perm}</td>
        <td>${user.createdAt}</td>
        <td>${user.updatedAt}</td>
        <td>
        <button id="${user.id}" type="button" class="btn btn-danger btn-sm deleteuser">Delete</button>
        <button id="${user.id}" type="button" class="btn btn-info btn-sm edituser">Edit</button>
        </td>
      </tr>
      `
        $('#userTable').append(tableElem)
      })
    })
    .catch(e => console.error(e))
}

loadUsers()

$(document).on('click', e => {
  if (e.target.classList.contains('deleteuser')) {
    const r = confirm("Are you sure you want to delete this user?")
    if (r == true) {
      deleteUser(e.target.id)
      loadUsers()
    }
  }
  if (e.target.classList.contains('edituser')) {
    getUser(e.target.id)
      .then(data => {
        $('#editTitle').text(`Edit User - ${data.username}`)
        $('#first_name').val(data.first_name)
        $('#last_name').val(data.last_name)
        $('#username').val(data.username)
        $('#email').val(data.email)
        $('#user_id').text(data.id)

        if (data.permissions===1){
          // User is admin
          $("#checkAdmin").prop("checked", true)
        }
        if (data.active===1){
          // User is admin
          $("#checkActive").prop("checked", true)
        }
        
        $('#editModal').modal('show')
      })
      .catch(e => console.error(e))
  }
})

$('#editUserSave').on('click', () => {
  let uid = parseInt($('#user_id').text())
  let isActive
  let isAdmin
  if ($("#checkActive").is(":checked")===true){
    isActive = true
  }else{
    isActive = false
  }
  if ($("#checkAdmin").is(":checked")===true){
    isAdmin = true
  }else{
    isAdmin = false
  }
  axios.post(`/admin/users/update/${uid}`, { first_name: $('#first_name').val(), last_name: $('#last_name').val(), username: $('#username').val(), email: $('#email').val(), active: isActive, permissions: isAdmin })
    .then(() => {
      
    })
    .catch(e => console.error(e))
  $('#editModal').modal('hide')
  loadUsers()
})