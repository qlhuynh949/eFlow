let usersArr = []

async function getUsers() {
  let response = await new Promise((resolve, reject) => {
    $.get(`./allusers`, (res) => {
      if (!res) {
        reject(new Error('Error communicating with server'))
      } else {
        resolve(res)
      }
    })
  })

  return response
}
async function getUser(id) {
  let response = await new Promise((resolve, reject) => {
    axios.get(`./user/${id}`)
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
    axios.get(`./users/delete/${user_id}`)
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


function populateTable(data) {
  $('#userTable').DataTable({
    data: data,
    columns: [
      { title: "First" },
      { title: "Last" },
      { title: "Username" },
      { title: "Email" },
      { title: "Password" },
      { title: "Active" },
      { title: "Permissions" },
      { title: "Join Date" },
      { title: "Last Updated" },
      { title: "Options" }
    ],
    pageLength: 25,
    responsive: true
  })
}

function loadUsers() {
  getUsers()
    .then(data => {
     console.log(data)
      data.forEach(user => {
        let userArr = []
        let options = `
        <button id="${user.id}" type="button" class="btn btn-danger btn-sm deleteuser">Delete</button>
        <button id="${user.id}" type="button" class="btn btn-info btn-sm edituser">Edit</button>
        `
        userArr.push(user.first_name, user.last_name, user.username, user.email, user.password, user.active, user.permissions, user.createdAt, user.updatedAt, options)
        usersArr.push(userArr)
      })
      console.log(usersArr)
      populateTable(usersArr)
    })
    .catch(e => console.error(e))
}


$(document).ready(function () {
  loadUsers()
})

$(document).on('click', e => {
  if (e.target.classList.contains('deleteuser')) {
    const r = confirm("Are you sure you want to delete this user?")
    if (r == true) {
      deleteUser(e.target.id)
      location.reload()
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

        if (data.permissions === 1) {
          // User is admin
          $("#checkAdmin").prop("checked", true)
        }
        if (data.active === 1) {
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
  if ($("#checkActive").is(":checked") === true) {
    isActive = true
  } else {
    isActive = false
  }
  if ($("#checkAdmin").is(":checked") === true) {
    isAdmin = true
  } else {
    isAdmin = false
  }
  axios.post(`/admin/users/update/${uid}`, { first_name: $('#first_name').val(), last_name: $('#last_name').val(), username: $('#username').val(), email: $('#email').val(), active: isActive, permissions: isAdmin })
    .then(() => {

    })
    .catch(e => console.error(e))
  $('#editModal').modal('hide')
  location.reload()
})