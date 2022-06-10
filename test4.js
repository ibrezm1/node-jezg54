function test(txt, timeout, err = false) {
  return new Promise((resolve, reject) => {
    execute = !err ? resolve : reject;
    setTimeout(execute, timeout, txt);
    console.log(txt + ' - completed');
  });
}
test('first', 1000)
  .then((hello) => console.log(hello))
  .catch((err) => console.log('err ' + err));

const a = async () => {
  try {
    let res1 = await test('don1', 2000); // Need data
    test('don2', 5000, true) // can be async ex logging or SN call
      .then((txt) => {
        console.log('sucess');
      })
      .catch((err) => {
        console.log(err);
      });
    let res3 = await test('don3', 2000); // need data in another call
    let res4 = await test('don4', 2000); // need data in another call
  } catch (err) {
    console.log('err -- ' + err);
  }
};

const b = () => {};

a();
b();
