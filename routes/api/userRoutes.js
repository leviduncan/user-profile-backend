const express = require('express')
const router = express.Router()
const User = require('../../models/usermodel')

router.post('/add', (req, res) => {
    const newUser = new User({
        title: req.body.title,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        number: req.body.number,
        gender: req.body.gender,
        img: req.body.img,
    })
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
})

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err))
})

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
})

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
})

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(400).json(err))
})

module.exports = router