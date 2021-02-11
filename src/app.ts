
import Person from './person' // Javascript Class
import Greeter from './greeter/greeter' // Typescript Class

const p1 = new Person('Javascript ES6 Class, no types')
const g1 = new Greeter('Typescript Class, has types')

console.log(p1.sayName())
console.log(g1.greet())
