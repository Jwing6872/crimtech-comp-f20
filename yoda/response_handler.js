// Declaring variables that you may want to use.
let names = ['cute', 'regular'];
let moods = ['dark', 'force', 'std'];

let dark_quotes = ["Once you start down the dark path, forever will it dominate your destiny, consume you it will.",
"In a dark place we find ourselves, and a little more knowledge lights our way.",
"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
"Always two there are, no more, no less. A master and an apprentice.",
"In the end, cowards are those who follow the dark side."];
let force_quotes = ["Luminous beings are we, not this crude matter.",
"A Jedi uses the Force for knowledge and defense, never for attack.",
"Clear your mind must be, if you are to find the villains behind this plot.",
"The force. Life creates it, makes it grow. Its energy surrounds us and binds us.",
"My ally is the Force, and a powerful ally it is."];
let std_quotes = ["Patience you must have, my young padawan.",
"When nine hundred years old you reach, look as good you will not.",
"No! Try not! Do or do not, there is no try.",
"Judge me by my size, do you?",
"Difficult to see. Always in motion is the future."
];
let all_quotes = [dark_quotes, force_quotes, std_quotes];

function rand_el(arr) {
    if (Array.isArray(arr)){
        return rand_el(arr[Math.floor(Math.random() * arr.length)])
    } else {
        return arr
    }
};

function rand_quote_m(arr) {
    return(rand_el(arr) + " h" + "m".repeat(Math.floor(Math.random() * 15)+1))
}

function respond() {
    var inputtext = document.getElementById("input").value;
    if (inputtext.includes("cute") || inputtext.includes("baby")) {
        document.getElementById("pic").setAttribute("src", "img/cute-std.jpg")
        document.getElementById("txt").innerText = rand_quote_m("");
    } else if (inputtext.includes("force")) {
        if (inputtext.includes("dark")) {
            document.getElementById("pic").setAttribute("src", "img/" + rand_el(names) +"-dark.jpg")
        } else {
            document.getElementById("pic").setAttribute("src", "img/" + rand_el(names) +"-force.jpg")
        } 
        document.getElementById("txt").innerText = rand_quote_m(all_quotes);
    } else {
        document.getElementById("pic").setAttribute("src", "img/"+ rand_el(names) + "-" + 
        rand_el(moods) + ".jpg")
        if (document.getElementById("pic").getAttribute("src") == "img/cute-std.jpg") {
            document.getElementById("txt").innerText = rand_quote_m("");
        } else {
            document.getElementById("txt").innerText = rand_quote_m(all_quotes);
        }
    }
    console.log(inputtext);
}