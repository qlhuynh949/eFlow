const React = require('react')
const Reset = require('./layouts/reset.jsx')
const HeaderOne = require('./components/headerOne.jsx')
const ForgetPasswordResetForm = require('./components/forgetPasswordReset-form.jsx')

const ForgetPasswordReset = (props) => {
  return (
    <Reset>
      <HeaderOne />
      <ForgetPasswordResetForm userid={props.userid} token={props.token} ></ForgetPasswordResetForm>
    </Reset>
  )
}

module.exports = ForgetPasswordReset
