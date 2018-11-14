//Global Variables
//==================================

var dolls = ["dot", "helmet", "barf", "lonestar", "vespa"];
var messages = ["No Sir! I did not see you playing with your dolls again!", "We Brake for No One",];
var dot = {
    name:"Dot Matrix",
    hp:"75",
    ap:"2",
    cap:"8",
    
};
var helmet = {
    name:"Dark Helmet",
    hp:"100",
    ap:"6",
    cap:"2",
    
};
var barf = {
    name:"Barf",
    hp:"120",
    ap:"5",
    cap:"2",
    
};
var lonestar = {
    name:"Lonestar",
    hp:"80",
    ap:"5",
    cap:"5",
    
};
var vespa = {
    name:"Princess Vespa",
    hp:"85",
    ap:"3",
    cap:"6",
    
};





//Functions
//===================================
function load_dolls(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // Add doll image to the corresponding id tag

    $("#dot-img").append(img);
    $("#helmet-img").append(img);
    $("#barf-img").append(img);
    $("#lonestar-img").append(img);
    $("#vespa-img").append(img);
};






function startGame(){
    showDolls();
};


function showHp(){
    $("#dot-hp").text( dot.hp );
    $("#lonestar-hp").text( lonestar.hp );
    $("#helmet-hp").text( helmet.hp );
    $("#vespa-hp").text( vespa.hp );
    $("#barf-hp").text( barf.hp );
}

function moveDolls(){
    
};

function showDolls(){
    load_dolls("assets/images/dot.png", 50 , 50, dot.name);
    load_dolls("assets/images/lonestar.png", 50 , 50, lonestar.name);
    load_dolls("assets/images/helmet.png", 50, 50, helmet.name);
    load_dolls("assets/images/vespa.png", 50 , 50, vespa.name);
    load_dolls("assets/images/barf.png", 50 , 50, barf.name);
};


//Main
//=====================================

$("playbtn").on("click", startGame());
showHp();







