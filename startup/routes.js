const express = require('express')

//required routes for each major api category
const stylists = require('../routes/stylists')
const users = require('../routes/users')
const register = require('../routes/register')
const login = require('../routes/login')
const auth = require('../routes/auth')
const error = require('../middleware/error')

//export API routes and connect to endpoints
module.exports = function(app){
	app.use(express.json())
	app.use('/api/stylists', stylists)
	app.use('/api/users', users)
	app.use('/api/register', register)
	app.use('/api/login', login)
	app.use('/api/auth', auth)
	app.use(error)
}
