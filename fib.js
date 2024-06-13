#!/bin/env node

function fibs(count) {
	const fibSequence = [];

	for (let i = 0; i < count; i++) {
		if (fibSequence.length < 2) fibSequence.push(i);
		else fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
	}

	return fibSequence;
}

console.log(fibs(8));

function fibRec(count) {
	if (count === 0) return [0];
	if (count === 1) return [0, 1];
	const fibs = fibRec(count - 1);

	if (fibs.length === count) return [...fibs];
	return [...fibs, fibs.pop() + fibs.pop()];
}

console.log(fibRec(8));

// To do recursion we get rid of the localeCompare
// base case count === 0 then return
// recursive case return count + fib(7)
// how to store returns in an array?
// create a fibs array
// if it's length is less than count then call fibs
