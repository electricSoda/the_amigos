var counter = 0;

var count = (function () {
    return function () { return counter += 1; }
})();

function displaycount() {
    document.getElementById("carrier").innerHTML = count();
}

function members() {
    var myBody = document.getElementsByTagName("body");
    myBody[0].innerHTML = "<p> Hi </p>";
}