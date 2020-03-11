const React = require('react')
const Default = require('./layouts/default.jsx')
const UserContactForm = require('./components/userContact-form.jsx')

const UserContact = () => {
  return (
    <Default>
      <UserContactForm></UserContactForm>
    </Default>
  )
}

module.exports = UserContact
