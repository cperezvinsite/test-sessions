var express = require('express');
var router = express.Router();
var passport = require("passport");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home',function(req,res){
  if(!req.user){
    return res.end('ERROR');
  }
  return res.json(req.user).end();
})
router.get('/logout',function(req,res){
  req.logout()
  res.clearCookie("usercookie")
  res.redirect("/")
})
router.post("/login", passport.authenticate("local", {
  failureRedirect: '/',
  failureFlash: true
}), function(req, res) {
  res.cookie('usercookie', req.user.id);
  res.redirect('/home');
});


module.exports = router;