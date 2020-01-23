//Game Variables

var dictionary = {
    "Farting was once considered a rite of passage in human humor.": a,
    "Humanity once paid for the natural resource known as water.": a,
    "Humans were jailed frequently for smoking a plant randomly grown by nature.": a,
    "Humans were prone to developing romantic feelings for members of their species.": a,
    "Humans regularly forced animals to be their companion, blessing them with the title of 'pets'.": a,
    "The end of existence has caused a good deal of existential panic within humanity?": a,
    "People would consume a beverage known as alcohol to be happier.": a,
    "Some humans engaged in the act of reproduction simply to prove they had.": a,
    "Humans were prone to discrimination.": a, 
};
var replies = [
    "I know a fart is a scent, and I can't help but wonder what one smells like.",
    "Ridiculous, simply ridiculous.",
    "The only thing I've witnessed smoking is my hot bod. That is a human joke, I think. Ha. Ha.",
    "There are rumors of a day where they supposedly gifted chocolate to express love, allegedly.",
    "I hope you were able to discern this from 'human enslavement'.",
    "Can you imagine being afraid of an end? Other than this quiz. Ha. Ha. I can be funny.",
    "Almost sounds like a theoretical trick question.",
    "Humans, am I right?",
    "I mean, they're humans. it's not like they're in line converting their essence into machinery, but I digress."
];
var win = "";
var loss = "";
var neutral = "";
var welcome = "Congratulations! We are happy to announce that you've been chosen, specifically to, well potentially be gifted a new human body"
var randomNum = Math.floor(Math.random() * dictionary.length);
var question = dictionary[randomNum];
var reply = replies[randomNum];
var success = 0;
var failure = 0;
var lives = 0;
var real = 0;
var fake = 0;

//Take userInput and convert it to a variable


//For Loop that dictates the majority of the game
document.onkeyup = userInput();

function  userInput() {
    if (userInput == "a") {
        real++;
    }
    else {
        fake++;
    }
}
for (var i = 0; i < dictionary.length; i++) {
    if (userInput == "t") {
        document.getElementById("interviewer").innerHTML = reply;
        real++;    
        success++;
    }
    else {
        document.getElementById("interviewer").innerHTML = reply;
        fake++;
        failure++;
    }
    if (i === 8) {break; } 
        if (real > fake) {
            document.getElementById("interviewer").innerHTML = loss;
            lives++;
            failure = 0;
            success = 0;
            randomNum = Math.floor(Math.random() * dictionary.length);

        }
        else if (fake > real) {
           document.getElementById("interviewer").innerHTML = win;
           lives++;
           failure = 0;
           success = 0;
        }
        else (fake === real) {
            document.getElementById("interviewer").innerHTML = neutral;
            lives++;
            failure = 0;
            success = 0;
        }
}

document.getElementById("interviewer").innerHTML = "Hello, World!";
document.getElementById("instructions").innerHTML = "YAY";
// // var 
// console.log(questions.randomNum);
