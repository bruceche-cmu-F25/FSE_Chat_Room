const express = require('express') 
const router = express.Router() 

router.get('/',(req, res) => {
    res.send('User List')
})

router.get('/new',(req, res) => {
    res.render('users/new')
})

router.route('/:id').get((req,res) =>{
    req.params.id
    res.send(`Get User With ID ${req.params.id}`)
}).put((req,res) =>{
    req.params.id
    res.send(`Get User With ID ${req.params.id}`)
}).delete((req,res) =>{
    req.params.id
    res.send(`Get User With ID ${req.params.id}`)
})

// router.get('/:id',(req,res) =>{
//     req.params.id
//     res.send(`Get User With ID ${req.params.id}`)
// })

// router.put('/:id',(req,res) =>{
//     req.params.id
//     res.send(`Get User With ID ${req.params.id}`)
// })

// router.delete('/:id',(req,res) =>{
//     req.params.id
//     res.send(`Get User With ID ${req.params.id}`)
// })


module.exports = router