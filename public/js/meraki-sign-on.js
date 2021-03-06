import axios from "axios";

// Parse paramaters
var login_url = GetURLParameter("login_url");
var continue_url = decodeURIComponent(GetURLParameter("continue_url"));
var node_mac = GetURLParameter("node_mac");
var client_ip = GetURLParameter("client_ip");
var client_mac = GetURLParameter("client_mac");



// Print Meraki provided paramaters for Debugging State
console.log("user_continue_url: " + continue_url);
console.log("login_url: "+login_url);
console.log("client_ip: "+client_ip);
// document.getElementById("baseGrantURL").innerHTML = base_grant_url;
// document.getElementById("userContinueURL").innerHTML = user_continue_url;
// document.getElementById("clientIP").innerHTML = client_ip;
// document.getElementById("clientMAC").innerHTML = client_mac;
// document.getElementById("nodeMAC").innerHTML = node_mac;

// Form Submit handler. 
document.getElementById('loginForm').onsubmit= function(e){
    e.preventDefault(); //prevents default form submission process to allow login and validation
    login();
}

// ******************
// Login to Meraki by redirecting client to the base_grant_url 
// 
// The logingUrl will add a continue_url parameter for a final client
// redirect to their intended site. 
// (you could override this url to send the user to a home page)
// ****************** 
function authUser(){

    // if(user_continue_url !== "undefined"){
    //     loginUrl += "?continue_url="+user_continue_url;
    // }
    console.log("Logging in... ",loginUrl);

    
    // redirect browser to meraki auth URL.
    window.location.href = continue_url;
}

// Button handler function to store the form data and login. 
function login(){
    // send the data somewhere like a database
    var data = {};
    data.username = document.getElementById("username").value;
    data.password = document.getElementById("password").value;
    alert("Hola "+data.username +"\n"+"Gracias por ingresar a la red");
    console.log("Storing data to db...", data);

    // Complete Login
    authUser();
}

// Helper function to parse URL
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}