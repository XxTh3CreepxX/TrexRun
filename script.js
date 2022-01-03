const avatar = document.getElementById("avatar");
const palazzo = document.getElementById("palazzo")

function jump() {
    if (avatar.classList != "jump"){
    avatar.classList.add("jump");

    setTimeout(function () {
        avatar.classList.remove("jump");
        
    }, 300);
} 
}

let isAlive = setInterval(function () {
    // get current avatar Y position
    let avatarTop = parseInt(window.getComputedStyle(avatar).getPropertyValue("top"));
      
    
    //get curent palazzo X position
    let palazzoLeft = parseInt(
          window.getComputedStyle(palazzo).getPropertyValue("left")
      );
      
        




// detect collision
if (palazzoLeft <50 && palazzoLeft > 0 && avatarTop >= 140) {
    //collision
alert ("Hai Perso!")
}

}, 10);


document.addEventListener("keydown", function (event) {
    jump();
});

