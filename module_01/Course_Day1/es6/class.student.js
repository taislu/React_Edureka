export class Student {
  constructor(id, name, email) {
    this.id = id
    this.name = name
    this.email = email
  }

  showDetails() {
    console.log(this.id, this.name, this.email)
  }
}

export const PI = 3.14

export const name = 'TEST'

export default {
  name: 'test'
}

//export default Student //ES6
//module.exports = Student //ES5