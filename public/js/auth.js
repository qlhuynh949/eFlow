// User Login Authentication
const loginUser = () => {
  let u = $('#loginUsername').val()
  let p = $('#loginPassword').val()
  axios.post(`/api/users/login`, {username: u, password: p})
    .then(({ data }) => {
      if (data.length<1) {
        console.log('Login failed')
        $('#alerts').html(`
        <div className="uk-alert-danger" uk-alert>
          <a className="uk-alert-close" uk-close></a>
          <p className="uk-text-bold">Incorrent username or password. Please try again</p>
        </div>
      `)
      }else{
        window.location.href = "/"
      }
    })
    .catch(e => console.error(e))
}

// Register Successful
const createUser = () => {
  axios.post('/api/users', {
    username: $('#username').val(),
    email: $('#email').val(),
    password: $('#password').val(),
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    active: true,
    permissions: 0,
    join_date: moment().unix()
  })
    .then(() => {
      $('#alerts').html(`
        <div className="uk-alert-success" role="alert">
          <a className="uk-alert-close" uk-close></a>
          <p className="uk-text-bold">Success!</p>Your account has been registered! Click <a href="../login">here</a> to login.
        </div>
      `)
      $('#username').val('')
      $('#email').val('')
      $('#password').val('')
      $('#password2').val('')
      $('#first_name').val('')
      $('#last_name').val('')
      window.location.replace('/login')
    })
    .catch(e => console.error(e))
}

// If Password doesn't match
$(document).on('click', e => {
  if (e.target.id==='signUp'){
    e.preventDefault()
    if ($('#password').val() === $('#password2').val()){
      createUser()
    } else {
      $('#alerts').html(`
        <div className="uk-alert-danger" uk-alert>
          <a className="uk-alert-close" uk-close></a>
          <p className="uk-text-bold">Fail! You suck! The passwords you entered do not match. Please try again.</p>
        </div>
      `)
    }
  }

  if (e.target.id==='login'){
    loginUser()
  }

    if (e.target.id === 'signupPage') {
      window.location.replace('/register')
    } 
    if (e.target.id === 'loginPage') {
      window.location.replace('/login')
    }

})