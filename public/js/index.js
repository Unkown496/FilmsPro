var cloak = document.querySelector("#cloak");
var user = document.querySelector("#user");

window.onload = function() {
    var i = 0;
    var p = document.createElement("p");
    user.innerText = "Активных пользователей на странице: " + ++i;
}

setInterval(() => {
    var date = new Date();
    cloak.innerText = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    
}, 1000);
console.log("test");