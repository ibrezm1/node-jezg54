function x(txt, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(txt);
      console.log(txt);
    }, time);
  });
}

x('done', 1000).then((done) => {
  console.log(done); // --> 'done!'
});

async function a() {
  const result1 = await x('done1', 3000);
  x('done2', 5000);
  const result3 = await x('done3', 1000);
  const result4 = await x('done4', 000);
  console.log(result4); // --> 'done!';
}

a();
