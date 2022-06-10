// run `node index.js` in the terminal
const log = require('why-is-node-running'); // should be your first require
console.log(`Hello Node.js v${process.versions.node}!`);

function a() {
  return new Promise((resolve, reject) => {
    var test = true;
    setTimeout(() => {
      test ? resolve('good') : reject('bad');
    }, 5400);
  });
}

function d() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'second');
    console.log('hellddd');
  });
}

async function b(num) {
  console.log('start ' + num);
  await a().then((txt) => {
    console.log(txt);
  });
  console.log('last');
  console.log('stop ' + num);
}

function funk(arg) {
  console.log(arg);
}
setTimeout(funk, 1000, 'got');

intervalobj = setInterval(funk, 500, 'test arg');

setTimeout(() => {
  clearInterval(intervalobj);
}, 5000);

b(1);
b(2);
b(3);
b(4);

d().then((star) => {
  console.log(star);
});
