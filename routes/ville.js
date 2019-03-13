var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET Ville page */
router.post('/', function(req, res, next) {

  //Ici on veut lancer une autre requête vers la map. Le but est de récupérer les informations
  axios.get('https://geocode.xyz/'+req.body.nom_ville+'?json=1&auth=889202541745294745990x1974').then(function (response) {
    if(response.data.latt=="0.00000" && response.data.longt=="0.00000"){
      res.render('ville',{ville:response.data.error.description})
    }
    else{
      console.log(req.body.nom_ville)
      res.render('ville',{ville:'ville : '+response.data.standard.city+' latitude : '+response.data.latt + 'longitude'+response.data.longt});
    }
  })
  .catch(function (error) {
    console.log(error);
  });


});


module.exports = router;
