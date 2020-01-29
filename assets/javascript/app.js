//Game Global Variables
var dictionary = [
    "Farting was once considered a rite of passage in human humor",
    "Humanity once paid for the natural resource known as water.",
    "Humans were jailed frequently for smoking a plant randomly grown by nature.",
    "Humans were prone to developing romantic feelings for members of their species.",
];
var replies = [
    "I know a fart is a scent, and I can't help but wonder what one smells like.",
    "Ridiculous, simply ridiculous.",
    "The only thing I've witnessed smoking is my hot bod. That is a human joke, I think. Ha. Ha.",
    "There are rumors of a day where they supposedly gifted chocolate to express love, allegedly.",
];
var falseReply = [
    "I'm sorry, the correct answer is 'True'. Farting was very popular in human culture",
    "You are incorrect, they did in fact pay for the natural resource known as water.",
    "Humans were in fact arrested for illegal dealings with a plant.",
    "The correct answer is 'True', humans did in fact catch the love bug.",
];
var introduction = "Hello! Thank you for participating in the 'Am I Fit to Be a Human Quiz?' We appreciate your interest in furthering your AI knowledge about humanity.";
var intro = "Please answer the following true or false questions. Good luck!";
var trueIntroduction = introduction + " " + intro;
var win = "Congratulations, you have toiled for decades to exchange your immorta become a being who dies, see us anytime for a different human lifestyle!";
var loss = "";
var neutral = "";
var randomNum = Math.floor(Math.random() * dictionary.length);
var question = dictionary[randomNum];
var reply = replies[randomNum];
var success = 0;
var failure = 0;
var lives = 0;
var correct = 0;
var fake = 0;

$("#interviewer").text(trueIntroduction);
console.log(trueIntroduction);

// Game Functions
$(document).ready(function() {
    $("#true").click(function() {
        if (1) {
            correct ++;
            $("interviewer").text(replies[i]);
            pause;
        }
function myGame() {
    $("#start").hide();
        for (var i = 0; i <dictionary.length; i++) {
            $("#interviewer").text(dictionary[i]);
            console.log(dictionary[i]);
                // if ($("#true".onclick())) {    
                //     if (1) {
                //          correct++;
                //          $("#interviewer").text(replies[i]);
                // }
                // if ($("#false".onclick())) {
                //     if (1) {
                //         failure++;
                //         $("#interviewer").text(falseReply[i]);
                //     }
                // }
                // if (seconds === 0) {                    
                //     $("#interviewer").text = "A bit slow on the draw.";
                //     myGame;
                //     setTimeout(timeConverter) {

                //     } 
                // }
        //         if ()
        // }
}
//Function to pause
function pause() {

}
//Function to countdown question

// function myGame() {
    // $("plays").hide();
    // function endEvent() {
        // var timer = setTimeout(function(outTime) {var
        //     }; 10000);
            // for (var i = 0; i < dictionary.length; i++) {
            //     document.getElementById("interviewer").innerHTML = dictionary[i];
            //     if ($("true".onclick())) {
            //         if (1) {
            //             real++;    
            //             success++;
                                 
            //             document.getElementById("interviewer").innerHTML = reply;
            //         }
            //     }
            // }
//             $("interviewer").text = dictionary[i];
//                 lives ++;
//                 failure = 0;
//                 success = 0;
//                 randomNum = Math.floor(Math.random() * dictionary.length);
//             }


//         }


// $("true").onclick() {
//     if (1) {
//         document.getElementById("interviewer").innerHTML = reply;
//         real++;    
//         success++;
//                 }
// }
// function timeConverter(t) {
//     let minute = Math.floor(t / 60);
//     let seconds = t - (minutes * 60);
//     if (seconds === 0) {
//     }
//     return seconds
// }
























//function to cycle through 


// for (var i = 0; i < dictionary.length; i++) {
//         document.onkeyup = userInput();
//         function userInput() {
//         if (userInput === "t") {
//             document.getElementById("interviewer").innerHTML = reply;
//             real++;    
//             success++;
//         }
//         else {
//             document.getElementById("interviewer").innerHTML = reply;
//             fake++;
//             failure++;
//         }
//     }
//     if (i === 8) {break; } 
//     if (real > fake) {
//         document.getElementById("interviewer").innerHTML = loss;
//         endEvent;          
//     }
//     else if (fake > real) {
//         document.getElementById("interviewer").innerHTML = win;
//         endEvent;
//     }
//     else (fake === real) ;{
//         document.getElementById("interviewer").innerHTML = neutral;
//         endEvent;
//     }
    
    
// } 
// document.getElementById("interviewer").innerHTML = dictionary[i];
// document.getElementById("instructions").innerHTML = "";


// // var 
// console.log(questions.randomNum);


// Take userInput and convert it to a variable
//For Loop that dictates the majority of the game
// document.onkeyup = userInput();

// function  userInput() {
//     for (var i = 0; i < dictionary.length; i++) {
//         if (userInput == "t") {
//             document.getElementById("interviewer").innerHTML = reply;
//             real++;    
//             success++;
//         }
//         else {
//             document.getElementById("interviewer").innerHTML = reply;
//             fake++;
//             failure++;
//         }
}   