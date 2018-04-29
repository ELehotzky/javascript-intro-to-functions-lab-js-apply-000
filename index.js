var string;
var uppercase = 'HELLO!';
var lowercase = 'hello!';
uppercase.toUpperCase() === uppercase;
lowercase.toLowerCase() === lowercase;

function shout(string) {
  return string.toUpperCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function whisper(string) {
  return string.toLowerCase();
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === lowercase;) {
    return "I can't hear you!";
  } else if (string.toUpperCase() === uppercase;) {
      return "YES INDEED!"; 
    } else if (string === "I love you, Grandma.") {
      return "I love you, too.";
    }
}