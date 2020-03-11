
const createForgetPasswordToken = () => {
  axios.post('/api/forgetPasswordToken', {
    forgetPasswordEmail: $('#forgetPasswordEmail').val()
  })
    .then((response) => {
  
      $('#reset-alerts').html(`
        <div className="uk-alert-success" uk-alert="true">
         
          <p className="uk-text-bold">A password reset link has been emailed to you. Taking you back to login...</p>
        </div>`)

        setTimeout(() => {
          window.location.href = '/login'
        }, 3000);
    })
    .catch(e => console.error(e))
}


$('#ResetEmail').on('click',
  event => {
    event.preventDefault()
    createForgetPasswordToken();
  })