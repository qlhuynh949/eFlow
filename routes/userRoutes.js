const router = require('express').Router()
const cookieSession = require('cookie-session')
const sequelize = require('../config')
const srs = require('secure-random-string')
const { Op } = require("sequelize")
const axios = require('axios')
const md5 = require('md5')
const TokenGenerator = require('uuid-token-generator');
const { User, Message, Conversation, FAQ, ForgotPassword, Upload } = require('../models')
const nodemailer = require("nodemailer");

let domainName = process.env.domainurl || 'localhost' //This will be where we read in the current domain name

let domainPort = process.env.PORT || 3000 //Read in config setting for our default listen port on our domain

router.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

// Update a user
router.put('/users/:id',
  (req, res) => {
    User.update(req.body, {where: {id: req.params.id}})
    .then(()=>{
      res.sendStatus(200)

    })
    .catch(e=>console.log(e))
  })

// Find One user By Email
router.get('/users/email/:email', (req, res) => {
  User.findOne({where: {email: req.params.email}})
    .then(user => {
      res.json(user)
    })
    .catch(e => console.log(e))
})

// POST an user
router.post('/users', (req, res) => {
  req.body.password = md5(req.body.password)
  User.create(req.body)
    .then(() => {
      console.log('User created')
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
})

// LOGIN an user
router.post('/users/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
      password: md5(req.body.password)
    }
  })
    .then(user => {
      if (user === null) {
        res.end('user not found')
      } else {
        axios.get(`https://api.ipify.org/?format=json`)
          .then(({ data }) => {
            req.session.userId = user.id
            req.session.isLoggedin = true
            req.session.ip = data.ip
            req.session.perm = user.permissions
            axios.get(`http://api.ipstack.com/${data.ip}?access_key=ccb8e026d1e52d9ae1861d591d4bdd28`)
              .then((locationData) => {
                req.session.location = [locationData.data.city, locationData.data.region_name, locationData.data.zip]
                console.log(req.session)
                res.end('logged in')
              })
              .catch(e => console.error(e))
          })
          .catch(e => console.error(e))
      }
    })
    .catch(e => console.log(e))
})

// CHECK IF USER IS LOGGED IN
router.get('/users/checklogin', (req, res) => {
  if (req.session === null) {
    res.end('not logged in')
  } else {
    if (req.session.isLoggedin === true) {
      res.json({ userId: req.session.userId })
    } else {
      res.end()
    }
  }
})

// TEMP NEW ADMIN ROUTE
// router.get('/users/newadmin/:id', (req, res) => {
//   User.update({ permissions: 1 }, {
//     where: {
//       id: req.params.id
//     }
//   })
// })

// LOGOUT USER
router.get('/users/logout', (req, res) => {
  req.session = null
  res.end('logged out')
})

// GET LOGGED IN USER INFO
router.get('/users/getinfo', (req, res) => {
  User.findOne({
    where: {
      id: req.session.userId
    }
  })
    .then(user => {
      res.json(user)
    })
    .catch(e => console.log(e))
})

//Render the user-contact view
router.get('/userContact/', (req, res) => {
  res.render('user-contact')
})

//Render the user-upload view
router.get('/userUpload/', (req, res) => {
  res.render('user-upload')

})


router.post('/upload', (req, res) => {
  console.log(req.body.uploadObj)
  Upload.create(req.body.uploadObj)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
})

router.put('/upload/:id', (req, res) => {
  Upload.update({itemId: req.body.itemId}, {where: {id: req.params.id}})
  .then(()=> {
    res.sendStatus(200)
  })
  .catch(e=> console.log(e))
})


//Renders Forget Password Email View
router.get('/forgetPasswordEmail/', (req, res) => {
  res.render('forgetpassword-email')
})


router.post('/ForgetPasswordToken', (req, res) => {
  let userEmail = req.body.forgetPasswordEmail
  let newTokenGen128 = new TokenGenerator(); //default 128bit
  let newToken = newTokenGen128.generate()
  User.findOne({
    where: {
      email: userEmail
    }
  })
    .then(user => {

      let userid = user.id

      //res.end(userid)
      ForgotPassword.create({ userid: userid, token: newToken, email: userEmail })
        .then(forgot => {
          let tokenUrlLink = 'http://' + domainName + ':' + domainPort + '/api/forgetPasswordReset/' + newToken
          sendForgotPasswordMail(userEmail, tokenUrlLink, user)
        })

    })
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
  res.sendStatus(200)
})

//Render Reset Password View
router.get('/forgetPasswordReset/:token', (req, res) => {
  let token = req.params.token

  let found = ForgotPassword.findOne({
    where: {
      token: token
    },
    // Add order conditions here....
    order: [
      ['id', 'DESC'],
    ]
  })
    .then(forgotPassword => {

      res.render('forgetpassword-reset', {
        userid: forgotPassword.userid,
        token: token
      })
    })
})

async function sendForgotPasswordMail(email, tokenURL, user) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'eflowresponse',
      pass: 'Test!12345'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"eflow Password Reset" <eflowresponse@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Password Reset", // Subject line
    text: `Your username is ${user.username}. Please use the following URL to resetup your password: ${tokenURL}`, // plain text body
    html: `Your username is ${user.username}.  <b>Please use the following URL to resetup your password:</b> ${tokenURL}` // html body
  })
    .catch(e => console.log(e))

}


// CREATE CONVO
router.get('/chat/newconvo/:userid/:chatname', (req, res) => {
  let newChatToken = srs()
  Conversation.create({ user1: parseInt(req.session.userId), user2: parseInt(req.params.userid), chatName: req.params.chatname, chatToken: newChatToken })
    .then(() => {
      res.end(newChatToken)
    })
    .catch(e => console.log(e))
})

// GET ALL USER's CONVERSATION
router.get('/chat/getconvos', (req, res) => {
  Conversation.findAll({
    where: {
      [Op.or]: [
        { user1: req.session.userId },
        { user2: req.session.userId }
      ]
    }
  })
    .then(convos => {
      res.json(convos)
    })
    .catch(e => console.log(e))
})

// GET USER BY ID
router.get('/users/getbyid/:searchid', (req, res) => {
  User.findOne({
    where: {
      id: req.params.searchid
    }
  })
    .then(user => {
      res.json(user)
    })
    .catch(e => console.log(e))
})

// SEND CHAT MESSAGE
router.post('/chat/new', (req, res) => {
  let chatToken = req.body.chatToken
  let msg = req.body.msg
  Message.create({ text: msg, convoToken: chatToken, userId: req.session.userId })
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
})
// GET ALL MESSAGES FOR CONVO
router.get('/chat/messages/:chatToken', (req, res) => {
  let chatToken = req.params.chatToken
  Message.findAll({ where: { convoToken: chatToken }, include: [User] })
    .then(data => {
      res.json(data)
    })
    .catch(e => console.log(e))
})

module.exports = router