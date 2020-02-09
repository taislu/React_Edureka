//import Student from './class.student' //ES6
// const Student = require('./class.student') //ES5
import { Student } from './class.student'

const student = new Student(1, 'John Doe', 'john.d@gmail.com')
student.showDetails()