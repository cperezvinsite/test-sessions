"use strict";
var LocalStrategy, User, db, passport;

passport = require("passport");

LocalStrategy = require("passport-local").Strategy;

module.exports = function () {
  passport.use(new LocalStrategy(function (email, passwd, done) {
    if (email === 'test@test.com.co' && passwd === '123') {
      let user = {
        id:'123123',
        name: 'camilo',
        email: 'test@test.com.co'
      };
      return done(null, user);
    }
    return done(null, false, {
      message: "Usuario o Contraseña erroneo"
    });
  }));
};
