const express = require('express')
const routes = express.Router()
const landingController = require('../controllers/landingpage')
const pdashboardController = require('../controllers/Pdashboard')
const adashboardController = require('../controllers/Adashboard')

routes.route("/loginform").post(landingController.loginSubmit)
routes.route("/registerform").post(landingController.registerSubmit)


routes.route("/logindata")
.post(pdashboardController.sendDataToPatientDashboard)

routes.route("/appointment")
.post(pdashboardController.sendAppointmentToDatabase)

routes.route("/cancelappointment")
.post(pdashboardController.deleteAppointment)

routes.route("/sendappointmentstoadmin")
.get(adashboardController.sendAppointmentsToAdmin)
routes.route("/acceptappointment").post(adashboardController.acceptAppointment)

module.exports = routes;