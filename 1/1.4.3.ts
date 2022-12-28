import { I } from './1.4.1'
import { b, B } from './1.4.2'

const f1 = (a: number): number => 5 + a
const f2 = (string: string): number => string.length

console.log ( b ( f1, I ) ( 10 ) === 15 )
console.log ( b ( I, f1 ) ( 10 ) === 15 )

console.log ( B ( f1 ) ( I  ) ( 10 ) === 15 )
console.log ( B ( I  ) ( f1 ) ( 10 ) === 15 )

console.log ( b ( f2,    I ) ( 'foo' ) === 3 )
console.log ( B ( f2 ) ( I ) ( 'foo' ) === 3 )
