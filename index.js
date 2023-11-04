var numberOfButtons = document.querySelectorAll(".drum").length;
var i = 0;
while (i < numberOfButtons) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        checkKeyPressed(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
    });
    i++
}

/* line 4 has something called an anonymous function or callback function


when not using anon functions, you're effectively passing functions as inputs.

These are called Higher Order Functions, they are functions that can take other functions as inputs

The functions called by Higher Order Functions are called callback functions


javascript, java, ruby, python, haskell, c++, php, c#, Go, Swift

var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
*/

// 166 - JSON:
/*

var bellBoy1 = {
    name:"Timothy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French","English"]
}

Constructor Function :

function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = true;
    this.languages = languages ;
}

Creating object - 

var bellBoy1 = new BellBoy ("Timmy", 19, true, ["French","English"])


objects and methods - #168


*/


addEventListener("keypress", function(event){
    checkKeyPressed(event.key);
    buttonAnimation(event.key)
})


function checkKeyPressed(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log("Bad people")

    }
}

// callbacks ⭐⭐

function buttonAnimation(currentKey){
    var activeButton = document.querySelector( "." +currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}