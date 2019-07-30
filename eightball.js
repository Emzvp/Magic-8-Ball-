var userName='';
if (userName===true);{
	console.log(`Hello, ${userName}`);
}
var userQuestion="Will I meet a guy that's not a fuck boy?";
console.log(`The user asked: ${userQuestion}`);
var randomNumber=Math.floor(Math.random()*8);
var eightBall='';
switch(randomNumber){
  case 0:
    eightBall = 'Signs point to yes';
    break;
  case 1:
    eightBall = 'Do not count on it';
    break;
  case 2:
    eightBall = 'It is certain';
    break;
  case 3:
    eightBall = 'It is decidedly so';
    break;
  case 4: 
    eightBall = 'Reply hazy try again';
    break;
  case 5: 
    eightBall = 'Cannot predict now';
    break;
  case 6: 
    eightBall = 'My sources say no';
    break;
  case 7: 
    eightBall = 'Outlook not so good';
}
 
console.log(`The eight ball answered: ${eightBall}`);
    
