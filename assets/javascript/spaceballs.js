//Global Variables
//==================================


var messages = ["There's only one man who would dare give me the raspberry: Lonestarr!", "What's the matter, Colonel Sandurz? Chicken?", "It's the radar. It appears to be... Jammed.", "No Sir! I did not see you playing with your dolls again!", "We Brake for No One.", "Comb the desert!", "Ludicrous Speed", "What?! You went over my helmet?", "You have the ring, and I see your Schwartz is as big as mine. Now let’s see how well you handle it.", "I’ve lost the bleeps, I’ve lost the sweeps, and I’ve lost the creeps. That's not all he's lost!", "Who knows? God willing, we’ll all meet again in Spaceballs 2: The Search for More Money.", "My Brains are going into my feet!", "It's Spaceball One -- They've gone to plaid...", "That's the stupidest combination I've ever heard of in my life! That's the kinda thing an idiot would have on his luggage!"];
var message = messages[Math.floor(Math.random() * messages.length)];
var enemy;
var player = [
    {
        name: "Player",
        dollnum: "",
        hp: 0,
        ap: 0,
        cap: 0,
        score: 0,
        kills: 0,
        wins: 0,
        width: 0,
        height: 0,
        src: ""
    }
];

var spaceballs = [
    {
        doll: "barf",
        dollnum: "",
        isPlayer: false,
        name: "Barf",
        hp: 100,
        ap: 4,
        cap: 4,
        src: "assets/images/barf.png",
        width: 50,
        height: 50
    },
    {
        doll: "helmet",
        dollnum: "",
        isPlayer: false,
        name: "Dark Helmet",
        hp: 75,
        ap: 5,
        cap: 4,
        src: "assets/images/helmet.png",
        width: 50,
        height: 50
    },
    {
        doll: "dot",
        dollnum: "",
        isPlayer: false,
        name: "Dot Matrix",
        hp: 70,
        ap: 2,
        cap: 6,
        src: "assets/images/dot.png",
        width: 50,
        height: 60
    },
    {
        doll: "Lonestarr",
        dollnum: "",
        isPlayer: false,
        name: "Lonestarr",
        hp: 80,
        ap: 5,
        cap: 3,
        src: "assets/images/lonestar.png",
        width: 50,
        height: 50
    },
    {
        doll: "vespa",
        dollnum: "",
        isPlayer: false,
        name: "Princess Vespa",
        hp: 85,
        ap: 5,
        cap: 3,
        src: "assets/images/vespa.png",
        width: 50,
        height: 50
    }
];


//Functions
//===================================
function load_dolls() {
    
    spaceballs.forEach(function (elem, i) {
       
       
        var dollNum = ('doll' + i);
        spaceballs[i].dollnum = i;
        

        //Loads the Dolls images
        dollsImg = $("<img>");
        dollsImg.addClass("img-fluid border");
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
        
        

        $("#doll" + i).on("click",
            function () {
                console.log(spaceballs);
                $("#doll" + i).prependTo('#player');
                spaceballs[i].isPlayer = true;
                player[0].name = spaceballs[i].name;
                player[0].doll = spaceballs[i].doll;
                player[0].hp = spaceballs[i].hp;
                player[0].ap = spaceballs[i].ap;
                player[0].cap = spaceballs[i].cap;
                player[0].src = spaceballs[i].src;
                player[0].width = spaceballs[i].width;
                player[0].height = spaceballs[i].height;
                player[0].dollnum = spaceballs[i].dollnum;



                $('#atk-btn').show();
                $('#atk-btn').click(battle);
                message = "<<< Click Attack to Fight >>>";
                $('#gameMsg').text(message);
                $("#doll0").off();
                $("#doll1").off();
                $("#doll2").off();
                $("#doll3").off();
                $("#doll4").off();
                $("#doll5").off();
                
                spaceballs.splice([i], 1);
                enemy = spaceballs[Math.floor(Math.random() * spaceballs.length)];
                $("#doll" + enemy.dollnum).prependTo('#enemyDoll');


                    //Remove non combat dolls
                spaceballs.splice([enemy.dollnum], 1);
                console.log(spaceballs);
                // spaceballs.forEach(function(elem2, j){
                //     $("#doll" + j).hide();
                // })

                console.log(player[0]);
                console.log(enemy);
                
                
                
            })


    });

    


};


function startGame() {
    message = "<<< Click a Doll to Play >>>";
    $('#gameMsg').text(message);
    $('#playbtn').hide();
    $('#resetbtn').show();
    $('#resetbtn').click(reset);
    var dollsName = "";
    var dollsImg = "";
    var dollsHP = 0;

    load_dolls();
    
    
};


function moveDolls() {

};



function reset() {
    var dollsName = "";
    var dollsImg = "";
    var dollsHP = 0;
    for (i = 0; i < spaceballs.length; i++) {
        $('#img' + spaceballs[i].dollnum).empty();
        $('#hp' + spaceballs[i].dollnum).empty();
        $('#name' + spaceballs[i].dollnum).empty();
        $('#img' + spaceballs[i].dollnum).show();
        $('#hp' + spaceballs[i].dollnum).show();
        $('#name' + spaceballs[i].dollnum).show();
        $('#player').empty();
        message = messages[Math.floor(Math.random() * messages.length)];
        $('#gameMsg').text(message);
        $('#atk-btn').hide();
    };

    $('#playbtn').show();

    $('#resetbtn').hide();

}

function battle() {
   
   enemy.hp -= player[0].ap;
   player[0].hp -= enemy.cap;
   console.log(player[0]);
   console.log(enemy);
    $("#hp" + player[0].dollnum).text(player[0].hp);
    $("#hp" + enemy.dollnum).text(enemy.hp);
   
    if(player[0].hp <= 0){
       alert("you lose")
    }

    if(enemy.hp <= 0){
        alert("you win")
     }
    //Debug
  
   
}

//Main
//=====================================

$('#playbtn').click(startGame);
$('#resetbtn').hide();
$('#atk-btn').hide();
$('#gameMsg').text(message)

