var counter = 0;

var count = (function () {
    return function () { return counter += 1; }
})();

function displaycount() {
    document.getElementById('carrier').innerHTML = count();
}

function members() {
    var myBody = document.getElementsByTagName('body');
    myBody[0].innerHTML = "<link rel='stylesheet' type='text/css' href='style.css'/> <font size='5' face='Impact'><center><h1>Members:</h1></center></font>  <p><center> Justin Ge <br> Maxwell Vandershaaf <br> Victor Oshmyan <br> Naman Saluja </center><p> <button class='btn btn1'onclick='homepage()'><left>Back</left></button> <a><script src = 'script.js' type='text/javascript'></script>";
}

function homepage() {
    var home = document.getElementsByTagName('body');
    /*to be changed in final version*/home[0].innerHTML = "<!DOCTYPE html> <html> <head> <meta charset='UTF-8'> <meta name = 'viewport' content='width=device, initial-scale=1.0'> <meta http-equiv='X-UA-Compatible' content = 'ie=edge'> <title>The Amigos</title> <link rel='icon' href='dab.png'> <link rel='stylesheet' type='text/css' href='style.css'/> </head> <body class='homepage'> <div id='container'> <div id='header'> <font size = '25' face = 'Impact'><h1><center>The Amigos</center><h1></font> <div id='subtitle'> <h2><center>A non-profit coding/gaming group</center></h2> </div> </div> <div id='count'> <div id='donate'> <button class = 'btn btn1 don' onclick = 'displaycount()'>Click to donate!</button> </div> <div id='dollar'> <p>$</p> </div> <div id='amount'> <font face = 'Trebuchet MS'><h3>Money Donated:</h3></font> <p id = 'carrier'>0</p> </div> </div> <div id = 'links'> <div id='social_media'> <font color = 'red' size = '3' face = 'Trebuchet MS'><h3>Get in the game! <br> Social Media and <br> Chat Platform Links:</h2></font> <a> <a href='https://discord.gg/2eaTpt8'/> <img src='https://img.icons8.com/color/48/000000/discord-logo.png' align = 'right'/> </a> <a> <a href='https://www.instagram.com/maxdoesscootering/'/> <img src='https://img.icons8.com/cute-clipart/64/000000/instagram-new.png' align = 'right'/> </a> </div> <div id:'sideline'> <div id='member'> <button class = 'btn btn1 mem' onclick = 'members()'>Members</button> </div> <div id='fun_stuff'> <button class = 'btn btn1 fun' onclick='funny()'>Fun Games</button> </div> <div> <button class = 'btn btn1 cc'>Classroom Chatterbox</button> </div> </div> </div> <div id = 'story'> <font size = '4' face = 'Trebuchet MS' color = 'orange'><h2>The Story</h2></font> <font color = 'green' size = '3'><p>This group of young, humble, and inspired people are <br>determined to make coding and gaming for everyone! <br>The organization is based in Longmont, Colorado, USA. <br>The group is constantly expanding! Code and game on! </p></font> </div> </div> </body> <a> <script src = 'script.js' type='text/javascript'></script> </a> </html>";
}

function funny() {
    var funny = document.getElementsByTagName("body");
    funny[0].innerHTML = "<button onclick='start_game()'>Start the Game!</button> <a><script src = 'game.js' type='text/javascript'></script></a>";
}

function chat() {
    var bodyy = document.getElementsByTagName('body');
    bodyy[0].innerHTML = "<form><label>Enter message: </label><input type='text' size = 50 maxlength=1000></input><input type='submit'></input><hr><textarea name='message' rows='30' cols='100' disabled>Welcome to the chatroom!</textarea></form>"


}