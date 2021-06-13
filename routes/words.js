var express = require('express');
var router = express.Router();
const jsonParser = express.json();

module.exports = router;

/**
 * GET words list.
 **/
router.get('/', jsonParser, function (request, response) {
    resp = {}
    response.setHeader("Content-Type", "application/json")
    response.status(200).send(JSON.stringify(resp));
});
