var express = require('express');
var router = express.Router();

/* GET Ville page */
router.get('/', function(req, res, next) {
  res.render('ville', { ville:req.query.nom_ville});
  
});


module.exports = router;
