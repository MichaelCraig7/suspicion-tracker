var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Who\'s sus?');
});

router.get('/new', (req, res) => {
  res.render('susIndividual/new')
})

router.post('/', (req, res) => {

})

router.get('/:id', (req, res) => {

})

router.get('/:id/edit', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;
