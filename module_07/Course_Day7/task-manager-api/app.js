//import express from 'express' //es6

const express = require('express') //es5
const cors = require('cors')
const Task = require('./models/Task')

let tasks = [
  new Task(1, 'Learn NodeJS', 'This is for learning NodeJS'),
  new Task(2, 'Learn ReactJS', 'This is for learning ReactJS'),
  new Task(3, 'Learn MongoDB', 'This is for learning MongoDB'),
  new Task(4, 'Learn JavaScript', 'This is for learning JavaScript'),
  new Task(5, 'Learn Angular', 'This is for learning Angular')  
]

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Default Path Works!</h1>')
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