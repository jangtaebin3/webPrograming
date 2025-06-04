const readline = require('readline');

const rl = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

rl.question('점수를 입력하하세요. : ', function (score) {
  switch(Math.floor(score / 10)) {
    case 9:
    case 10:
      console.log('A');
      break;
    case 8:
      console.log('B');
      break;
    case 7:
      console.log('C');
      break;
    case 6:
      console.log('D');
      break;
    default:
      console.log('F');
      break;
  }
  rl.close();
});