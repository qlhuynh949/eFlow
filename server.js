const express = require('express')
const { join } = require('path')
const app = express()
const axios = require('axios')
const md5 = require('md5')
const sequelize = require('./config')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const cookieSession = require('cookie-session')
const { User, Message, Conversation, FAQ, ForgotPassword, Upload, Item, Report } = require('./models')




app.use(express.static(join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')

app.engine('jsx', require('express-react-views').createEngine())
app.use(require('./routes'))

app.get('/login', (req, res) => {
  if (req.session.isLoggedin === true) {
    res.render('home')
  } else {
    res.render('login')
  }
})

app.get('/register', (req, res) => {
  if (req.session.isLoggedin === true) {
    res.render('home')
  } else {
    res.render('register')
  }
})

app.get('/', (req, res) => {
  if (req.session.isLoggedin === true) {
    Item.findAll({limit: 4,  where: { isSold: 0 },  order: [['createdAt', 'DESC']], include: [Upload]}).then((items) => {
      Item.findAll({limit: 4, where: {isSold: 0}, order: [['popularity', 'DESC']], include: [Upload]}).then((hotStuff) =>{
        
        res.render('home',
          {
            whatsHot: `What's Hot`,
            whatsNew: `What's New`,
            new: items,
            hot: hotStuff
          })
      })
      .catch(e => console.log(e))
        
    })
    .catch(e => console.log(e))
  } else {
    res.render('login')
  }
})

app.get('/chat', (req, res) => {
  if (req.session.isLoggedin === true) {
    res.render('userchat')
  } else {
    res.render('login')
  }
})


app.get('/searchCollections/:searchText', (req, res) => {
  let categoryOption = ['Electronics', 'Apparel', 'Automotive']
  
  
  if (req.session.isLoggedin === true) {

    if (req.params.searchText !== 'EmptySearchStringParameter') {
      Item.findAll({
        where: {
          isSold: 0,
          category: categoryOption,
          [Op.or]: [
            {
              name:
              {
                [Op.like]: '%' + req.params.searchText + '%'
              }
            },
            {
              description:
              {
                [Op.like]: '%' + req.params.searchText + '%'
              }
            }
          ]
        }, include: [Upload]
      })
        .then((items) => {
          console.log(items)
          res.render('searchCollections',
            {
              stuff: items,
              category: req.params.searchText
            })
        })
    }
    
  } else {
    res.render('login')
  }
})

app.get('/collections/:category', (req, res) => {
  if (req.session.isLoggedin === true) {
    if(req.params.category === 'All'){
      Item.findAll({ where:{isSold: 0}, include: [Upload] })
        .then((items) => {
          res.render('collections',
            {
              stuff: items,
              category: req.params.category
            })
        })
    }
    Item.findAll({ where: { category: req.params.category, isSold: 0 }, include: [Upload] })
      .then((items) => {
        res.render('collections',
          {
            stuff: items,
            category: req.params.category
          })
      })
  } else {
    res.render('login')
  }
})

app.get('/products/:id', (req, res) => {
  if (req.session.isLoggedin === true) {
    Item.findOne({
      where: { id: req.params.id, isSold: 0 },
      include: [Upload]
    })
      .then((product) => {

        Item.findAll({
          limit: 4,
          where: {
            isSold: 0,
            category: product.category,
            id: {[Op.not]: req.params.id}
            
          }, include: [Upload]
        }).then((similar) => {

          res.render('products',
            {
              prod: product,
              sim: similar
            })
        })
      })

  } else {
    res.render('login')
  }
})

app.get('/profile', (req, res) => {
if (req.session.isLoggedin === true) {
  Item.findAll({ where: { userid: req.session.userId }, include: [Upload]})
      .then((items) => {
      res.render('profile',
      {
        mylisting: items, 
        userid: req.session.userId
      })
    })
}else {
  res.render('login')
}
})

app.get('/profile-edit', (req, res) => {
  if (req.session.isLoggedin === true) {
    res.render('profile-edit')
  } else {
    res.render('login')
  }
})

// ADMIN DASHBOARD
app.get('/admin', (req, res) => {
  console.log(req.session)
  if (req.session.isLoggedin === true) {
    if (req.session.perm === 1) {
      res.render('admindash',
        {
          js: '../admin/js/dash.js',
          adminid: req.session.userId
        })
        console.log(req.session)
    } else {
      res.render('home')
    }
  } else {
    res.render('login')
  }
})

// ADMIN USER MANAGEMENT
app.get('/admin/users', (req, res) => {
  if (req.session.isLoggedin === true) {
    if (req.session.perm === 1) {
      res.render('adminusers',
        {
          js: '../admin/js/users.js',
          adminid: req.session.userId
        })
    } else {
      res.render('home')
    }
  } else {
    res.render('login')
  }
})

// ADMIN NEW USER
app.get('/admin/newuser', (req, res) => {
  if (req.session.isLoggedin === true) {
    if (req.session.perm === 1) {
      res.render('adminnewuser',
        {
          js: '../admin/js/newuser.js',
          adminid: req.session.userId
        })
    } else {
      res.render('home')
    }
  } else {
    res.render('login')
  }
})

app.get('/admin/reports', (req, res) => {
  if (req.session.isLoggedin === true) {
    if (req.session.perm===1){
      res.render('adminreports',
      {
        js: '../admin/js/reports.js',
        adminid: req.session.userId
      })
    }else{
      res.render('home')
    }
  } else {
    res.render('login')
  }
})

app.get('/admin/items', (req, res) => {
  if (req.session.isLoggedin === true) {
    if (req.session.perm===1){
      res.render('adminitems',
      {
        js: '../admin/js/items.js',
        adminid: req.session.userId
      })
    }else{
      res.render('home')
    }
  } else {
    res.render('login')
  }
})

//Reset password external link

app.put('/forgetPasswordReset/:user/:token', (req, res) => {
  let md5pass = md5(req.body.password)

  User.update({ password: md5pass }, { where: { id: req.params.user } })
    .then(() => {
      console.log('Password Updated')
    })
    .catch(e => console.log(e))
  res.sendStatus(200)
})

// Post New Product
app.get('/newListing', (req, res) => {
  if (req.session.isLoggedin === true) {
    res.render('newItem')
  } else {
    res.render('login')
  }
})

// Edit Existing Product
app.get('/product-edit/:id', (req, res) => {
  if(req.session.isLoggedin === true) {
    Item.findOne({
      where: { id: req.params.id},
      include: [Upload]
    })
      .then((product) => {
        res.render('product-edit', 
          {
            editProd: product
          }
        )
      })
  } else {
    res.render('login')
  }
})

// Forgot Username
app.get('/forgot-username', (req, res) => {
  res.render('forgetUsername')
})


sequelize.sync() //or .authenticate()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e => console.log(e))