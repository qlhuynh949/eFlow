let myUserId
let currentMsgCount
let msgArr

async function getMessages(token) {
  let response = await new Promise((resolve, reject) => {
    axios.get(`./api/chat/messages/${token}`)
    .then(({data})=>{
      msgArr = []
      if (!data) {
        reject(new Error('Error communicating with server'))
      } else {
       resolve(data)
      }
    })
  })

  return response
}

function renderMessages(token){
  $('#chatStream').html('')
  getMessages(token)
    .then(data => {
      currentMsgCount = data.length
      data.forEach(msg => {
        let msgElem = `
            <div className="uk-alert">
              <h4>${msg.user.username}</h4>
              <p>${msg.text}</p>
            </div>
            <hr></hr>
              `
        $('#chatStream').append(msgElem)
        var objDiv = document.getElementById("chatStream");
        objDiv.scrollTop = objDiv.scrollHeight;
      })
    })
    .catch(e => console.error(e))
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue) {
  var urlparameter = defaultvalue;
  if (window.location.href.indexOf(parameter) > -1) {
    urlparameter = getUrlVars()[parameter];
  }
  return urlparameter;
}

let currentChatToken = getUrlParam('token', 'None')

axios.get('/api/users/checklogin')
  .then(({ data }) => {
    myUserId = data.userId
  })
  .catch(e => console.error(e))

axios.get('/api/chat/getconvos')
  .then(({data}) => {
    let convoList = data
    convoList.forEach(convo => {
      let recipientInfo
      if (convo.user1===myUserId){
        // GET SELLER
        axios.get(`/api/users/getbyid/${convo.user2}`)
          .then(({ data }) => {
            recipientInfo = data
          })
          .then(() => {
            let convoElem = `
              <li class="list-group-item"><a href="./chat?token=${convo.chatToken}">${recipientInfo.username} - ${convo.chatName}</a></li>
            `
            $('#conversations').append(convoElem)
          })
          .catch(e => console.error(e))
      }else{
        // GET BUYER
        axios.get(`/api/users/getbyid/${convo.user1}`)
          .then(({ data }) => {
            recipientInfo = data
            console.log(recipientInfo)
          })
          .then(() => {
            let convoElem = `
              <li class="list-group-item"><a href="./chat?token=${convo.chatToken}">${recipientInfo.first_name} ${recipientInfo.last_name} - (${recipientInfo.username})</a></li>
            `
            $('#conversations').append(convoElem)
          })
          .catch(e => console.error(e))
      }
    })
  })
  .catch(e => console.error(e))

  if (currentChatToken==='None'){
    console.log(`No chat`)
  }else{
    renderMessages(currentChatToken)
    setInterval(() => {
      axios.get(`/api/chat/messages/${currentChatToken}`)
        .then(({ data }) => {
          if (currentMsgCount<data.length){
            renderMessages(currentChatToken)
          }
        })
        .catch(e => console.error(e))
    }, 3000)
  }

  $('#chatSend').on('click', ()=> {
    let thisMsg = $('#chatInput').val()
    axios.post(`/api/chat/new`, {
      msg: thisMsg,
      chatToken: currentChatToken
    })
      .then(() => {
      $('#chatInput').val('')
      })
      .catch(e => console.error(e))
  })