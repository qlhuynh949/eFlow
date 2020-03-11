console.log('ping')
let adminid = parseInt($('#adminid').text())
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

getUser(adminid)
  .then(data => {
      $('#adminUsername').text(` - ${data.username}`)
    })
  .catch(e => console.error(e))