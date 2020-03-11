const React = require('react')
const Login = require('./layouts/login.jsx')
const HeaderOne = require('./components/headerOne.jsx')
const ForgetPasswordEmailForm = require('./components/forgetPasswordEmail-form.jsx')

const ForgetPasswordEmail = () => {
  return (
    <Login>
      <HeaderOne />
      <ForgetPasswordEmailForm></ForgetPasswordEmailForm>
      
    </Login>
  )
}

module.exports = ForgetPasswordEmail
