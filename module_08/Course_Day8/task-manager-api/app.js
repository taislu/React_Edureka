//import express from 'express' //es6

const express = require('express') //es5
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')

const Task = require('./models/Task')

let tasks = [
  new Task(1, 'Learn NodeJS', 'This is for learning NodeJS'),
  new Task(2, 'Learn ReactJS', 'This is for learning ReactJS'),
  new Task(3, 'Learn MongoDB', 'This is for learning MongoDB'),
  new Task(4, 'Learn JavaScript', 'This is for learning JavaScript'),
  new Task(5, 'Learn Angular', 'This is for learning Angular')  
]

const app = express()

app.use(logger('dev'))
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('<h1>Default Path Works!</h1>')
})

app.post('/login', (req, res) => {
  const { username, password } = req.body
  if(username === 'admin' && password === 'admin') {
    res.json({
      username,
      token: 'abcd1234'
    })
  } else {
    res.status(401).json({
      msg: 'Invalid Credentials'
    })
  }
})

app.post('/tasks', (req, res) => {
  const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1
  const { title, description, completed, date } = req.body
  const newTask = new Task(
    newId, title, description, completed, date
  )

  tasks.push(newTask)
  res.json(newTask)
})

app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id

  for(let i=0; i<tasks.length; i++) {
    if(tasks[i].id == id) {
      tasks.splice(i, 1)
      break
    }
  }

  res.json({})
})

app.get('/tasks', (req, res) => {
  res.json(tasks)
})

app.get('/tasks/:id', (req, res) => {
  const id = req.params.id
  let task = null

  for(let i=0; i<tasks.length; i++) {
    if(tasks[i].id == id) {
      task = tasks[i]
      break;
    }
  }

  if(task) {
    res.json(task)
  } else {
    res.status(404).json({
      msg: 'Nothing found'
    })
  }
})

app.listen(3001, () => {
  console.log('Server started on port 3001')
})