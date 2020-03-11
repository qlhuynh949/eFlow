let rawReports
let tableData = []

async function getReports() {
  let response = await new Promise((resolve, reject) => {
    $.get(`./getreports`, (res) => {
      if (!res) {
        reject(new Error('Error communicating with server'))
      } else {
        resolve(res)
      }
    })
  })

  return response
}

function populateTable(data) {
  $('#reportTable').DataTable({
    data: data,
    columns: [
      { title: "Item ID" },
      { title: "Item Name" },
      { title: "Reported By" },
      { title: "Comment" },
      { title: "Status" },
      { title: "Resolution" },
      { title: "Report Date" },
      { title: "Update Date" },
      { title: "Actions" }
    ],
    pageLength: 25,
    responsive: true
  })
}

getReports()
  .then(data => {
    rawReports = data
    rawReports.forEach(data => {
      let report = []
      let actions = `hello`
      let status
      let resolution

      switch(data.status){
        case(0):
          status = '<span class="badge badge-pill badge-success">Open</span>'
          break
        case(1):
          status = '<span class="badge badge-pill badge-danger">Closed</span>'
          break
      }

      switch(data.resolution){
        case(0):
          resolution = '<code>Unresolved</code>'
          break
        case(1):
          resolution = '<code>Item deleted</code>'
          break
        case(2):
          resolution = '<code>Item edited</code>'
          break
        case(3):
          resolution = '<code>Item left as-is</code>'
          break
      }

      report.push(data.item.id, data.item.name, data.user.username, data.comment, status, resolution, data.createdAt, data.updatedAt, actions)
      tableData.push(report)
    })
    populateTable(tableData)
  })
  .catch(e => console.error(e))