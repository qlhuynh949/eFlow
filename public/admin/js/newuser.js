console.log('ping')

function resetForm() {
  $('#username').val('')
  $('#email').val('')
  $('#password').val('')
  $('#first_name').val('')
  $('#last_name').val('')
  $("#checkAdmin").prop("checked", false)
}

$("#showPassword").mouseover(function () {
  $('#password').attr('type', 'text')
})
$("#showPassword").mouseout(function () {
  $('#password').attr('type', 'password')
})

$('#createUser').on('click', e => {
  e.preventDefault()
  let isAdmin
  if ($("#checkAdmin").is(":checked") === true) {
    isAdmin = true
  } else {
    isAdmin = false
  }
  let body = {
    username: $('#username').val(),
    email: $('#email').val(),
    password: $('#password').val(),
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    active: 1,
    permissions: isAdmin
  }

  axios.post(`./users/new`, body)
    .then(() => {
      $('#alerts').html(`
      <div class="alert alert-success" role="alert">
        User, ${body.username}, created successfully.
      </div>
      `)
      resetForm()
    })
    .catch(e => console.error(e))
})

$('#resetForm').on('click', e => {
  resetForm()
})