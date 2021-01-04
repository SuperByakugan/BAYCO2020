function submiter()
{
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
var date = new Date();

var string = name + " " + email + " " + message + " " + date.toString();
console.log(string);

firebase.database().ref('Contact/' + date.toString()).set({
name: name,
email: email,
message : message
});

clear();
}

function clear()
{
var name = document.getElementById("name").innerHTML = "";
var email = document.getElementById("email").innerHTML = "";
var message = document.getElementById("message").innerHTML = "";
}
