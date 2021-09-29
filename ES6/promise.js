//Promise
let p = new Promise((resolve, reject) => {
    const result = Math.random();
    if (result <= 0.5) {
      resolve('Success');
    } else {
      reject('Failed');
    }
  });
  
  p.then((message) => {
    console.log('This is in the then ' + message);
  }).catch((message) => {
    console.log('This is in the catch ' + message);
  });