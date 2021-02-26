/*npm i express ejs
npm i --save-dev nodemon dotenv
npm i bcrypt
npm i passport passport-local express-session express-flash

PÄÄ ASETUS SOVELLUS
*/
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')


const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)
//Luonti käytätjän tunnus mikä jos täsmää se email ja salasana, nimeä ei tarvita
const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

//Static files & lukaisee kansion nimen ja muu polkun
//css stylesheet editointia html:n kanssa
app.use(express.static('public'));
app.use('/css', express.static((__dirname + 'public/css'))); //stylecheet css
app.use('/js', express.static((__dirname + 'public/js'))); //javascript
app.use('/img', express.static((__dirname + 'public/img'))); //images


//Sisään kirjauttumunen onnistuu
app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.name })
  console.log("Login success");
})

//Kirjautuminen
app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
  console.log("Running server port 8080 & Login");
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

//Siirtyy rekisteröintiin ja luodaan käyttäjän tunnus
app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
  console.log("Luo rekisteri");
})

//Rekisteröinti
app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login') //rekisteröity ja takas Login sivustoon --> kirjauttumaan sisään
  } catch {
    res.redirect('/register')
  }
  console.log(users) //tämän kanssa kuin loisi rekisterissä ja toistaa sen saman, paitsi salasana on kunnon hölönpölö & sekä id:tunnus lukukin tulee mukaan, sitä ei tarvitse muistaa, kunhan käyttäjä tietää oman sposti ja salasanan
})

//Kirjaudu ulos
app.delete('/logout', (req, res) => {
  req.logOut()
  console.log("Register deleted");
  res.redirect('/login') //rekisteri poistettu ja takas etusivuun
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

app.listen(8080)
