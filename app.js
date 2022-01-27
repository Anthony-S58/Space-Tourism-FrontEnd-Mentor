console.log("test");

let moon = document.querySelector("#moon");
let mars = document.querySelector("#mars");
let europa = document.querySelector("#europa");
let titan = document.querySelector("#titan");

let planet = document.querySelector("#planet");


moon.addEventListener('click',() => {
    planet.textContent = "MOON";
});

mars.addEventListener('click',() => {
    planet.textContent = "MARS";
});

europa.addEventListener('click',() => {
    planet.textContent = "EUROPA";
});

titan.addEventListener('click',() => {
    planet.textContent = "TITAN";
});


