const express = require('express')
const path = require('path')
const ejsMate = require('ejs-mate')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, './public')))
app.use(express.json())

app.engine('ejs', ejsMate)

app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.get('/technical', (req, res)=>{
    res.render('technical.ejs')
})

app.get('/management', (req, res)=>{
    res.render('management.ejs')
})

app.get('/media', (req, res)=>{
    res.render('media.ejs')
})

app.get('/content', (req, res)=>{
    res.render('content.ejs')
})

app.all('*', (req, res, next)=>{
    res.render('pageNotFound.ejs')
})

const server = app.listen(process.env.PORT || 3000)
const portNumber = server.address().port
console.log(`Server is running on port ${server.address().port}`)