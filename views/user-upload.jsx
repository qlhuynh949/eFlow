const React = require('react')
const Default = require('./layouts/default.jsx')
const UserUploadForm = require('./components/upload-form.jsx')

const Upload = () => {
  return (
    <Default>
      <UserUploadForm></UserUploadForm>
    </Default>
  )
}

module.exports = Upload
