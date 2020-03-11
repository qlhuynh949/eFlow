console.log('ping')

let itemsArr = []

async function getItems() {
  let response = await new Promise((resolve, reject) => {
    $.get(`./items/all`, (res) => {
      if (!res) {
        reject(new Error('Error communicating with server'))
      } else {
        resolve(res)
      }
    })
  })

  return response
}

async function deleteItem(item_id) {
  let response = await new Promise((resolve, reject) => {
    axios.get(`./items/delete/${item_id}`)
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


function populateTable(data) {
  $('#itemTable').DataTable({
    data: data,
    columns: [
      { title: "Item Name" },
      { title: "Posted By" },
      { title: "Description" },
      { title: "Category" },
      { title: "Price" },
      { title: "Location" },
      { title: "Sold?" },
      { title: "Created" },
      { title: "Last Updated" },
      { title: "Options" }
    ],
    pageLength: 25,
    responsive: true
  })
}


function loadItems() {
  getItems()
    .then(data => {
      data.forEach(item => {
        let itemArr = []
        let options = `
        <button id="${item.id}" type="button" class="btn btn-danger btn-sm deleteitem">Delete</button>
        <button id="${item.id}" type="button" class="btn btn-info btn-sm edititem">Edit</button>
        `
        itemArr.push(item.name, item.user.username, item.description, item.category, item.price, item.location, item.isSold, item.createdAt, item.updatedAt, options)
        itemsArr.push(itemArr)
      })
      populateTable(itemsArr)
    })
    .catch(e => console.error(e))
}

$(document).ready(function () {
  loadItems()
})

$(document).on('click', e => {
  if (e.target.classList.contains('deleteitem')) {
    const r = confirm("Are you sure you want to delete this item?")
    if (r == true) {
      deleteItem(e.target.id)
      location.reload()
    }
  }
})