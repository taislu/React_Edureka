class Task {
  constructor(id, title, description = '') {
    this.id = id
    this.title = title
    this.description = description
    this.completed = false
    this.date = new Date()
  }
}

// export default Task //es6
module.exports = Task //es5