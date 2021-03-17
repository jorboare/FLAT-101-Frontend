const express = require('express')
const router = express.Router()
const House = require('./../models/product.model')


// All Houses
router.get('/houses', (req, res) => {

    House
        .find()
        .then(allHouses => res.json(allHouses))
        .catch(err => console.log(err))
})

//Get One House Details

router.get('/houses/:id', (req, res) => {

    const houseID = req.params.id

    House
        .findById(houseID)
        .then(house => res.json(house))
        .catch(err => res.status(500).json(err))
})


//Add New House

router.post('/new', (req, res) => {

    const house = req.body

    House
        .create(house)
        .then(houseCreated => res.json(houseCreated))
        .catch(err => res.status(500).json(err))
})


//Edit House

router.put('/edit/:id', (req, res) => {

    const house = req.body
    const houseID = req.params.id

    House
        .findByIdAndUpdate(houseID, house)
        .then(houseUpdated => res.json(houseUpdated))
        .catch(err => res.status(500).json(err))
})


//Delete House

router.delete('/delete/:id', (req, res) => {

    const houseID = req.params.id

    House
        .findByIdAndDelete(houseID)
        .then(houseDeleted => res.json(houseDeleted))
        .catch(err => res.status(500).json(err))
})
module.exports = router
