
import React from 'react';
import ReactDOM from 'react-dom';

// This is written this way because it is a default import set up
import fruit from './foods';

//This is written this way because it is no a default from helpers file, so each function or const needs to be identified.
import { choice, remove } from './helpers';

let fruit = choice(fruits);

console.log(`I would like one ${fruit}, please`);
console.log(`I would like one ${fruit}, please`);
console.log(`I would like one ${fruit}, please`);

let fruitsLeft = remove(fruit, fruits);

console.log(`I'm sorry, we are all out of that fruit. We do have ${fruitsLeft.length} left.`);

ReactDOM.render(<Order />, document.getElementById('root'));
export default Order;