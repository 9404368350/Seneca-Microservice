var seneca = require('seneca')()
var entities = require('seneca-entity')
seneca.use(entities)
seneca.use('jsonfile-store', {
  folder:'C:/Users/MA26233T/new'}   // map:{'-/json/-':'*'}
)

var apple = seneca.make$('fruit')
apple.name  = 'Pink Lady'
apple.price = 0.99
apple.save$(function (err, apple) {
  console.log("apple.id = " + apple.id )
})
var orange = seneca.make$('fruit')
orange.name  = 'Pink Lady'
orange.price = 0.99
orange.save$(function (err, orange) {
  console.log("orange.id = " + orange.id )
})