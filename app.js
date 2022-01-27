console.log("test");

let moon = document.querySelector("#moon");
let mars = document.querySelector("#mars");
let europa = document.querySelector("#europa");
let titan = document.querySelector("#titan");

let planet = document.querySelector("#planet");
let descript = document.querySelector("#descript");
let distance = document.querySelector("#distkm");
let traveltime = document.querySelector("#travtime");

let limoon = document.querySelector("#limoon");
let limars = document.querySelector("#lititan");
let lieuropa = document.querySelector("#lieuropa");
let lititan = document.querySelector("#lititan");

let imgplanetmoon=document.querySelector(".imageplanetmoon");
let imgplanetmars=document.querySelector(".imageplanetmars");
let imgplaneteuropa=document.querySelector(".imageplaneteuropa");
let imgplanettitan=document.querySelector(".imageplanettitan");



moon.addEventListener('click',() => {
    planet.textContent = "MOON";
    descript.textContent = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    distance.textContent="384,400 KM";
    traveltime.textContent="3 DAYS";
    limoon.classList.add("selected");
    imgplanetmoon.style.display="flex";
    imgplanetmars.style.display="none";
    imgplaneteuropa.style.display="none";
    imgplanettitan.style.display="none";

});

mars.addEventListener('click',() => {
    planet.textContent = "MARS";
    descript.textContent = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    distance.textContent="225 MIL. KM";
    traveltime.textContent="9 MONTHS";
    limars.addClassList="selected";
    imgplanetmoon.style.display="none";
    imgplanetmars.style.display="flex";
    imgplaneteuropa.style.display="none";
    imgplanettitan.style.display="none";

});

europa.addEventListener('click',() => {
    planet.textContent = "EUROPA";
    descript.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    distance.textContent="628 MIL. KM";
    traveltime.textContent="3 YEARS";
    lieuropa.addClassList="selected";
    imgplanetmoon.style.display="none";
    imgplanetmars.style.display="none";
    imgplaneteuropa.style.display="flex";
    imgplanettitan.style.display="none";

});

titan.addEventListener('click',() => {
    planet.textContent = "TITAN";
    descript.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    distance.textContent="1.6 BIL KM";
    traveltime.textContent="7 YEARS";
    lititan.addClassList="selected";
    imgplanetmoon.style.display="none";
    imgplanetmars.style.display="none";
    imgplaneteuropa.style.display="none";
    imgplanettitan.style.display="flex";

});


