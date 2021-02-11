import * as test from 'tape'
import Greeter from '../greeter/greeter'

test('Should Greet', (t) => {
  t.plan(1)
  const g1 = new Greeter('friend')
  t.equal(g1.greet(), 'Hello, friend')
})

