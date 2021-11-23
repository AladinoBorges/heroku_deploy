const router = require('express').Router();

const RootController = require('../controllers/RootController');

router.get('/', RootController);

module.exports = router;
