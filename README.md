# ArrayThatStartsAnywhere
How about an array that starts at Math.PI?

Node.js
```js
const ArrayThatStartsAt = require("./index.js").ArrayThatStartsAt;

let arr = new ArrayThatStartsAt(72);
arr.push("ay");
arr.push("ay");
arr.push("captain");
arr.push("i can't hear you");
arr.push("ay");
arr.push("ay");
arr.push("captain");
arr[75] // => "i can't hear you"
```

Browser
```html
<script src="./lib/index.js"></script>
```
```js
let arr = new ArrayThatStartsAt(72);
arr.push("ay");
arr.push("ay");
arr.push("captain");
arr.push("i can't hear you");
arr.push("ay");
arr.push("ay");
arr.push("captain");
arr.filter(i => i === "ay"); // => {72: "ay", 73: "ay", 74: "ay", 75: "ay", startIndex: 72, length: 4}
```

## More fun
```js
let arr = new ArrayThatStartsAt(Math.PI);
let arr = new ArrayThatStartsAt(Math.random());
let arr = new ArrayThatStartsAt(parseFloat(Date.now()));
let arr = new ArrayThatStartsAt(Infinity); // only one item supported in this, sadly :(
```

### pls contribute
There are some Array methods currently unimplemented.
