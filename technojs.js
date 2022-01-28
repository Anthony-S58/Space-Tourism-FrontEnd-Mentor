console.log('test');

let bulle1 = document.querySelector(".bulle1");
let bulle2 = document.querySelector(".bulle2");
let bulle3 = document.querySelector(".bulle3");

let launch = document.querySelector(".launch");
let spaceport = document.querySelector(".spaceport");
let capsule = document.querySelector(".capsule");

let tools = document.querySelector("#tools");
let toolsdescript = document.querySelector("#toolsdescript");

bulle1.addEventListener('click', () => {
    tools.textContent = "LAUNCH VEHICLE";
    toolsdescript.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    bulle1.style.backgroundColor="#FFFFFF";
    bulle1.style.color="black";
    bulle2.style.backgroundColor="transparent";
    bulle2.style.color="#FFFFFF";
    bulle3.style.backgroundColor="transparent";
    bulle3.style.color="#FFFFFF";
    launch.style.display="flex";
    spaceport.style.display="none";
    capsule.style.display="none";
    });
    
    bulle2.addEventListener('click', () => {
    tools.textContent = "SPACEPORT";
    toolsdescript.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    bulle1.style.backgroundColor="transparent";
    bulle1.style.color="#FFFFFF";
    bulle2.style.backgroundColor="#FFFFFF";
    bulle2.style.color="black";
    bulle3.style.backgroundColor="transparent";
    bulle3.style.color="#FFFFFF";
    launch.style.display="none";
    spaceport.style.display="flex";
    capsule.style.display="none";
    });
    
    bulle3.addEventListener('click', () => {
    tools.textContent = "SPACE CAPSULE";
    toolsdescript.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    bulle1.style.backgroundColor="transparent";
    bulle1.style.color="#FFFFFF";
    bulle2.style.backgroundColor="transparent";
    bulle2.style.color="#FFFFFF";
    bulle3.style.backgroundColor="#FFFFFF";
    bulle3.style.color="black";
    launch.style.display="none";
    spaceport.style.display="none";
    capsule.style.display="flex";
    });
    