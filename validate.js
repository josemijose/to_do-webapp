
var user=document.getElementById("username");
var pwd=document.getElementById("password");
function print(){
    console.log("hai");}


function val(callback){
    if(user.value=="admin"&& pwd.value=="12345")
    {console.log("correct");
    callback();
}
    else{
    alert ("Invalid credentials");}}

    function callback(){
        console.log("callack")
        var nav=document.getElementById("loginform");
        nav.setAttribute("action","home.html")
    
        return false;
    }