"use strict";
var passport;

passport = require("passport");


module.exports = function() {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    let user = {
        id:'123123213',
        _id:'123123213',
        name:'camilo',
        email:'test@test.com.co'
    }
    done(undefined, user);
  });
  require("./strategies/local.js")();
};
