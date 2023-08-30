let table=[];
let player=0;
let score1=0;
let score2=0;
console.log("strt");

initialize();

function initialize(){
    console.log("init");
    player=(parseInt(Math.random()*99)%2)+1;
    table=[
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ];
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            document.getElementById(id(i,j)).disabled=false;
            document.getElementById(id(i,j)).style.backgroundColor="#fff";
        }
    }
    
    var div=document.getElementById("player");
    div.style.fontSize="120pt";
    affiche();

}

affiche();
function affiche(){
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            affiche_case(i,j);
        }
    }
    affichePlayer();
}
function affichePlayer(){
    var btn=document.getElementById("player");
    switch(player){
        case 0:
            btn.textContent="-";
            btn.style.color="white";
            break;
        case 1:
            btn.textContent="X";
            btn.style.color="red";
            break;
        case 2:
            btn.textContent="O";
            btn.style.color="green";
            break;
        default:;
    }
}
function affiche_case( i, j){
    var btn=document.getElementById(id(i,j));
    switch(table[i][j]){
        case 0:
            btn.textContent="-";
            btn.style.color="white";
            break;
        case 1:
            btn.textContent="X";
            btn.style.color="red";
            break;
        case 2:
            btn.textContent="O";
            btn.style.color="green";
            break;
        default:;
    }
}
function id(i,j) {
    var id= `${i + 1}${j + 1}`;
    return id;
}