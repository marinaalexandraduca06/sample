const express = require('express');

const router = express.Router();
const ContinentsController = require('../controllers/continents.controller');

router.get('/', ContinentsController.getList);

router.post('/', ContinentsController.create);

// router.patch('/:id', OrdersController.edit);


// router.get('/:id', OrdersController.getItem);

router.delete('/:id', ContinentsController.delete);

module.exports = router;
