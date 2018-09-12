const express = require('express');

const router = express.Router();
const CountriesController = require('../controllers/countries.controller');

// Map each API to the Controller Functions

router.post('/', CountriesController.create);

// router.patch('/:id', OrdersController.edit);

router.get('/', CountriesController.getList);

// router.get('/:id', OrdersController.getItem);

router.delete('/:id', CountriesController.delete);

module.exports = router;
