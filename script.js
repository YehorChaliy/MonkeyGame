

const banana = document.getElementById("banana");
const monkey = document.getElementById("monkey");

document.addEventListener("keydown", function (event) {
    jump();
});

function jump() {
    if (banana.classList != "jump") {
        banana.classList.add("jump")
    }

    setTimeout(function () {
        banana.classList.remove("jump")
    }, 700)
}

let isAlive = setInterval(function () {

    let bananaTop = parseInt(window.getComputedStyle(banana).getPropertyValue("top"));
    let monkeyLeft = parseInt(window.getComputedStyle(monkey).getPropertyValue("left"));

    if (monkeyLeft < 70 && monkeyLeft > 0 && bananaTop >= 136) {
        alert("GAME OVER!")
    }
}, 100)