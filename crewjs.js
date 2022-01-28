console.log("hello");

let bulle1 = document.querySelector(".bulle1");
let bulle2 = document.querySelector(".bulle2");
let bulle3 = document.querySelector(".bulle3");
let bulle4 = document.querySelector(".bulle4");

let doug = document.querySelector(".doug");
let mark = document.querySelector(".mark");
let victor = document.querySelector(".victor");
let anousheh = document.querySelector(".anousheh");

let titre = document.querySelector("#titre");
let name = document.querySelector("#name");
let biography = document.querySelector("#biography");

bulle1.addEventListener('click', () => {
titre.textContent = "COMMANDER";
name.textContent = "DOUGLAS HURLEY";
biography.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
bulle1.style.backgroundColor="#FFFFFF";
bulle2.style.backgroundColor="rgb(66, 66, 66)";
bulle3.style.backgroundColor="rgb(66, 66, 66)";
bulle4.style.backgroundColor="rgb(66, 66, 66)";
doug.style.display="flex";
mark.style.display="none";
victor.style.display="none";
anousheh.style.display="none";
});

bulle2.addEventListener('click', () => {
titre.textContent = "MISSION SPECIALIST";
name.textContent = "MARK SHUTTLEWORTH";
biography.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
bulle1.style.backgroundColor="rgb(66, 66, 66)";
bulle2.style.backgroundColor="#FFFFFF";
bulle3.style.backgroundColor="rgb(66, 66, 66)";
bulle4.style.backgroundColor="rgb(66, 66, 66)";
doug.style.display="none";
mark.style.display="flex";
victor.style.display="none";
anousheh.style.display="none";
});

bulle3.addEventListener('click', () => {
titre.textContent = "PILOT";
name.textContent = "VICTOR GLOVER";
biography.textContent = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
bulle1.style.backgroundColor="rgb(66, 66, 66)";
bulle2.style.backgroundColor="rgb(66, 66, 66)";
bulle3.style.backgroundColor="#FFFFFF";
bulle4.style.backgroundColor="rgb(66, 66, 66)";
doug.style.display="none";
mark.style.display="none";
victor.style.display="flex";
anousheh.style.display="none";
});

bulle4.addEventListener('click', () => {
titre.textContent = "FLIGHT ENGINEER";
name.textContent = "ANOUSHEH ANSARI";
biography.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
bulle1.style.backgroundColor="rgb(66, 66, 66)";
bulle2.style.backgroundColor="rgb(66, 66, 66)";
bulle3.style.backgroundColor="rgb(66, 66, 66)";
bulle4.style.backgroundColor="#FFFFFF";
doug.style.display="none";
mark.style.display="none";
victor.style.display="none";
anousheh.style.display="flex";
});