const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const manImg = new Image();
manImg.src = "icon/manImg.png";
const ground = new Image();
ground.src = "icon/ground.png";

var audio = new Audio();
audio.preload = 'auto';
audio.src = "icon/aid.mp3";


const win = new Image();
win.src = "icon/wine.png";

const rqdImg = new Image();
rqdImg.src = "icon/radImg.png";
const radImg = new Image();
radImg.src = "icon/radImg.png";
const rwdImg = new Image();
rwdImg.src = "icon/radImg.png";
const redImg = new Image();
redImg.src = "icon/radImg.png";
const rrdImg = new Image();
rrdImg.src = "icon/radImg.png";
const rtdImg = new Image();
rtdImg.src = "icon/radImg.png";
const rydImg = new Image();
rydImg.src = "icon/radImg.png";



let: box = 64 //1 блок
let: gran= 30 //От конца до поля
let: man = { // чувак
  x: 2 * box + gran,
  y: 2 * box + gran
}


let: rad = { // ящик
  x: 3 * box + gran + 2,
  y: 2 * box + gran + 2
}
let: rqd = { // ящик
  x: 4 * box + gran + 2,
  y: 3 * box + gran + 2
}
let: rwd = { // ящик
  x: 4 * box + gran + 2,
  y: 4 * box + gran + 2
}
let: red = { // ящик
  x: 4 * box + gran + 2,
  y: 6 * box + gran + 2
}
let: rrd = { // ящик
  x: 5 * box + gran + 2,
  y: 6 * box + gran + 2
}
let: rtd = { // ящик
  x: 3 * box + gran + 2,
  y: 6 * box + gran + 2
}
let: ryd = { // ящик
  x: 1 * box + gran + 2,
  y: 6 * box + gran + 2
}


//места куда ставить ящики
let: radS ={
  x: box+gran,
  y: gran + box*2
}
let: rqdS ={
  x: 5*box+gran,
  y: gran + box*3
}
let: rwdS ={
  x: 4*box+gran,
  y: gran + box*5
}
let: redS ={
  x: 4*box+gran,
  y: gran + box*7
}
let: rrdS ={
  x: 6*box+gran,
  y: gran + box*6
}
let: rtdS ={
  x:3 * box + gran,
  y: 6 * box + gran
}
let: rydS ={
  x: box+gran,
  y: gran + box*4
}
//начальные диры
let: yrwalk = "walk"
let: yuwalk = "walk"
let: ylwalk = "walk"
let: ydwalk = "walk"
let: trwalk = "walk"
let: tuwalk = "walk"
let: tlwalk = "walk"
let: tdwalk = "walk"
let: frwalk = "walk"
let: fuwalk = "walk"
let: flwalk = "walk"
let: fdwalk = "walk"
let: erwalk = "walk"
let: euwalk = "walk"
let: elwalk = "walk"
let: edwalk = "walk"
let: wrwalk = "walk"
let: wuwalk = "walk"
let: wlwalk = "walk"
let: wdwalk = "walk"
let: qrwalk = "walk"
let: quwalk = "walk"
let: qlwalk = "walk"
let: qdwalk = "walk"
let: mrwalk = "walk"
let: muwalk = "walk"
let: mlwalk = "walk"
let: mdwalk = "walk"
let: rrwalk = "walk"
let: ruwalk = "walk"
let: rlwalk = "walk"
let: rdwalk = "walk"
let: rwalk = "walk"
let: uwalk = "walk"
let: lwalk = "walk"
let: dwalk = "walk"

let: dir1 = "0"
let: dir2 = "0"
let: dir3 = "0"
let: dir4 = "0"
let: dir5 = "0"
let: dir6 = "0"
let: dir7 = "0"
let: dirw = "0"

//кнопки
document.addEventListener("keydown", direction);
document.addEventListener("keydown", radMov);
document.addEventListener("keydown", rqdMov);
document.addEventListener("keydown", rwdMov);
document.addEventListener("keydown", redMov);
document.addEventListener("keydown", rqdMov);
document.addEventListener("keydown", rrdMov);
document.addEventListener("keydown", rtdMov);
document.addEventListener("keydown", rydMov);


//ящики
function rtdMov(event) {
  if(event.keyCode == 37 && tlwalk != "none" && man.x +2 == rtd.x && man.y+2==rtd.y )
rtd.x = rtd.x - box
else if(event.keyCode == 38 && tuwalk != "none"&& man.y+2 ==rtd.y&& man.x+2== rtd.x)
rtd.y = rtd.y - box
else if(event.keyCode == 39 && trwalk != "none"&& man.x+2 == rtd.x && man.y+2==rtd.y)
rtd.x = rtd.x + box
else if(event.keyCode == 40 && tdwalk != "none" && man.y+2 ==rtd.y && man.x+2 == rtd.x )
rtd.y = rtd.y + box}
function rydMov(event) {
  if(event.keyCode == 37 && ylwalk != "none" && man.x +2 == ryd.x && man.y+2==ryd.y )
ryd.x = ryd.x - box
else if(event.keyCode == 38 && yuwalk != "none"&& man.y+2 ==ryd.y&& man.x+2== ryd.x)
ryd.y = ryd.y - box
else if(event.keyCode == 39 && yrwalk != "none"&& man.x+2 == ryd.x && man.y+2==ryd.y)
ryd.x = ryd.x + box
else if(event.keyCode == 40 && ydwalk != "none" && man.y+2 ==ryd.y && man.x+2 == ryd.x )
ryd.y = ryd.y + box}
  function rrdMov(event) {
    if(event.keyCode == 37 && flwalk != "none" && man.x +2 == rrd.x && man.y+2==rrd.y )
  rrd.x = rrd.x - box
  else if(event.keyCode == 38 && fuwalk != "none"&& man.y+2 ==rrd.y&& man.x+2== rrd.x)
  rrd.y = rrd.y - box
  else if(event.keyCode == 39 && frwalk != "none"&& man.x+2 == rrd.x && man.y+2==rrd.y)
  rrd.x = rrd.x + box
  else if(event.keyCode == 40 && fdwalk != "none" && man.y+2 ==rrd.y && man.x+2 == rrd.x )
  rrd.y = rrd.y + box
}
function redMov(event) {
  if(event.keyCode == 37 && elwalk != "none" && man.x +2 == red.x && man.y+2==red.y )
red.x = red.x - box
else if(event.keyCode == 38 && euwalk != "none"&& man.y+2 ==red.y&& man.x+2== red.x)
red.y = red.y - box
else if(event.keyCode == 39 && erwalk != "none"&& man.x+2 == red.x && man.y+2==red.y)
red.x = red.x + box
else if(event.keyCode == 40 && edwalk != "none" && man.y+2 ==red.y && man.x+2 == red.x )
red.y = red.y + box
}
function rqdMov(event) {
  if(event.keyCode == 37 && qlwalk != "none" && man.x +2 == rqd.x && man.y+2==rqd.y )
rqd.x = rqd.x - box
else if(event.keyCode == 38 && quwalk != "none"&& man.y+2 ==rqd.y&& man.x+2== rqd.x)
rqd.y = rqd.y - box
else if(event.keyCode == 39 && qrwalk != "none"&& man.x+2 == rqd.x && man.y+2==rqd.y)
rqd.x = rqd.x + box
else if(event.keyCode == 40 && qdwalk != "none" && man.y+2 ==rqd.y && man.x+2 == rqd.x )
rqd.y = rqd.y + box
}
function rwdMov(event) {
  if(event.keyCode == 37 && wlwalk != "none" && man.x +2 ==  rwd.x && man.y+2== rwd.y )
rwd.x =  rwd.x - box
else if(event.keyCode == 38 && wuwalk != "none"&& man.y+2 == rwd.y&& man.x+2==  rwd.x)
rwd.y =  rwd.y - box
else if(event.keyCode == 39 && wrwalk != "none"&& man.x+2 ==  rwd.x && man.y+2== rwd.y)
rwd.x =  rwd.x + box
else if(event.keyCode == 40 && wdwalk != "none" && man.y+2 == rwd.y && man.x+2 ==  rwd.x )
rwd.y =  rwd.y + box
}
function radMov(event) {
      if(event.keyCode == 37 && rlwalk != "none" && man.x +2 == rad.x && man.y+2==rad.y )
    rad.x = rad.x - box
  else if(event.keyCode == 38 && ruwalk != "none"&& man.y+2 ==rad.y&& man.x+2== rad.x)
rad.y = rad.y - box
  else if(event.keyCode == 39 && rrwalk != "none"&& man.x+2 == rad.x && man.y+2==rad.y)
rad.x = rad.x + box
  else if(event.keyCode == 40 && rdwalk != "none" && man.y+2 ==rad.y && man.x+2 == rad.x )
rad.y = rad.y + box
}



