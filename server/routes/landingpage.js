const express = require('express')
const routes = express.Router()
const landingController = require('../controllers/landingpage')


routes.route("/loginform").post(landingController.loginSubmit);
routes.route("/registerform").post(landingController.registerSubmit)

module.exports = routes;