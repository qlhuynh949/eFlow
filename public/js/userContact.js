let uid

axios.get(`/api/users/getinfo`)
  .then(({ data }) => {
    uid = data.id

  })
  .catch(e => console.error(e))


$('#ContactSubmit').on('click',
  event => {
    let subject = $('#SubjectInput').val()
    let faq = $('#FAQSelect').val()
    let message = $('#ContactMessage').val()
    window.location.href = 'mailto:eflowresponse@gmail.com?subject=The subject - ' + faq + ' (User:' + uid + ')' + '&body=' + message;
  })

