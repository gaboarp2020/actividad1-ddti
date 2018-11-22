console.log("Hola Mundo");

const Lightsaber = document.querySelectorAll(".Lightsaber img");
const LightsaberSound = new Audio('../file/LightsaberTurnOn-Sound3.wav');

for (let i=0; i<Lightsaber.length;i++) {
    
    Lightsaber[i].addEventListener("click", function() {
        Lightsaber[i].style.display = "none";
        Lightsaber[i].nextElementSibling.style.display = "block";
        LightsaberSound.play();
    })
}

Lightsaber[2].addEventListener("click", function() {
    this.style.display = "none";
    Lightsaber[0].style.display = "block";
})