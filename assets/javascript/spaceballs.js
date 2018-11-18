//Global Variables
//==================================


var messages = ["No Sir! I did not see you playing with your dolls again!", "We Brake for No One", "Comb the desert!"];
var player = [
    {
        name: "Player",
        score: 0,
        kills: 0,
        wins: 0
    }
];
var spaceballs = [
    {
        name: "Barf",
        hp: 75,
        ap: 2,
        cap: 8,
        src: "assets/images/barf.png",
        width: 50,
        height: 50
    },
    {
        name: "Dark Helmet",
        hp: 100,
        ap: 6,
        cap: 2,
        src: "assets/images/helmet.png",
        width: 50,
        height: 50
    },
    {
        name: "Dot Matrix",
        hp: 120,
        ap: 5,
        cap: 2,
        src: "assets/images/dot.png",
        width: 50,
        height: 60
    },
    {
        name: "Lonestar",
        hp: 80,
        ap: 5,
        cap: 5,
        src: "assets/images/lonestar.png",
        width: 50,
        height: 50
    },
    {
        name: "Princess Vespa",
        hp: 85,
        ap: 3,
        cap: 6,
        src: "assets/images/vespa.png",
        width: 50,
        height: 50
    }
];


//Functions
//===================================
function load_dolls() {
    
    spaceballs.forEach(function (elem, i) {
        console.log(elem);
        
        //Loads the Dolls images
        dollsImg = $("<img>");
        dollsImg.addClass("img-fluid clickable");
        dollsImg.attr("src", elem.src);
        dollsImg.attr("width", elem.width);
        dollsImg.attr("height", elem.height);
        $("#img" + i).append(dollsImg);


        // Loads the Dolls HP
        dollsHP = $("<div>");
        dollsHP.text(elem.hp);
        dollsHP.attr("hp", elem.hp);
        $("#hp" + i).append(dollsHP);

        // Loads the Dolls Names
        dollsName = $("<div>");
        dollsName.text(elem.name);
        dollsName.attr("name", elem.name);
        $("#name" + i).append(dollsName);



        $('.clickable').click(function () {
            $(this).prependTo('#player');

    

        
    })

       
    });
        
        console.log(spaceballs);
   

};


function startGame() {
    var dollsName;
    var dollsImg;
    var dollsHP;
    var dollsName;
    var player;

    showDolls();

};


function moveDolls() {

};

function showDolls() {

    load_dolls();

};

function reset() {

}

//Main
//=====================================

$('#playbtn').click(startGame);
$('#restart').click(reset);

