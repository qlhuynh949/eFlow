
async function userCount() {
  let response = await new Promise((resolve, reject) => {
    $.get(`./users/count`, (res) => {
      if (!res) {
        reject(new Error('Error communicating with server'))
      } else {
        resolve(parseInt(res))
      }
    })
  })

  return response
}
async function itemCount() {
  let response = await new Promise((resolve, reject) => {
    $.get(`./items/count`, (res) => {
      if (!res) {
        reject(new Error('Error communicating with server'))
      } else {
        resolve(parseInt(res))
      }
    })
  })

  return response
}

$(document).ready(function () {
  userCount()
    .then(num => {
      $('#userCount').text(num)
    })
    .catch(e => console.log(e))
  itemCount()
    .then(num => {
      $('#itemCount').text(num)
    })
    .catch(e => console.log(e))
})