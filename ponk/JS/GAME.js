const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const manImg = new Image();
manImg.src = "icon/manImg.png";

const ground = new Image();
ground.src = "icon/ground.png";

let: box = 64 //1 блок
let: gran= 30 //От конца до поля
let: man = { // чувак
  x: 4 * box + gran,
  y: 4 * box + gran
}


let: rwalk = "walk"
let: uwalk = "walk"
let: lwalk = "walk"
let: dwalk = "walk"

document.addEventListener("keydown", direction);


function direction(event) { //Кнопки
	if(event.keyCode == 37 && lwalk != "none")
		man.x = man.x - box
	else if(event.keyCode == 38 && uwalk != "none")
man.y = man.y - box
	else if(event.keyCode == 39 && rwalk != "none")
man.x = man.x + box
	else if(event.keyCode == 40 && dwalk != "none" )
man.y = man.y + box

}

function draw() {


  ctx.drawImage(ground, 0, 0)

  ctx.drawImage(manImg, man.x, man.y, box, box);

ctx.fillText(man.x, box, box)
ctx.fillText(lwalk, box, box + 20)
}

/*Стены*/

let: sten1 = {
  x:  3 * box + gran,
  y: 4 * box + gran
}

let: sten2 = {
  x:  2 * box + gran,
  y: 5 * box + gran
}

let: sten3 = {
  x: 2* box + gran,
  y: 3 * box + gran
}

let: sten4 = {
  x: 7* box + gran,
  y: 6 * box + gran
}

function sten() {

if(sten1.x + box== man.x && man.y == sten1.y){ lwalk = "none"}
if(man.x == sten1.x + box * 2 && man.y == sten1.y ||
   man.x == sten1.x + box && man.y == sten1.y - box ||
 man.x == sten1.x + box  && man.y == sten1.y + box||
 man.x == sten1.x + box*2 && man.y == sten1.y - box ||
man.x == sten1.x + box*2  && man.y == sten1.y + box
){lwalk = "walk"}

if(sten1.x == man.x && man.y == sten1.y + box){uwalk = "none"}
if(man.x == sten1.x + box && man.y == sten1.y + box ||
   man.x == sten1.x && man.y == sten1.y +box * 2 ||
 man.x == sten1.x + box && man.y == sten1.y + box *2
){uwalk = "walk"}

if(sten1.x == man.x && man.y == sten1.y - box){dwalk = "none", lwalk = "none"}
if(man.x == sten1.x + box && man.y == sten1.y - box ||
   man.x == sten1.x && man.y == sten1.y -box * 2 ||
 man.x == sten1.x + box && man.y == sten1.y - box *2
){dwalk = "walk", lwalk = "walk"}

if( sten2.x == man.x && man.y == sten2.y + box){ uwalk = "none"}
if(man.x == sten2.x + box && man.y == sten2.y + box ||
   man.x == sten2.x && man.y == sten2.y + box * 2 ||
   man.x == sten2.x - box  && man.y == sten2.y + box||
   man.x == sten2.x - box && man.y == sten2.y + box *2 ||
   man.x == sten2.x + box  && man.y == sten2.y + box * 2
){uwalk = "walk"}

if(sten2.x+box == man.x  && man.y == sten2.y){lwalk = "none"}
if(man.x == sten2.x + box && man.y == sten2.y +box
){lwalk = "walk"}

if(sten2.x-box == man.x && man.y == sten2.y){lwalk = "none", rwalk="none"}
if(man.x == sten2.x - box &&  man.y == sten2.y + box){rwalk = "walk"}
if( sten2.x == man.x && man.y == sten2.y + box ||
    man.x == sten2.x && man.y == sten2.y + box * 2
){lwalk = "walk"}

if(man.x - box - gran == 0){lwalk = "none"}
if(man.y + box + gran > 540){dwalk = "none"}
if(man.y == sten2.y +box){dwalk = "walk"}

if(man.x == sten3.x && man.y == sten3.y - box){uwalk = "none",dwalk = "none"}
if(man.x==sten3.x + box &&man.y==sten3.y - box){uwalk = "walk",dwalk = "walk"}
if(man.x == sten3.x && man.y == sten3.y - box){lwalk ="walk"}


if(man.x == sten4.x - box && man.y ==sten4.y||man.x == sten4.x - box && man.y ==sten4.y){rwalk = "none", uwalk = "none"}
if(man.x == sten4.x - box * 2 && man.y ==sten4.y||man.x == sten4.x - box *2  && man.y ==sten4.y || man.x == sten4.x - box * 2  && man.y ==sten4.y + box){rwalk = "walk", uwalk = "walk"}
if(man.x == sten4.x - box && man.y ==sten4.y + box){uwalk = "walk"}


if (man.x + box >350 && man.y < 414 ){rwalk = "none"}
if (man.x  == sten1.x + box){rwalk = "walk"}

if(man.x==sten2.x - box && man.y==sten2.y-box){uwalk = "none"}
if(man.x==sten2.x - box && man.y==sten2.y){uwalk = "walk"}

if(man.y== sten1.y - box*3){uwalk = "none"}
if(man.y== sten1.y - box*2 && man.x >= sten1.x){uwalk = "walk"}

}

let game = setInterval(draw, 100)
let stena = setInterval(sten, 10)
