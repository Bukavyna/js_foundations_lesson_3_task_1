"use strict"

let n = +prompt(`write count loop`);
for (let i=1; 1<n; n--) {
	i = i * n;
	document.write(`<h2>Loop ${i}</h2>`);
}
