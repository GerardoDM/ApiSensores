'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

  Route.post('login' , 'UserController.login')
  Route.post('register' , 'UserController.register')
  Route.get('index', 'UserController.index')


}).prefix('users')


//Sensores
Route.group(() => {

  Route.post('create' , 'SensorController.create').middleware(['auth'])
  Route.delete('delete/:id', 'SensorController.destroy').middleware(['auth'])
  Route.patch('update/:id', 'SensorController.update').middleware(['auth'])
  Route.get('index', 'SensorController.index').middleware(['auth'])
  Route.get('show/:userID', 'SensorController.show').middleware(['auth'])

}).prefix('sensores')


Route.group(() => {

  Route.post('create' , 'SensorLecturaController.create').middleware(['auth'])


}).prefix('lecturas')

// MongoDB sensores routes
Route.post('sensores/lecturas/register','SensorController.registerLecturas').middleware(['auth'])
Route.get('sensores/lecturas/get/:sensor_id','SensorController.getLecturas').middleware(['auth'])
