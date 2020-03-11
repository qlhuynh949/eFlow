
const ResetPassword = (userid, password, token) => {

  axios.put(`/forgetPasswordReset/${userid}/${token}`, { password: password })

    .then(() => displayPasswordReset())
    .catch(e => console.error(e))
}

const displayPasswordReset = () => {
  $('#alerts').html(`
        <div className="uk-alert-success" uk-alert="true">
         
          <p className="uk-text-bold">Your password has been reset! You may login now.</p>
        </div>`)
  $('#password').val('')
  $('#passwordConfirm').val('')

}

$('#ResetUserPassword').on('click',
  event => {
    event.preventDefault()

    if ($('#password').val() == $('#passwordConfirm').val()) {
      
      ResetPassword($('#uid').val(), $('#password').val(), $('#tid').val())
    }
    else {
      $('#displayForgetPasswordReset').html('The password and confirmation password you entered in do not match.')
    }
  })