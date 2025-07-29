const express = require('express')
const app = express()

// app.use(express.static("public"))

app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.get('/', (req, res) => {
    console.log('processing get request')
    res.render('index')
})

const userRouter = require('../routes/users')

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.oringinalUrl)
    next()
}

app.listen(3000)