
function input(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    formvalidation(user,pass,callback);
}

function formvalidation(user,pass,callback){
    
    console.log(user);
    if(user=="admin" && pass=="12345"){
        console.log(pass);
        callback();
        // return false;
    }else {
        alert("Invalid credentials");
    }
}

function callback(){
    console.log("calback");
    var nav=document.getElementById("login");
    nav.setAttribute("action","home.html")

    return false;
}