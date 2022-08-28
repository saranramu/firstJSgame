const dino = document.querySelector("#dino");
const plant = document.querySelector("#plant");
jump = () => {
    if(dispatchEvent.classList != "jump"){
        dino.classList.add("jump");
        setTimeout(function(){
            dino.classList.remove("jump");
        },300)
    }
}
let checkAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let plantLeft = parseInt(window.getComputedStyle(plant).getPropertyValue("left"));
    if (plantLeft > 0 && plantLeft < 70 && dinoTop >= 143) {
        dino.style.animationPlayState = 'paused';
        plant.style.animationPlayState = 'paused';
        alert("Game Over! VARTA MAME DURRRRR :(")
        window.location.reload();
    }
},10);
document.addEventListener("keydown",function(event){
    jump();
})