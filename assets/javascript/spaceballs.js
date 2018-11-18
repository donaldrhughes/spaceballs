//Global Variables
//==================================


var dollsImg;
var messages = ["No Sir! I did not see you playing with your dolls again!", "We Brake for No One", "Comb the desert!"];


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
        height: 60,
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
        dollsImg = $("<img>");
        dollsImg.addClass("img-fluid clickableimage");
        dollsImg.attr("src", elem.src);
        dollsImg.attr("width", elem.width);
        dollsImg.attr("height", elem.height);

        $("#img" + i).append(dollsImg);

        // $("<div class='hp'> Hit Points>").append(dollsImg);

        
        // dollsImg.append("<div class='hp'> Hit Points");
        // dollsHP = $("<div>");
        // dollsHP.text("HP");
        // dollsHP.attr("hp", elem.hp);



    });



    $('.clickableimage').click(function () {
        $(this).attr("hp", elem.hp);
    })

};






function startGame() {
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


