const express = require('express')
const routes = express.Router()
const landingController = require('../controllers/landingpage')
const pdashboardController = require('../controllers/Pdashboard')

routes.route("/loginform").post(landingController.loginSubmit)
routes.route("/registerform").post(landingController.registerSubmit)


routes.route("/logindata")
.post(pdashboardController.sendDataToPatientDashboard)
.get(pdashboardController.sendDataToPatientDashboard)

module.exports = routes;