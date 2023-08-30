function play(id){
    document.getElementById(id).disabled=true;
    let v=_id(id);
    table[v[0]][v[1]]=player;
    chage_player();
    var a=finish(win(v[0],v[1]));
    affiche();

    //new pazzle 
    if(a==1){
        var div=document.getElementById("player");
        div.style.fontSize="24px";
        div.setAttribute("onclick","initialize()");
        div.textContent="continue";
    }
    
    

}
function noWin(){
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(table[i][j]==0)return true;
        }
    }  
    return false;  
}
function chage_player(){
    if(player==1) player=2;
    else player=1;
}
function _id(id){
    let x=parseInt(id);
    return [parseInt(x/10)-1,parseInt(x%10)-1];
}
function win(i,j){
    if(winLin(i)){colorLin(i);return player ;}
    if(winCol(j)){colorCol(j);return player ;}
    if(winDia1(i,j)){colorDia1(i,j);return player ;}
    if(winDia2(i,j)){colorDia2(i,j);return player ;}
    if(noWin()){return 0}
    return -1;
}
function winLin(j){
    var v=table[j][0];
    for(var i=1;i<3;i++){
        if(table[j][i]!=v)return false;
    }
    return true;
}
function colorLin(i){
    for(var j=0;j<3;j++){
        if(table[i][j]==1) document.getElementById(id(i,j)).style.backgroundColor="#fcc";
        if(table[i][j]==2) document.getElementById(id(i,j)).style.backgroundColor="#cfc";
    }
}
function winCol(j){
    var v=table[0][j];
    for(var i=1;i<3;i++){
        if(table[i][j]!=v)return false;
    }
    return true;
}
function colorCol(j){
    for(var i=0;i<3;i++){
        if(table[i][j]==1) document.getElementById(id(i,j)).style.backgroundColor="#fcc";
        if(table[i][j]==2) document.getElementById(id(i,j)).style.backgroundColor="#cfc";
    }
}
function winDia1(i,j){
    if(i!=j)return false;
    var v=table[0][0];
    for(var i=0;i<3;i++){
        if(table[i][i]!=v)return false;
    }
    return true;
}
function colorDia1(){
    for(var j=0;j<3;j++){
        if(table[j][j]==1) document.getElementById(id(j,j)).style.backgroundColor="#fcc";
        if(table[j][j]==2) document.getElementById(id(j,j)).style.backgroundColor="#cfc";
    }
}
function winDia2(i,j){
    if(i+j!=2)return false;
    var v=table[0][2];
    for(var i=0;i<3;i++){
        if(table[i][2-i]!=v)return false;
    }
    return true;
}
function colorDia2(){
    for(var i=0;i<3;i++){
        if(table[i][2-i]==1) document.getElementById(id(i,2-i)).style.backgroundColor="#fcc";
        if(table[i][2-i]==2) document.getElementById(id(i,2-i)).style.backgroundColor="#cfc";
    }
}

function finish(w){
    if (w == 0) {
        document.getElementById("player").style.backgroundColor = "#fff";
        return 0;
    }
    console.log("win->"+w);
    chage_player();
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            document.getElementById(id(i,j)).disabled=true;
        }
    }
    document.getElementById("game").style.backgroundColor="#ccc";
    if(w==1){
        score1++;
        document.getElementById("player").style.backgroundColor="#cfc";
        var div=document.getElementById("score1");
        var p=document.createElement("p");
        p.innerHTML=" O ";
        div.append(p);
    }
    if(w==2){
        score2++;
        document.getElementById("player").style.backgroundColor="#fcc";
        var div=document.getElementById("score2");
        var p=document.createElement("p");
        p.innerHTML=" X ";
        div.append(p);
    }
    
    return 1;

}
