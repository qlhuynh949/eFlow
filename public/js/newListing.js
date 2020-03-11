// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyBzgX-ul7zTpGeWsXddZ6IItDw9cRkbnCU",
  authDomain: "eflow-ca056.firebaseapp.com",
  databaseURL: "https://eflow-ca056.firebaseio.com",
  projectId: "eflow-ca056",
  storageBucket: "eflow-ca056.appspot.com",
  messagingSenderId: "462392261016",
  appId: "1:462392261016:web:8a3313fd188f398632d3ed",
  measurementId: "G-HQ8KKYT6QX"
}

firebase.initializeApp(firebaseConfig)


let bar = $('#js-progressbar');
let fileButton = $('#filebutton')


let userPostId

axios.get(`/api/users/getinfo`)
  .then(({ data }) => {
    userPostId = data.id
  })
  .catch(e => console.error(e))

$('#postItem').click(event => {

  event.preventDefault()

  axios.post('/api/items', {
    name: $('#item-name').val(),
    description: $('#description').val(),
    category: $('#item-category').val(),
    condition: $('#item-condition').val(),
    price: $('#item-price').val(),
    location: $('#item-location').val(),
    popularity: 1,
    userId: userPostId
  })
    .then(({ data }) => {
      console.log(data.id)
      fileButton.change((event) => {
        // Get file
        let file = event.target.files[0]

        let fileid = file.name
        // Create Storage ref
        let storageRef = firebase.storage().ref('images/' + file.name)

        // Upload file
        let task = storageRef.put(file)

        //Update progress bar
        task.on(firebase.storage.TaskEvent.STATE_CHANGED, progress = (snapshot) => {
          let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          bar.value = percentage
        }
          , error = (err) => { }
          , complete = () => {

            // Upload completed successfully, now we can get the download URL
            task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
              let uploadObj = { fileid: fileid, path: downloadURL, contents: '', itemId: data.id }
              console.log(uploadObj)
              axios.post('/api/upload', {
                uploadObj
              })
                .then(() => {
                  $('#uploadDisplay').html('Image added.')
                
                })
                .catch(e => console.error(e))

              console.log('File available at', downloadURL)

            })

          })

      })


    })
    .catch(e => console.log(e))
})

$('#finish-post').click(event => {
  window.location.href = '/profile'
})
