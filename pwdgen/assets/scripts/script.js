var uppercase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericlist=["1","2","3","4","5","6","7","8","9"];
var speciallist=["!","@","#","$","%","^","&","*","(",")","-","+","{","}","[","]","/","~","_","=","|","?",".",","];
var PullLeters=[];
var length=0;

function lowerFunction() {
    if (document.getElementById("lowerBox").checked == true){
        PullLeters=PullLeters.concat(lowercase);
        console.log(PullLeters);
    }
    else{
        PullLeters=PullLeters.filter( function(el){
            return lowercase.indexOf(el)<0;   
        }); 
       console.log(PullLeters);
    }
}
function upperFunction() {
    if (document.getElementById("upperBox").checked == true){
        PullLeters=PullLeters.concat(uppercase);
        console.log(PullLeters);
    }
    else{
        PullLeters=PullLeters.filter( function(el){
            return uppercase.indexOf(el)<0;   
        }); 
        console.log(PullLeters);
    }
}
function numericFunction() {
    if (document.getElementById("numericBox").checked == true){
        PullLeters=PullLeters.concat(numericlist);
        console.log(PullLeters);
    }
    else{
        PullLeters=PullLeters.filter( function(el){
            return numericlist.indexOf(el)<0;   
        }); 
        console.log(PullLeters);
    }
}
function specialFunction() {
    if (document.getElementById("specialBox").checked == true){
        PullLeters=PullLeters.concat(speciallist);
        console.log(PullLeters);
    }
    else{
        PullLeters=PullLeters.filter( function(el){
            return speciallist.indexOf(el)<0;   
        }); 
        console.log(PullLeters);
    }
}
//create length
function setLength(){
    var userLength = document.getElementById("lengthInput").value;
    
    if(userLength >128){
        alert("Max is 128 of characters")
        length=128;
        document.getElementById("lengthInput").value;
    }
    else if(userLength<8){
        alert("Min of 8")
        length=128;
        document.getElementById("lengthInput").value;
    }
    else {
        length=userLength;
    }
    console.log(userLength);
}

function password(){
    var password=""
    if(PullLeters.length<1){
        alert("Min one option");
    }
    else if(length==0){
        alert("Need to set a length")
    }
    else{
    for(var i=0;i<length;i++)
    password = password + PullLeters[Math.floor(Math.random()*PullLeters.length)]
    document.getElementById("displayPassword").value = password;
    console.log(password);
    }
}
 function copyPassword(){
    var copyText = document.getElementById("displayPassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
   
 }