function direction(event) { //чувак
	if(event.keyCode == 37 && lwalk != "none" && mlwalk != "none")
		man.x = man.x - box
	else if(event.keyCode == 38 && uwalk != "none" && muwalk != "none")
man.y = man.y - box
	else if(event.keyCode == 39 && rwalk != "none" && mrwalk !="none")
man.x = man.x + box
	else if(event.keyCode == 40 && dwalk != "none" && mdwalk != "none")
man.y = man.y + box

if(event.keyCode == 100 ){dirw = "1"}
}



function draw() {


  ctx.drawImage(ground, 0, 0)

  ctx.drawImage(manImg, man.x, man.y, box, box);

    ctx.drawImage(radImg, rad.x, rad.y, box, box);
    ctx.drawImage(rqdImg, rqd.x, rqd.y, box, box);
    ctx.drawImage(rwdImg, rwd.x, rwd.y, box, box);
    ctx.drawImage(redImg, red.x, red.y, box, box);
    ctx.drawImage(rrdImg, rrd.x, rrd.y, box, box);
    ctx.drawImage(rtdImg, rtd.x, rtd.y, box, box);
    ctx.drawImage(rydImg, ryd.x, ryd.y, box, box);

ctx.fillText(man.x, box, box)
ctx.fillText(rrwalk, box, box + 20)

if (rad.x == radS.x +2&& rad.y-2 == radS.y){radImg.src = "icon/radSImg.png"; dir1 = "1"}
if (rad.x != radS.x+2 || rad.y-2 != radS.y){radImg.src = "icon/radImg.png";dir1 = "0"}

if (rqd.x == rqdS.x +2&& rqd.y-2 == rqdS.y){rqdImg.src = "icon/radSImg.png";dir2 = "1"}
if (rqd.x != rqdS.x+2 || rqd.y-2 != rqdS.y){rqdImg.src = "icon/radImg.png";dir2 = "0"}

if (rwd.x == rwdS.x +2&& rwd.y-2 == rwdS.y){rwdImg.src = "icon/radSImg.png";dir3 = "1"}
if (rwd.x != rwdS.x+2 || rwd.y-2 != rwdS.y){rwdImg.src = "icon/radImg.png";dir3 = "0"}

if (red.x == redS.x +2&& red.y-2 == redS.y){redImg.src = "icon/radSImg.png";dir4 = "1"}
if (red.x != redS.x+2 || red.y-2 != redS.y){redImg.src = "icon/radImg.png";dir4 = "0"}

if (rrd.x == rrdS.x +2&& rrd.y-2 == rrdS.y){rrdImg.src = "icon/radSImg.png";dir5 = "1"}
if (rrd.x != rrdS.x+2 || rrd.y-2 != rrdS.y){rrdImg.src = "icon/radImg.png";dir5 = "0"}

if (rtd.x == rtdS.x +2&& rtd.y-2 == rtdS.y){rtdImg.src = "icon/radSImg.png";dir6 = "1"}
if (rtd.x != rtdS.x+2 || rtd.y-2 != rtdS.y){rtdImg.src = "icon/radImg.png";dir6 = "0"}

if (ryd.x == rydS.x +2&& ryd.y-2 == rydS.y){rydImg.src = "icon/radSImg.png";dir7 = "1"}
if (ryd.x != rydS.x+2 || ryd.y-2 != rydS.y){rydImg.src = "icon/radImg.png";dir7 = "0"}

if (dir1 == "1"&&dir2 == "1"&&dir3 == "1"&&dir4 == "1"&&dir5 == "1"&&dir6 == "1"&&dir7 == "1"){dirw="1"}
if(dirw =="1"){

      ctx.drawImage(win, 0, 0)
      audio.play();
}


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

let: sten5 = {
  x: 2*box + gran,
  y: box + gran
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


if(man.x == sten4.x - box && man.y ==sten4.y||man.x == sten4.x - box && man.y ==sten4.y + box){rwalk = "none", uwalk = "none"}
if(man.x == sten4.x - box * 2 && man.y ==sten4.y||man.x == sten4.x - box *2  && man.y ==sten4.y || man.x == sten4.x - box * 2  && man.y ==sten4.y + box){rwalk = "walk", uwalk = "walk"}
if(man.x == sten4.x - box && man.y ==sten4.y + box){uwalk = "walk"}


if (man.x + box >350 && man.y < 414 ){rwalk = "none"}
if (man.x  == sten1.x + box){rwalk = "walk"}

if(man.x==sten2.x - box && man.y==sten2.y-box){uwalk = "none"}
if(man.x==sten2.x - box && man.y==sten2.y){uwalk = "walk"}

if(man.y== sten1.y - box*3){uwalk = "none"}
if(man.y== sten1.y - box*2 && man.x >= sten1.x){uwalk = "walk"}

if (man.y==sten5.y&& man.x==sten5.x + box){lwalk = "none"}
if(man.y==sten5.y +box&& man.x==sten5.x + box||man.y==sten5.y + box&& man.x==sten5.x + box *2 ||man.y==sten5.y&& man.x==sten5.x + box*2){lwalk ="walk"}

if(man.y==rad.y- 2 - box && man.x==rad.x -2 &&rdwalk == "none"){mdwalk="none"}
if(man.y==rad.y- 2 + box && man.x==rad.x -2&& ruwalk == "none"){muwalk="none"}
if(man.y==rad.y- 2 && man.x==rad.x -2- box && rrwalk == "none"){mrwalk="none"}
if(man.y==rad.y- 2 && man.x==rad.x -2+ box && rlwalk == "none"){mlwalk="none"}

if(man.y==rad.y- 2 - box * 2 && man.x==rad.x -2){mdwalk="walk"}
if(man.y==rad.y- 2 + box * 2&& man.x==rad.x -2){muwalk="walk"}
if(man.y==rad.y- 2 && man.x==rad.x -2- box* 2){mrwalk="walk"}
if(man.y==rad.y- 2 && man.x==rad.x -2+ box* 2){mlwalk="walk"}
if(man.y==rad.y- 2 - box && man.x==rad.x -2- box){mdwalk="walk",mrwalk="walk" }
if(man.y==rad.y- 2 + box && man.x==rad.x -2+ box){muwalk="walk", mlwalk="walk"}
if(man.y==rad.y- 2 - box && man.x==rad.x -2+ box){mdwalk="walk",mrwalk="walk" }
if(man.y==rad.y- 2 +box && man.x==rad.x -2- box){muwalk="walk",mrwalk="walk"}





if(sten1.x + box== rad.x - 2 && rad.y- 2 == sten1.y){ rlwalk = "none"}
if(rad.x - 2 == sten1.x + box * 2 && rad.y- 2 == sten1.y ||
   rad.x - 2 == sten1.x + box && rad.y- 2 == sten1.y - box ||
 rad.x - 2 == sten1.x + box  && rad.y- 2 == sten1.y + box||
 rad.x - 2 == sten1.x + box*2 && rad.y- 2 == sten1.y - box ||
rad.x - 2 == sten1.x + box*2  && rad.y- 2 == sten1.y + box
){rlwalk = "walk"}

if(sten1.x == rad.x - 2 && rad.y- 2 == sten1.y + box){ruwalk = "none"}
if(rad.x - 2 == sten1.x + box && rad.y- 2 == sten1.y + box ||
   rad.x - 2 == sten1.x && rad.y- 2 == sten1.y +box * 2 ||
 rad.x - 2 == sten1.x + box && rad.y- 2 == sten1.y + box *2
){ruwalk = "walk"}

if(sten1.x == rad.x - 2 && rad.y- 2 == sten1.y - box){rdwalk = "none", rlwalk = "none"}
if(rad.x - 2 == sten1.x + box && rad.y- 2 == sten1.y - box ||
   rad.x - 2 == sten1.x && rad.y- 2 == sten1.y -box * 2 ||
 rad.x - 2 == sten1.x + box && rad.y- 2 == sten1.y - box *2
){rdwalk = "walk", rlwalk = "walk"}

if( sten2.x == rad.x - 2 && rad.y- 2 == sten2.y + box){ ruwalk = "none"}
if(rad.x - 2 == sten2.x + box && rad.y- 2 == sten2.y + box ||
   rad.x - 2 == sten2.x && rad.y- 2 == sten2.y + box * 2 ||
   rad.x - 2 == sten2.x - box  && rad.y- 2 == sten2.y + box||
   rad.x - 2 == sten2.x - box && rad.y- 2 == sten2.y + box *2 ||
   rad.x - 2 == sten2.x + box  && rad.y- 2 == sten2.y + box * 2
){ruwalk = "walk"}

if(sten2.x+box == rad.x - 2  && rad.y- 2 == sten2.y){rlwalk = "none"}
if(rad.x - 2 == sten2.x + box && rad.y- 2 == sten2.y +box
){rlwalk = "walk"}

if(sten2.x-box == rad.x - 2 && rad.y- 2 == sten2.y){rlwalk = "none", rrwalk="none"}
if(rad.x - 2 == sten2.x - box &&  rad.y- 2 == sten2.y + box){rrwalk = "walk"}
if( sten2.x == rad.x - 2 && rad.y- 2 == sten2.y + box ||
    rad.x - 2 == sten2.x && rad.y- 2 == sten2.y + box * 2
){rlwalk = "walk"}

if(rad.x - 2 - box - gran == 0){rlwalk = "none"}
if(rad.y- 2 + box + gran > 540){rdwalk = "none"}
if(rad.y- 2 == sten2.y +box){rdwalk = "walk"}

if(rad.x - 2 == sten3.x && rad.y- 2 == sten3.y - box){ruwalk = "none",rdwalk = "none"}
if(rad.x - 2==sten3.x + box &&rad.y- 2==sten3.y - box){ruwalk = "walk",rdwalk = "walk"}
if(rad.x - 2 == sten3.x && rad.y- 2 == sten3.y - box){rlwalk ="walk"}


if(rad.x - 2 == sten4.x - box && rad.y- 2 ==sten4.y||rad.x - 2 == sten4.x - box && rad.y- 2 ==sten4.y + box){rrwalk = "none", ruwalk = "none"}
if(rad.x - 2 == sten4.x - box * 2 && rad.y- 2 ==sten4.y||rad.x - 2 == sten4.x - box *2  && rad.y- 2 ==sten4.y || rad.x - 2 == sten4.x - box * 2  && rad.y- 2 ==sten4.y + box){rrwalk = "walk", ruwalk = "walk"}
if(rad.x - 2 == sten4.x - box && rad.y- 2 ==sten4.y + box){ruwalk = "walk"}


if (rad.x - 2 + box >350 && rad.y- 2 < 414 ){rrwalk = "none"}
if (rad.x - 2  == sten1.x + box){rrwalk = "walk"}

if(rad.x - 2==sten2.x - box && rad.y- 2==sten2.y-box){ruwalk = "none"}
if(rad.x - 2==sten2.x - box && rad.y- 2==sten2.y){ruwalk = "walk"}

if(rad.y- 2== sten1.y - box*3){ruwalk = "none"}
if(rad.y- 2== sten1.y - box*2 && rad.x - 2 >= sten1.x){ruwalk = "walk"}

if (rad.y- 2==sten5.y&& rad.x - 2==sten5.x + box){rlwalk = "none"}
if(rad.y- 2==sten5.y +box&& rad.x - 2==sten5.x + box||rad.y- 2==sten5.y + box&& rad.x - 2==sten5.x + box *2 ||rad.y- 2==sten5.y&& rad.x - 2==sten5.x + box*2){rlwalk ="walk"}









if(man.y==rqd.y- 2 - box && man.x==rqd.x -2 &&qdwalk == "none"){mdwalk="none"}
if(man.y==rqd.y- 2 + box && man.x==rqd.x -2&& quwalk == "none"){muwalk="none"}
if(man.y==rqd.y- 2 && man.x==rqd.x -2- box && qrwalk == "none"){mrwalk="none"}
if(man.y==rqd.y- 2 && man.x==rqd.x -2+ box && qlwalk == "none"){mlwalk="none"}

if(man.y==rqd.y- 2 - box * 2 && man.x==rqd.x -2){mdwalk="walk"}
if(man.y==rqd.y- 2 + box * 2&& man.x==rqd.x -2){muwalk="walk"}
if(man.y==rqd.y- 2 && man.x==rqd.x -2- box* 2){mrwalk="walk"}
if(man.y==rqd.y- 2 && man.x==rqd.x -2+ box* 2){mlwalk="walk"}
if(man.y==rqd.y- 2 - box && man.x==rqd.x -2- box){mdwalk="walk",mrwalk="walk" }
if(man.y==rqd.y- 2 + box && man.x==rqd.x -2+ box){muwalk="walk", mlwalk="walk"}
if(man.y==rqd.y- 2 - box && man.x==rqd.x -2+ box){mdwalk="walk",mlwalk="walk" }
if(man.y==rqd.y- 2 +box && man.x==rqd.x -2- box){muwalk="walk",mrwalk="walk"}





if(sten1.x + box== rqd.x - 2 && rqd.y- 2 == sten1.y){ qlwalk = "none"}
if(rqd.x - 2 == sten1.x + box * 2 && rqd.y- 2 == sten1.y ||
   rqd.x - 2 == sten1.x + box && rqd.y- 2 == sten1.y - box ||
 rqd.x - 2 == sten1.x + box  && rqd.y- 2 == sten1.y + box||
 rqd.x - 2 == sten1.x + box*2 && rqd.y- 2 == sten1.y - box ||
rqd.x - 2 == sten1.x + box*2  && rqd.y- 2 == sten1.y + box
){qlwalk = "walk"}

if(sten1.x == rqd.x - 2 && rqd.y- 2 == sten1.y + box){quwalk = "none"}
if(rqd.x - 2 == sten1.x + box && rqd.y- 2 == sten1.y + box ||
   rqd.x - 2 == sten1.x && rqd.y- 2 == sten1.y +box * 2 ||
 rqd.x - 2 == sten1.x + box && rqd.y- 2 == sten1.y + box *2
){quwalk = "walk"}

if(sten1.x == rqd.x - 2 && rqd.y- 2 == sten1.y - box){qdwalk = "none", qlwalk = "none"}
if(rqd.x - 2 == sten1.x + box && rqd.y- 2 == sten1.y - box ||
   rqd.x - 2 == sten1.x && rqd.y- 2 == sten1.y -box * 2 ||
 rqd.x - 2 == sten1.x + box && rqd.y- 2 == sten1.y - box *2
){qdwalk = "walk", qlwalk = "walk"}

if( sten2.x == rqd.x - 2 && rqd.y- 2 == sten2.y + box){ quwalk = "none"}
if(rqd.x - 2 == sten2.x + box && rqd.y- 2 == sten2.y + box ||
   rqd.x - 2 == sten2.x && rqd.y- 2 == sten2.y + box * 2 ||
   rqd.x - 2 == sten2.x - box  && rqd.y- 2 == sten2.y + box||
   rqd.x - 2 == sten2.x - box && rqd.y- 2 == sten2.y + box *2 ||
   rqd.x - 2 == sten2.x + box  && rqd.y- 2 == sten2.y + box * 2
){quwalk = "walk"}

if(sten2.x+box == rqd.x - 2  && rqd.y- 2 == sten2.y){qlwalk = "none"}
if(rqd.x - 2 == sten2.x + box && rqd.y- 2 == sten2.y +box
){qlwalk = "walk"}

if(sten2.x-box == rqd.x - 2 && rqd.y- 2 == sten2.y){qlwalk = "none", qrwalk="none"}
if(rqd.x - 2 == sten2.x - box &&  rqd.y- 2 == sten2.y + box){qrwalk = "walk"}
if( sten2.x == rqd.x - 2 && rqd.y- 2 == sten2.y + box ||
    rqd.x - 2 == sten2.x && rqd.y- 2 == sten2.y + box * 2
){qlwalk = "walk"}

if(rqd.x - 2 - box - gran == 0){qlwalk = "none"}
if(rqd.y- 2 + box + gran > 540){qdwalk = "none"}
if(rqd.y- 2 == sten2.y +box){qdwalk = "walk"}

if(rqd.x - 2 == sten3.x && rqd.y- 2 == sten3.y - box){quwalk = "none",qdwalk = "none"}
if(rqd.x - 2==sten3.x + box &&rqd.y- 2==sten3.y - box){quwalk = "walk",qdwalk = "walk"}
if(rqd.x - 2 == sten3.x && rqd.y- 2 == sten3.y - box){qlwalk ="walk"}


if(rqd.x - 2 == sten4.x - box && rqd.y- 2 ==sten4.y||rqd.x - 2 == sten4.x - box && rqd.y- 2 ==sten4.y + box){qrwalk = "none", quwalk = "none"}
if(rqd.x - 2 == sten4.x - box * 2 && rqd.y- 2 ==sten4.y||rqd.x - 2 == sten4.x - box *2  && rqd.y- 2 ==sten4.y || rqd.x - 2 == sten4.x - box * 2  && rqd.y- 2 ==sten4.y + box){qrwalk = "walk", quwalk = "walk"}
if(rqd.x - 2 == sten4.x - box && rqd.y- 2 ==sten4.y + box){quwalk = "walk"}


if (rqd.x - 2 + box >350 && rqd.y- 2 < 414 ){qrwalk = "none"}
if (rqd.x - 2  == sten1.x + box){qrwalk = "walk"}

if(rqd.x - 2==sten2.x - box && rqd.y- 2==sten2.y-box){quwalk = "none"}
if(rqd.x - 2==sten2.x - box && rqd.y- 2==sten2.y){quwalk = "walk"}

if(rqd.y- 2== sten1.y - box*3){quwalk = "none"}
if(rqd.y- 2== sten1.y - box*2 && rqd.x - 2 >= sten1.x){quwalk = "walk"}

if (rqd.y- 2==sten5.y&& rqd.x - 2==sten5.x + box){qlwalk = "none"}
if(rqd.y- 2==sten5.y +box&& rqd.x - 2==sten5.x + box||rqd.y- 2==sten5.y + box&& rqd.x - 2==sten5.x + box *2 ||rqd.y- 2==sten5.y&& rqd.x - 2==sten5.x + box*2){qlwalk ="walk"}








if(man.y==rwd.y- 2 - box && man.x==rwd.x -2 &&wdwalk == "none"){mdwalk="none"}
if(man.y==rwd.y- 2 + box && man.x==rwd.x -2&& wuwalk == "none"){muwalk="none"}
if(man.y==rwd.y- 2 && man.x==rwd.x -2- box && wrwalk == "none"){mrwalk="none"}
if(man.y==rwd.y- 2 && man.x==rwd.x -2+ box && wlwalk == "none"){mlwalk="none"}

if(man.y==rwd.y- 2 - box * 2 && man.x==rwd.x -2){mdwalk="walk"}
if(man.y==rwd.y- 2 + box * 2&& man.x==rwd.x -2){muwalk="walk"}
if(man.y==rwd.y- 2 && man.x==rwd.x -2- box* 2){mrwalk="walk"}
if(man.y==rwd.y- 2 && man.x==rwd.x -2+ box* 2){mlwalk="walk"}
if(man.y==rwd.y- 2 - box && man.x==rwd.x -2- box){mdwalk="walk",mrwalk="walk" }
if(man.y==rwd.y- 2 + box && man.x==rwd.x -2+ box){muwalk="walk", mlwalk="walk"}
if(man.y==rwd.y- 2 - box && man.x==rwd.x -2+ box){mdwalk="walk",mlwalk="walk" }
if(man.y==rwd.y- 2 +box && man.x==rwd.x -2- box){muwalk="walk",mrwalk="walk"}





if(sten1.x + box== rwd.x - 2 && rwd.y- 2 == sten1.y){ wlwalk = "none"}
if(rwd.x - 2 == sten1.x + box * 2 && rwd.y- 2 == sten1.y ||
   rwd.x - 2 == sten1.x + box && rwd.y- 2 == sten1.y - box ||
 rwd.x - 2 == sten1.x + box  && rwd.y- 2 == sten1.y + box||
 rwd.x - 2 == sten1.x + box*2 && rwd.y- 2 == sten1.y - box ||
rwd.x - 2 == sten1.x + box*2  && rwd.y- 2 == sten1.y + box
){wlwalk = "walk"}

if(sten1.x == rwd.x - 2 && rwd.y- 2 == sten1.y + box){wuwalk = "none"}
if(rwd.x - 2 == sten1.x + box && rwd.y- 2 == sten1.y + box ||
   rwd.x - 2 == sten1.x && rwd.y- 2 == sten1.y +box * 2 ||
 rwd.x - 2 == sten1.x + box && rwd.y- 2 == sten1.y + box *2
){wuwalk = "walk"}

if(sten1.x == rwd.x - 2 && rwd.y- 2 == sten1.y - box){wdwalk = "none", wlwalk = "none"}
if(rwd.x - 2 == sten1.x + box && rwd.y- 2 == sten1.y - box ||
   rwd.x - 2 == sten1.x && rwd.y- 2 == sten1.y -box * 2 ||
 rwd.x - 2 == sten1.x + box && rwd.y- 2 == sten1.y - box *2
){wdwalk = "walk", wlwalk = "walk"}

if( sten2.x == rwd.x - 2 && rwd.y- 2 == sten2.y + box){ wuwalk = "none"}
if(rwd.x - 2 == sten2.x + box && rwd.y- 2 == sten2.y + box ||
   rwd.x - 2 == sten2.x && rwd.y- 2 == sten2.y + box * 2 ||
   rwd.x - 2 == sten2.x - box  && rwd.y- 2 == sten2.y + box||
   rwd.x - 2 == sten2.x - box && rwd.y- 2 == sten2.y + box *2 ||
   rwd.x - 2 == sten2.x + box  && rwd.y- 2 == sten2.y + box * 2
){wuwalk = "walk"}

if(sten2.x+box == rwd.x - 2  && rwd.y- 2 == sten2.y){wlwalk = "none"}
if(rwd.x - 2 == sten2.x + box && rwd.y- 2 == sten2.y +box
){wlwalk = "walk"}

if(sten2.x-box == rwd.x - 2 && rwd.y- 2 == sten2.y){wlwalk = "none", wrwalk="none"}
if(rwd.x - 2 == sten2.x - box &&  rwd.y- 2 == sten2.y + box){wrwalk = "walk"}
if( sten2.x == rwd.x - 2 && rwd.y- 2 == sten2.y + box ||
    rwd.x - 2 == sten2.x && rwd.y- 2 == sten2.y + box * 2
){wlwalk = "walk"}

if(rwd.x - 2 - box - gran == 0){wlwalk = "none"}
if(rwd.y- 2 + box + gran > 540){wdwalk = "none"}
if(rwd.y- 2 == sten2.y +box){wdwalk = "walk"}

if(rwd.x - 2 == sten3.x && rwd.y- 2 == sten3.y - box){wuwalk = "none",wdwalk = "none"}
if(rwd.x - 2==sten3.x + box &&rwd.y- 2==sten3.y - box){wuwalk = "walk",wdwalk = "walk"}
if(rwd.x - 2 == sten3.x && rwd.y- 2 == sten3.y - box){wlwalk ="walk"}


if(rwd.x - 2 == sten4.x - box && rwd.y- 2 ==sten4.y||rwd.x - 2 == sten4.x - box && rwd.y- 2 ==sten4.y + box){wrwalk = "none", wuwalk = "none"}
if(rwd.x - 2 == sten4.x - box * 2 && rwd.y- 2 ==sten4.y||rwd.x - 2 == sten4.x - box *2  && rwd.y- 2 ==sten4.y || rwd.x - 2 == sten4.x - box * 2  && rwd.y- 2 ==sten4.y + box){wrwalk = "walk", wuwalk = "walk"}
if(rwd.x - 2 == sten4.x - box && rwd.y- 2 ==sten4.y + box){wuwalk = "walk"}


if (rwd.x - 2 + box >350 && rwd.y- 2 < 414 ){wrwalk = "none"}
if (rwd.x - 2  == sten1.x + box){wrwalk = "walk"}

if(rwd.x - 2==sten2.x - box && rwd.y- 2==sten2.y-box){wuwalk = "none"}
if(rwd.x - 2==sten2.x - box && rwd.y- 2==sten2.y){wuwalk = "walk"}

if(rwd.y- 2== sten1.y - box*3){wuwalk = "none"}
if(rwd.y- 2== sten1.y - box*2 && rwd.x - 2 >= sten1.x){wuwalk = "walk"}

if (rwd.y- 2==sten5.y&& rwd.x - 2==sten5.x + box){wlwalk = "none"}
if(rwd.y- 2==sten5.y +box&& rwd.x - 2==sten5.x + box||rwd.y- 2==sten5.y + box&& rwd.x - 2==sten5.x + box *2 ||rwd.y- 2==sten5.y&& rwd.x - 2==sten5.x + box*2){wlwalk ="walk"}










if(man.y==red.y- 2 - box && man.x==red.x -2 &&edwalk == "none"){mdwalk="none"}
if(man.y==red.y- 2 + box && man.x==red.x -2&& euwalk == "none"){muwalk="none"}
if(man.y==red.y- 2 && man.x==red.x -2- box && erwalk == "none"){mrwalk="none"}
if(man.y==red.y- 2 && man.x==red.x -2+ box && elwalk == "none"){mlwalk="none"}

if(man.y==red.y- 2 - box * 2 && man.x==red.x -2){mdwalk="walk"}
if(man.y==red.y- 2 + box * 2&& man.x==red.x -2){muwalk="walk"}
if(man.y==red.y- 2 && man.x==red.x -2- box* 2){mrwalk="walk"}
if(man.y==red.y- 2 && man.x==red.x -2+ box* 2){mlwalk="walk"}
if(man.y==red.y- 2 - box && man.x==red.x -2- box){mdwalk="walk",mrwalk="walk" }
if(man.y==red.y- 2 + box && man.x==red.x -2+ box){muwalk="walk", mlwalk="walk"}
if(man.y==red.y- 2 - box && man.x==red.x -2+ box){mdwalk="walk",mlwalk="walk" }
if(man.y==red.y- 2 +box && man.x==red.x -2- box){muwalk="walk",mrwalk="walk"}


if(sten1.x + box== red.x - 2 && red.y- 2 == sten1.y){ elwalk = "none"}
if(red.x - 2 == sten1.x + box * 2 && red.y- 2 == sten1.y ||
   red.x - 2 == sten1.x + box && red.y- 2 == sten1.y - box ||
 red.x - 2 == sten1.x + box  && red.y- 2 == sten1.y + box||
 red.x - 2 == sten1.x + box*2 && red.y- 2 == sten1.y - box ||
red.x - 2 == sten1.x + box*2  && red.y- 2 == sten1.y + box
){elwalk = "walk"}

if(sten1.x == red.x - 2 && red.y- 2 == sten1.y + box){euwalk = "none"}
if(red.x - 2 == sten1.x + box && red.y- 2 == sten1.y + box ||
   red.x - 2 == sten1.x && red.y- 2 == sten1.y +box * 2 ||
 red.x - 2 == sten1.x + box && red.y- 2 == sten1.y + box *2
){euwalk = "walk"}

if(sten1.x == red.x - 2 && red.y- 2 == sten1.y - box){edwalk = "none", elwalk = "none"}
if(red.x - 2 == sten1.x + box && red.y- 2 == sten1.y - box ||
   red.x - 2 == sten1.x && red.y- 2 == sten1.y -box * 2 ||
 red.x - 2 == sten1.x + box && red.y- 2 == sten1.y - box *2
){edwalk = "walk", elwalk = "walk"}

if( sten2.x == red.x - 2 && red.y- 2 == sten2.y + box){ euwalk = "none"}
if(red.x - 2 == sten2.x + box && red.y- 2 == sten2.y + box ||
   red.x - 2 == sten2.x && red.y- 2 == sten2.y + box * 2 ||
   red.x - 2 == sten2.x - box  && red.y- 2 == sten2.y + box||
   red.x - 2 == sten2.x - box && red.y- 2 == sten2.y + box *2 ||
   red.x - 2 == sten2.x + box  && red.y- 2 == sten2.y + box * 2
){euwalk = "walk"}

if(sten2.x+box == red.x - 2  && red.y- 2 == sten2.y){elwalk = "none"}
if(red.x - 2 == sten2.x + box && red.y- 2 == sten2.y +box
){elwalk = "walk"}

if(sten2.x-box == red.x - 2 && red.y- 2 == sten2.y){elwalk = "none", erwalk="none"}
if(red.x - 2 == sten2.x - box &&  red.y- 2 == sten2.y + box){erwalk = "walk"}
if( sten2.x == red.x - 2 && red.y- 2 == sten2.y + box ||
    red.x - 2 == sten2.x && red.y- 2 == sten2.y + box * 2
){elwalk = "walk"}

if(red.x - 2 - box - gran == 0){elwalk = "none"}
if(red.y- 2 + box + gran > 540){edwalk = "none"}
if(red.y- 2 == sten2.y +box){edwalk = "walk"}

if(red.x - 2 == sten3.x && red.y- 2 == sten3.y - box){euwalk = "none",edwalk = "none"}
if(red.x - 2==sten3.x + box &&red.y- 2==sten3.y - box){euwalk = "walk",edwalk = "walk"}
if(red.x - 2 == sten3.x && red.y- 2 == sten3.y - box){elwalk ="walk"}


if(red.x - 2 == sten4.x - box && red.y- 2 ==sten4.y||red.x - 2 == sten4.x - box && red.y- 2 ==sten4.y + box){erwalk = "none", euwalk = "none"}
if(red.x - 2 == sten4.x - box * 2 && red.y- 2 ==sten4.y||red.x - 2 == sten4.x - box *2  && red.y- 2 ==sten4.y || red.x - 2 == sten4.x - box * 2  && red.y- 2 ==sten4.y + box){erwalk = "walk", euwalk = "walk"}
if(red.x - 2 == sten4.x - box && red.y- 2 ==sten4.y + box){euwalk = "walk"}


if (red.x - 2 + box >350 && red.y- 2 < 414 ){erwalk = "none"}
if (red.x - 2  == sten1.x + box){erwalk = "walk"}

if(red.x - 2==sten2.x - box && red.y- 2==sten2.y-box){euwalk = "none"}
if(red.x - 2==sten2.x - box && red.y- 2==sten2.y){euwalk = "walk"}

if(red.y- 2== sten1.y - box*3){euwalk = "none"}
if(red.y- 2== sten1.y - box*2 && red.x - 2 >= sten1.x){euwalk = "walk"}

if (red.y- 2==sten5.y&& red.x - 2==sten5.x + box){elwalk = "none"}
if(red.y- 2==sten5.y +box&& red.x - 2==sten5.x + box||red.y- 2==sten5.y + box&& red.x - 2==sten5.x + box *2 ||red.y- 2==sten5.y&& red.x - 2==sten5.x + box*2){elwalk ="walk"}







if(man.y==rrd.y- 2 - box && man.x==rrd.x -2 &&fdwalk == "none"){mdwalk="none"}
if(man.y==rrd.y- 2 + box && man.x==rrd.x -2&& fuwalk == "none"){muwalk="none"}
if(man.y==rrd.y- 2 && man.x==rrd.x -2- box && frwalk == "none"){mrwalk="none"}
if(man.y==rrd.y- 2 && man.x==rrd.x -2+ box && flwalk == "none"){mlwalk="none"}

if(man.y==rrd.y- 2 - box * 2 && man.x==rrd.x -2){mdwalk="walk"}
if(man.y==rrd.y- 2 + box * 2&& man.x==rrd.x -2){muwalk="walk"}
if(man.y==rrd.y- 2 && man.x==rrd.x -2- box* 2){mrwalk="walk"}
if(man.y==rrd.y- 2 && man.x==rrd.x -2+ box* 2){mlwalk="walk"}
if(man.y==rrd.y- 2 - box && man.x==rrd.x -2- box){mdwalk="walk",mrwalk="walk" }
if(man.y==rrd.y- 2 + box && man.x==rrd.x -2+ box){muwalk="walk", mlwalk="walk"}
if(man.y==rrd.y- 2 - box && man.x==rrd.x -2+ box){mdwalk="walk",mlwalk="walk" }
if(man.y==rrd.y- 2 +box && man.x==rrd.x -2- box){muwalk="walk",mrwalk="walk"}


if(sten1.x + box== rrd.x - 2 && rrd.y- 2 == sten1.y){ flwalk = "none"}
if(rrd.x - 2 == sten1.x + box * 2 && rrd.y- 2 == sten1.y ||
   rrd.x - 2 == sten1.x + box && rrd.y- 2 == sten1.y - box ||
 rrd.x - 2 == sten1.x + box  && rrd.y- 2 == sten1.y + box||
 rrd.x - 2 == sten1.x + box*2 && rrd.y- 2 == sten1.y - box ||
rrd.x - 2 == sten1.x + box*2  && rrd.y- 2 == sten1.y + box
){flwalk = "walk"}

if(sten1.x == rrd.x - 2 && rrd.y- 2 == sten1.y + box){fuwalk = "none"}
if(rrd.x - 2 == sten1.x + box && rrd.y- 2 == sten1.y + box ||
   rrd.x - 2 == sten1.x && rrd.y- 2 == sten1.y +box * 2 ||
 rrd.x - 2 == sten1.x + box && rrd.y- 2 == sten1.y + box *2
){fuwalk = "walk"}

if(sten1.x == rrd.x - 2 && rrd.y- 2 == sten1.y - box){fdwalk = "none", flwalk = "none"}
if(rrd.x - 2 == sten1.x + box && rrd.y- 2 == sten1.y - box ||
   rrd.x - 2 == sten1.x && rrd.y- 2 == sten1.y -box * 2 ||
 rrd.x - 2 == sten1.x + box && rrd.y- 2 == sten1.y - box *2
){fdwalk = "walk", flwalk = "walk"}

if( sten2.x == rrd.x - 2 && rrd.y- 2 == sten2.y + box){ fuwalk = "none"}
if(rrd.x - 2 == sten2.x + box && rrd.y- 2 == sten2.y + box ||
   rrd.x - 2 == sten2.x && rrd.y- 2 == sten2.y + box * 2 ||
   rrd.x - 2 == sten2.x - box  && rrd.y- 2 == sten2.y + box||
   rrd.x - 2 == sten2.x - box && rrd.y- 2 == sten2.y + box *2 ||
   rrd.x - 2 == sten2.x + box  && rrd.y- 2 == sten2.y + box * 2
){fuwalk = "walk"}

if(sten2.x+box == rrd.x - 2  && rrd.y- 2 == sten2.y){flwalk = "none"}
if(rrd.x - 2 == sten2.x + box && rrd.y- 2 == sten2.y +box
){flwalk = "walk"}

if(sten2.x-box == rrd.x - 2 && rrd.y- 2 == sten2.y){flwalk = "none", frwalk="none"}
if(rrd.x - 2 == sten2.x - box &&  rrd.y- 2 == sten2.y + box){frwalk = "walk"}
if( sten2.x == rrd.x - 2 && rrd.y- 2 == sten2.y + box ||
    rrd.x - 2 == sten2.x && rrd.y- 2 == sten2.y + box * 2
){flwalk = "walk"}

if(rrd.x - 2 - box - gran == 0){flwalk = "none"}
if(rrd.y- 2 + box + gran > 540){fdwalk = "none"}
if(rrd.y- 2 == sten2.y +box){fdwalk = "walk"}

if(rrd.x - 2 == sten3.x && rrd.y- 2 == sten3.y - box){fuwalk = "none",fdwalk = "none"}
if(rrd.x - 2==sten3.x + box &&rrd.y- 2==sten3.y - box){fuwalk = "walk",fdwalk = "walk"}
if(rrd.x - 2 == sten3.x && rrd.y- 2 == sten3.y - box){flwalk ="walk"}


if(rrd.x - 2 == sten4.x - box && rrd.y- 2 ==sten4.y||rrd.x - 2 == sten4.x - box && rrd.y- 2 ==sten4.y + box){frwalk = "none", fuwalk = "none"}
if(rrd.x - 2 == sten4.x - box * 2 && rrd.y- 2 ==sten4.y||rrd.x - 2 == sten4.x - box *2  && rrd.y- 2 ==sten4.y || rrd.x - 2 == sten4.x - box * 2  && rrd.y- 2 ==sten4.y + box){frwalk = "walk", fuwalk = "walk"}
if(rrd.x - 2 == sten4.x - box && rrd.y- 2 ==sten4.y + box){fuwalk = "walk"}


if (rrd.x - 2 + box >350 && rrd.y- 2 < 414 ){frwalk = "none"}
if (rrd.x - 2  == sten1.x + box){frwalk = "walk"}

if(rrd.x - 2==sten2.x - box && rrd.y- 2==sten2.y-box){fuwalk = "none"}
if(rrd.x - 2==sten2.x - box && rrd.y- 2==sten2.y){fuwalk = "walk"}

if(rrd.y- 2== sten1.y - box*3){fuwalk = "none"}
if(rrd.y- 2== sten1.y - box*2 && rrd.x - 2 >= sten1.x){fuwalk = "walk"}

if (rrd.y- 2==sten5.y&& rrd.x - 2==sten5.x + box){flwalk = "none"}
if(rrd.y- 2==sten5.y +box&& rrd.x - 2==sten5.x + box||rrd.y- 2==sten5.y + box&& rrd.x - 2==sten5.x + box *2 ||rrd.y- 2==sten5.y&& rrd.x - 2==sten5.x + box*2){flwalk ="walk"}














if(man.y==rtd.y- 2 - box && man.x==rtd.x -2 &&tdwalk == "none"){mdwalk="none"}
if(man.y==rtd.y- 2 + box && man.x==rtd.x -2&& tuwalk == "none"){muwalk="none"}
if(man.y==rtd.y- 2 && man.x==rtd.x -2- box && trwalk == "none"){mrwalk="none"}
if(man.y==rtd.y- 2 && man.x==rtd.x -2+ box && tlwalk == "none"){mlwalk="none"}

if(man.y==rtd.y- 2 - box * 2 && man.x==rtd.x -2){mdwalk="walk"}
if(man.y==rtd.y- 2 + box * 2&& man.x==rtd.x -2){muwalk="walk"}
if(man.y==rtd.y- 2 && man.x==rtd.x -2- box* 2){mrwalk="walk"}
if(man.y==rtd.y- 2 && man.x==rtd.x -2+ box* 2){mlwalk="walk"}
if(man.y==rtd.y- 2 - box && man.x==rtd.x -2- box){mdwalk="walk",mrwalk="walk" }
if(man.y==rtd.y- 2 + box && man.x==rtd.x -2+ box){muwalk="walk", mlwalk="walk"}
if(man.y==rtd.y- 2 - box && man.x==rtd.x -2+ box){mdwalk="walk",mlwalk="walk" }
if(man.y==rtd.y- 2 +box && man.x==rtd.x -2- box){muwalk="walk",mrwalk="walk"}





if(sten1.x + box== rtd.x - 2 && rtd.y- 2 == sten1.y){ tlwalk = "none"}
if(rtd.x - 2 == sten1.x + box * 2 && rtd.y- 2 == sten1.y ||
   rtd.x - 2 == sten1.x + box && rtd.y- 2 == sten1.y - box ||
 rtd.x - 2 == sten1.x + box  && rtd.y- 2 == sten1.y + box||
 rtd.x - 2 == sten1.x + box*2 && rtd.y- 2 == sten1.y - box ||
rtd.x - 2 == sten1.x + box*2  && rtd.y- 2 == sten1.y + box
){tlwalk = "walk"}

if(sten1.x == rtd.x - 2 && rtd.y- 2 == sten1.y + box){tuwalk = "none"}
if(rtd.x - 2 == sten1.x + box && rtd.y- 2 == sten1.y + box ||
   rtd.x - 2 == sten1.x && rtd.y- 2 == sten1.y +box * 2 ||
 rtd.x - 2 == sten1.x + box && rtd.y- 2 == sten1.y + box *2
){tuwalk = "walk"}

if(sten1.x == rtd.x - 2 && rtd.y- 2 == sten1.y - box){tdwalk = "none", tlwalk = "none"}
if(rtd.x - 2 == sten1.x + box && rtd.y- 2 == sten1.y - box ||
   rtd.x - 2 == sten1.x && rtd.y- 2 == sten1.y -box * 2 ||
 rtd.x - 2 == sten1.x + box && rtd.y- 2 == sten1.y - box *2
){tdwalk = "walk", tlwalk = "walk"}

if( sten2.x == rtd.x - 2 && rtd.y- 2 == sten2.y + box){ tuwalk = "none"}
if(rtd.x - 2 == sten2.x + box && rtd.y- 2 == sten2.y + box ||
   rtd.x - 2 == sten2.x && rtd.y- 2 == sten2.y + box * 2 ||
   rtd.x - 2 == sten2.x - box  && rtd.y- 2 == sten2.y + box||
   rtd.x - 2 == sten2.x - box && rtd.y- 2 == sten2.y + box *2 ||
   rtd.x - 2 == sten2.x + box  && rtd.y- 2 == sten2.y + box * 2
){tuwalk = "walk"}

if(sten2.x+box == rtd.x - 2  && rtd.y- 2 == sten2.y){tlwalk = "none"}
if(rtd.x - 2 == sten2.x + box && rtd.y- 2 == sten2.y +box
){tlwalk = "walk"}

if(sten2.x-box == rtd.x - 2 && rtd.y- 2 == sten2.y){tlwalk = "none", trwalk="none"}
if(rtd.x - 2 == sten2.x - box &&  rtd.y- 2 == sten2.y + box){trwalk = "walk"}
if( sten2.x == rtd.x - 2 && rtd.y- 2 == sten2.y + box ||
    rtd.x - 2 == sten2.x && rtd.y- 2 == sten2.y + box * 2
){tlwalk = "walk"}

if(rtd.x - 2 - box - gran == 0){tlwalk = "none"}
if(rtd.y- 2 + box + gran > 540){tdwalk = "none"}
if(rtd.y- 2 == sten2.y +box){tdwalk = "walk"}

if(rtd.x - 2 == sten3.x && rtd.y- 2 == sten3.y - box){tuwalk = "none",tdwalk = "none"}
if(rtd.x - 2==sten3.x + box &&rtd.y- 2==sten3.y - box){tuwalk = "walk",tdwalk = "walk"}
if(rtd.x - 2 == sten3.x && rtd.y- 2 == sten3.y - box){tlwalk ="walk"}


if(rtd.x - 2 == sten4.x - box && rtd.y- 2 ==sten4.y||rtd.x - 2 == sten4.x - box && rtd.y- 2 ==sten4.y + box){trwalk = "none", tuwalk = "none"}
if(rtd.x - 2 == sten4.x - box * 2 && rtd.y- 2 ==sten4.y||rtd.x - 2 == sten4.x - box *2  && rtd.y- 2 ==sten4.y || rtd.x - 2 == sten4.x - box * 2  && rtd.y- 2 ==sten4.y + box){trwalk = "walk", tuwalk = "walk"}
if(rtd.x - 2 == sten4.x - box && rtd.y- 2 ==sten4.y + box){tuwalk = "walk"}


if (rtd.x - 2 + box >350 && rtd.y- 2 < 414 ){trwalk = "none"}
if (rtd.x - 2  == sten1.x + box){trwalk = "walk"}

if(rtd.x - 2==sten2.x - box && rtd.y- 2==sten2.y-box){tuwalk = "none"}
if(rtd.x - 2==sten2.x - box && rtd.y- 2==sten2.y){tuwalk = "walk"}

if(rtd.y- 2== sten1.y - box*3){tuwalk = "none"}
if(rtd.y- 2== sten1.y - box*2 && rtd.x - 2 >= sten1.x){tuwalk = "walk"}

if (rtd.y- 2==sten5.y&& rtd.x - 2==sten5.x + box){tlwalk = "none"}
if(rtd.y- 2==sten5.y +box&& rtd.x - 2==sten5.x + box||rtd.y- 2==sten5.y + box&& rtd.x - 2==sten5.x + box *2 ||rtd.y- 2==sten5.y&& rtd.x - 2==sten5.x + box*2){tlwalk ="walk"}










if(man.y==ryd.y- 2 - box && man.x==ryd.x -2 &&ydwalk == "none"){mdwalk="none"}
if(man.y==ryd.y- 2 + box && man.x==ryd.x -2&& yuwalk == "none"){muwalk="none"}
if(man.y==ryd.y- 2 && man.x==ryd.x -2- box && yrwalk == "none"){mrwalk="none"}
if(man.y==ryd.y- 2 && man.x==ryd.x -2+ box && ylwalk == "none"){mlwalk="none"}

if(man.y==ryd.y- 2 - box * 2 && man.x==ryd.x -2){mdwalk="walk"}
if(man.y==ryd.y- 2 + box * 2&& man.x==ryd.x -2){muwalk="walk"}
if(man.y==ryd.y- 2 && man.x==ryd.x -2- box* 2){mrwalk="walk"}
if(man.y==ryd.y- 2 && man.x==ryd.x -2+ box* 2){mlwalk="walk"}
if(man.y==ryd.y- 2 - box && man.x==ryd.x -2- box){mdwalk="walk",mrwalk="walk" }
if(man.y==ryd.y- 2 + box && man.x==ryd.x -2+ box){muwalk="walk", mlwalk="walk"}
if(man.y==ryd.y- 2 - box && man.x==ryd.x -2+ box){mdwalk="walk",mlwalk="walk" }
if(man.y==ryd.y- 2 +box && man.x==ryd.x -2- box){muwalk="walk",mrwalk="walk"}





if(sten1.x + box== ryd.x - 2 && ryd.y- 2 == sten1.y){ ylwalk = "none"}
if(ryd.x - 2 == sten1.x + box * 2 && ryd.y- 2 == sten1.y ||
   ryd.x - 2 == sten1.x + box && ryd.y- 2 == sten1.y - box ||
 ryd.x - 2 == sten1.x + box  && ryd.y- 2 == sten1.y + box||
 ryd.x - 2 == sten1.x + box*2 && ryd.y- 2 == sten1.y - box ||
ryd.x - 2 == sten1.x + box*2  && ryd.y- 2 == sten1.y + box
){ylwalk = "walk"}

if(sten1.x == ryd.x - 2 && ryd.y- 2 == sten1.y + box){yuwalk = "none"}
if(ryd.x - 2 == sten1.x + box && ryd.y- 2 == sten1.y + box ||
   ryd.x - 2 == sten1.x && ryd.y- 2 == sten1.y +box * 2 ||
 ryd.x - 2 == sten1.x + box && ryd.y- 2 == sten1.y + box *2
){yuwalk = "walk"}

if(sten1.x == ryd.x - 2 && ryd.y- 2 == sten1.y - box){ydwalk = "none", ylwalk = "none"}
if(ryd.x - 2 == sten1.x + box && ryd.y- 2 == sten1.y - box ||
   ryd.x - 2 == sten1.x && ryd.y- 2 == sten1.y -box * 2 ||
 ryd.x - 2 == sten1.x + box && ryd.y- 2 == sten1.y - box *2
){ydwalk = "walk", ylwalk = "walk"}

if( sten2.x == ryd.x - 2 && ryd.y- 2 == sten2.y + box){ yuwalk = "none"}
if(ryd.x - 2 == sten2.x + box && ryd.y- 2 == sten2.y + box ||
   ryd.x - 2 == sten2.x && ryd.y- 2 == sten2.y + box * 2 ||
   ryd.x - 2 == sten2.x - box  && ryd.y- 2 == sten2.y + box||
   ryd.x - 2 == sten2.x - box && ryd.y- 2 == sten2.y + box *2 ||
   ryd.x - 2 == sten2.x + box  && ryd.y- 2 == sten2.y + box * 2
){yuwalk = "walk"}

if(sten2.x+box == ryd.x - 2  && ryd.y- 2 == sten2.y){ylwalk = "none"}
if(ryd.x - 2 == sten2.x + box && ryd.y- 2 == sten2.y +box
){ylwalk = "walk"}

if(sten2.x-box == ryd.x - 2 && ryd.y- 2 == sten2.y){ylwalk = "none", yrwalk="none"}
if(ryd.x - 2 == sten2.x - box &&  ryd.y- 2 == sten2.y + box){yrwalk = "walk"}
if( sten2.x == ryd.x - 2 && ryd.y- 2 == sten2.y + box ||
    ryd.x - 2 == sten2.x && ryd.y- 2 == sten2.y + box * 2
){ylwalk = "walk"}

if(ryd.x - 2 - box - gran == 0){ylwalk = "none"}
if(ryd.y- 2 + box + gran > 540){ydwalk = "none"}
if(ryd.y- 2 == sten2.y +box){ydwalk = "walk"}

if(ryd.x - 2 == sten3.x && ryd.y- 2 == sten3.y - box){yuwalk = "none",ydwalk = "none"}
if(ryd.x - 2==sten3.x + box &&ryd.y- 2==sten3.y - box){yuwalk = "walk",ydwalk = "walk"}
if(ryd.x - 2 == sten3.x && ryd.y- 2 == sten3.y - box){ylwalk ="walk"}


if(ryd.x - 2 == sten4.x - box && ryd.y- 2 ==sten4.y||ryd.x - 2 == sten4.x - box && ryd.y- 2 ==sten4.y + box){yrwalk = "none", yuwalk = "none"}
if(ryd.x - 2 == sten4.x - box * 2 && ryd.y- 2 ==sten4.y||ryd.x - 2 == sten4.x - box *2  && ryd.y- 2 ==sten4.y || ryd.x - 2 == sten4.x - box * 2  && ryd.y- 2 ==sten4.y + box){yrwalk = "walk", yuwalk = "walk"}
if(ryd.x - 2 == sten4.x - box && ryd.y- 2 ==sten4.y + box){yuwalk = "walk"}


if (ryd.x - 2 + box >350 && ryd.y- 2 < 414 ){yrwalk = "none"}
if (ryd.x - 2  == sten1.x + box){yrwalk = "walk"}

if(ryd.x - 2==sten2.x - box && ryd.y- 2==sten2.y-box){yuwalk = "none"}
if(ryd.x - 2==sten2.x - box && ryd.y- 2==sten2.y){yuwalk = "walk"}

if(ryd.y- 2== sten1.y - box*3){yuwalk = "none"}
if(ryd.y- 2== sten1.y - box*2 && ryd.x - 2 >= sten1.x){yuwalk = "walk"}

if (ryd.y- 2==sten5.y&& ryd.x - 2==sten5.x + box){ylwalk = "none"}
if(ryd.y- 2==sten5.y +box&& ryd.x - 2==sten5.x + box||ryd.y- 2==sten5.y + box&& ryd.x - 2==sten5.x + box *2 ||ryd.y- 2==sten5.y&& ryd.x - 2==sten5.x + box*2){ylwalk ="walk"}

}

let game = setInterval(draw, 100)
let stena = setInterval(sten, 10)
