const router = require('express').Router()
const Candy = require('../db/models/Candy')

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll()
    res.json(candies);
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const candy = await Candy.findById(req.params.id)
    res.json(candy);
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { name, description, quantity, imageUrl  } = req.body
    res.status(201)
    res.json(await Candy.create({ name, description, quantity, imageUrl  } ))
  } catch (error) {
    next(error)
  }
})

router.delete('/id', async (req, res, next) => {
  try {
    const candy = await Candy.findById(req.params.id)
    if (!candy) res.sendStatus(404)
    await candy.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
