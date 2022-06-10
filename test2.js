console.log('here');

intervalobj = setInterval(() => {
  console.log('test');
}, 1000);

function funk(test) {
  console.log(test);
  clearInterval(intervalobj);
}

TimeObj = setTimeout(funk, 5000, 'test');

d = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'func');
});

d.then((cat) => {
  console.log(cat);
});
