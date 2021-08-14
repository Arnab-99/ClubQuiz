var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");

console.log("Hello " + userName + ". How much do you know about Arnab's favourite Club? \nAnswer the questions to find out!");
console.log("------------------------------------------------");

var score = 0

function hardGame(question, answer, reward){
    var userAnswer = readlineSync.question(question);

    if(userAnswer.toLowerCase() === answer.toLowerCase()){
        score++;
        console.log("You are right!!");
        console.log(reward);
    }
    else{
      console.log(userAnswer + " is the wrong answer...");
      console.log(answer+" is the correct answer");
    }
}

function easyGame(question, answer, options, reward){
    console.log(question);
    var userAnswer = readlineSync.keyInSelect(options, "Choose your answer: ");

    if(options[userAnswer] === answer){
        score++;
        console.log("\nYes,", options[userAnswer], "is the correct answer!!\n");
        console.log(reward);
    }
    else{
        console.log(options[userAnswer], "is the wrong option...");
        console.log(answer+" is the correct answer");
    }
}
// questions
var questionOne = {
    question: "Who scored the first goal in Manchester United's 2019-20 home encounter with Arsenal in the Premier League?",
    answer: "Scott McTominay",
    options: ["Bruno Fernandes", "Paul Pogba", "Scott McTominay", "Marcus Rashford"],
    reward: "McTominay latched onto Rashford's pass and fired the ball into the roof of the net just before half time."
}

var questionTwo = {
    question: "Sir Alex was appointed manager of Manchester United in 1986 after his predecessor was fired. Who was this predecessor. ",
    answer: "Ron Atkinson",
    options: ["Frank O'Farrell", "Ron Atkinson", "Matt Busby", "Dave Sexton"],
    reward: "Ron Atkinson spent five years at Manchester United from 1981-1986. Despite two FA Cup wins and some respectable finishes in the league, a poor start to the 1986-87 season saw him fired. "
}

var questionThree = {
    question: "Who did Manchester United beat in the quarter final, to win the Champions League in 1999? ",
    answer: "Inter Milan",
    options:["Inter Milan", "Barcelona", 'Juventus', "Bayern Munich"],
    reward: "Manchester United qualified from the group stage to play Inter Milan in the Quarter Final. Manchester won the first leg 2-0 at Old Trafford and drew 1-1 in Milan."
    
}

var questionFour = {
    question: "Which Manchester Utd player was bailed until February 2008 after being arrested for an alleged rape at a Manchester Hotel in December 2007? ",
    answer: "Jonny Evans",
    options: ["Paul Scholes", "Rio Ferdinand", "Jonny Evans", "Ryan Giggs"],
    reward: "He was loaned to Sunderland on the 4th of January 2008 for the second time in his career."
}

var questionFive = {
    question: "At which stadium do Manchester United play their home games? ",
    answer: "Old Trafford",
    options: ["Old Trafford", "Stamford Bridge", "Anfield", "Etihad Stadium"],
    reward: "The other stadiums are the homes of Manchester Utd's great rivals \nLiverpool: Anfield \nManchester City: Etihad Stadium \nChelsea: Stamford Bridge. "
}

var questionSix = {
    question: "When was Manchester United F.C. founded? ",
    answer: "1878",
    options: ["1882", "1902", "1875", "1878"],
    reward: "The club was formed as Newton Heath L&YR (Lancashire and Yorkshire Railway) Football Club in 1878. Their shirts were green and gold. When the team entered the Football League in 1892 they dropped the 'L&YR' and became Newton Heath FC. In 1902 J.H Davis (the manager of Manchester Breweries) saved the club from bankruptcy. The board decided that the team needed to change their name in order to start fresh, and on 26th April 1902 the club changed its name to manchester United FC. They also changed their team colours later that year to red jersey, white shorts and black socks. "
}

var questionSeven = {
    question: "Against whom did Andy Cole score his first league goal at Old Trafford? ",
    answer: "Manchester United",
    options: ["Arsenal", "Manchester United", "Newcastle United", "Manchester City"],
    reward: "He scored for Newcastle United, against Man Utd, in a 1-1 draw."
}

var questionEight = {
    question: "Which player kung fu kicked a Crystal Palace fan in January 1995? ",
    answer: "Eric Cantona",
    options: ["Ryan Giggs", "Roy Keane", "Paul Scholes", "Eric Cantona"],
    reward: 'Famous quote by Eric Cantona: "When the seagulls follow the trawler, its because they think sardines will be thrown in to the sea." This quote was during a press conference called after the kung fu kicking incident as the press clamoured around him.'
}

var questionNine = {
    question: "What year did Alex Ferguson take over as Manager? ",
    answer: "1986",
    options: ["1986", "1982", "1981", "1984"],
    reward: "Just after he managed Scotland in the World Cup. "
}

var questionTen = {
    question: "Who's nickname was 'El Beatle'? ",
    answer: "George Best",
    options: ["Rio Ferdinand", "Eric Cantona", "George Best", "Ruud van Nistelrooy"],
    reward: "Best was given the nickname by the Portuguese press after a European Cup match against Benfica in 1966. "
}

var questionEleven = {
    question: "By what nickname were Manchester United known during the late 1950s? ",
    answer: "The Busby Babes",
    options: ["The Red Devils", "The Busby Babes", "Reds", "Nightmare 11"],
    reward: "They're better known nowadays as The Red Devils "
}

var questionAnswerArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen, questionEleven]; 

var isAttempted = [false, false, false, false, false, false, false, false, false, false, false];

console.log("Hard Mode will not have options for any answer, whereas Easy Mode will have 4 options for all the questions.")
console.log("------------------------------------------------");

if(gameDifficultySelect = readlineSync.keyInYN("Do you want to attempt this quiz in Hard Mode?")){
  console.log("\n------------------------\n");
  for(var i = 0; i<questionAnswerArray.length; i++){
    var questionNo = Math.floor(Math.random() * 11);
    if(!isAttempted[questionNo]){
      hardGame(questionAnswerArray[questionNo].question, questionAnswerArray[questionNo].answer, questionAnswerArray[questionNo].reward);
      isAttempted[questionNo]=true;
      console.log("\n------------------------\n");
    }
    else{
      i--;
    }
  }
}
else{
  console.log("\n------------------------\n");
  for(var i = 0; i<questionAnswerArray.length; i++){
    var questionNo = Math.floor(Math.random() * 11);
    if(!isAttempted[questionNo]){
      easyGame(questionAnswerArray[questionNo].question, questionAnswerArray[questionNo].answer, questionAnswerArray[questionNo].options, questionAnswerArray[questionNo].reward);
      isAttempted[questionNo]=true;
      console.log("\n------------------------\n");
    }
    else{
      i--;
    }
    
  }
}

console.log("Your score is", score, "out of", questionAnswerArray.length, ".");