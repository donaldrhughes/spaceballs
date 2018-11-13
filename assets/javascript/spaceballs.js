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
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    // document.body.appendChild(img);
    $("#dot-img").append(img);
    $("#helmet-img").append(img);
    $("#barf-img").append(img);
    $("#lonestar-img").append(img);
    $("#vespa-img").append(img);
}






function startGame(){

};




function moveDolls(){
    
}


//Main
//=====================================
show_image("assets/images/dot.png", 50 , 50);
show_image("assets/images/lonestar.png", 50 , 50);
show_image("assets/images/helmet.png", 50, 50);
show_image("assets/images/vespa.png", 50 , 50);
show_image("assets/images/barf.png", 50 , 50);




