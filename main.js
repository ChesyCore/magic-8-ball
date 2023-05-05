 var userName = 'Sam';
  if (userName === 'Jane') {
    console.log(`Hello ${userName}!`);
  } else {
    console.log('Hello!') 
  } // works

  var userQuestion = 'When will I get a new puppy soon?';
  if (userQuestion === 'What will I eat for lunch?') {
    console.log( `You'll eat fish and chips, ${userName}!`); 
  } // my answer
  console.log(`${userName} has asked - ${userQuestion}`);

  var randomNumber = Math.floor(Math.random() * 8);
  // console.log(randomNumber)
  var eightBall = '';

  switch (randomNumber) {
    case 0: 
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Reply hazy try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
    case 4:
      eightBall = 'Do not count on it';
      break;
    case 5:
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
    default:
      break;
  }
  console.log(`The Magic Eight Ball says, ${eightBall}.`)
