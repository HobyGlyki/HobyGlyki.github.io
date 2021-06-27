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
const radImg = new Image();
 radImg.src  = "icon/radImg.png";
 const radd = new Image();
  radd.src  = "icon/radsImg.png";

  const box = 64 //1 блок
  let gran= 30 //От конца до поля
  let man = { // чувак
    x: 2 * box + gran,
    y: 2 * box + gran,}
let rad = [
{ src: radd,  x: 3*box+gran, w:1, s:1, d:1, a:1,y: 2 * box + gran, w:1, s:1, d:1, a:1  },{
  src: radd,x: 4 * box + gran, w:1, s:1, d:1, a:1,y: 3 * box + gran, w:1, s:1, d:1, a:1  },{
  src: radd,x: 4 * box + gran, w:1, s:1, d:1, a:1,y: 4 * box + gran, w:1, s:1, d:1, a:1  },{
  src: radd,x: 4 * box + gran, w:1, s:1, d:1, a:1,y: 6 * box + gran, w:1, s:1, d:1, a:1  },{
  src: radd,x: 5 * box + gran, w:1, s:1, d:1, a:1, y: 6 * box + gran, w:1, s:1, d:1, a:1  },{
  src: radd,x: 3 * box + gran, w:1, s:1, d:1, a:1,y: 6 * box + gran, w:1, s:1, d:1, a:1  },{
  src: radd, x: 1 * box + gran, w:1, s:1, d:1, a:1,y: 6 * box + gran, w:1, s:1, d:1, a:1  }
] //Все ящики ^
//места куда ставить ящики v
let radS = [{
  x: box+gran,
  y: gran + box*2},
{ x: 5*box+gran,
  y: gran + box*3},
{ x: 4*box+gran,
  y: gran + box*5},
{ x: 4*box+gran,
  y: gran + box*7},
{ x: 6*box+gran,
  y: gran + box*6},
{ x:3 * box + gran,
  y: 6 * box + gran},
{ x: box+gran,
  y: gran + box*4
}]

//можно ходить или нет
let: ywalk =1
let: xwalk =1
let: walkx =1
let: walky =1

//условия начальные
let times=1
let dir = [0, 0, 0, 0, 0, 0, 0,]
let dirw=0
//кнопки клавиатуры
document.addEventListener("keydown", direction);
document.addEventListener("keydown", directo);
//таймер
function timer() {
  if(times!=10)times+=1
}
//пермещение коробок
function directo(event) {for(let i = 0; i < rad.length; i++) {
  if(event.keyCode == 37&&man.x==rad [i].x&&man.y==rad [i].y&&rad[i].a==1){
 rad [i].x = rad [i].x - box; times = 1}
 else if(event.keyCode == 38&&man.y==rad [i].y&&man.x==rad [i].x&&rad[i].w==1 ){
 rad [i].y = rad [i].y  - box; times = 1}
 else if(event.keyCode == 39&&man.x==rad [i].x&&man.y==rad [i].y &&rad[i].d==1){
 rad [i].x = rad [i].x+ box; times = 1}
 else if(event.keyCode == 40&&man.y==rad [i].y &&man.x==rad [i].x&&rad[i].s==1){
 rad [i].y = rad [i].y + box; times = 1}}}
//чувак управление
function direction(event) {
	if     (event.keyCode == 37 &&times==10&&xwalk!=0){
man.x = man.x - box; times = 1}
	else if(event.keyCode == 38 &&times==10&&ywalk!=0){
man.y = man.y - box; times = 1}
	else if(event.keyCode == 39 &&times==10&&walkx!=0){
man.x = man.x + box; times = 1}
else if(event.keyCode == 40 &&times==10&&walky!=0){
man.y = man.y + box; times = 1}}
//отрисовка всего
function draw() {
  ctx.drawImage(ground, -2, -2)//фон
  ctx.drawImage(manImg, man.x, man.y, box, box);//рисовка человечка
//  ctx.fillText(man.x, box, box)
//    ctx.fillText(man.y, box, box+20)
//  ctx.fillText(xwalk, box, box -20)
//  ctx.fillText(walky, box+10, box -20)
//    ctx.fillText(walkx, box+20, box -20)
//      ctx.fillText(ywalk, box+10, box -30)
//            ctx.fillText(walkx, box+60, box -20)
//Отрисовка коробок
for(let i = 0; i < rad.length; i++) { ctx.drawImage(rad[i].src, rad[i].x, rad[i].y, box, box)
if (rad[i].x == radS[i].x&& rad[i].y == radS[i].y){rad[i].src =radd; dir[i] = "1"}
if (rad[i].x != radS[i].x|| rad[i].y != radS[i].y){rad[i].src =radImg; dir[i] = "0"}}
//Выигрышь
if (dir[0] == "1"&&dir[1] == "1"&&dir[2] == "1"&&dir[3] == "1"&&dir[4] == "1"&&dir[5] == "1"&&dir[6] == "1"){dirw="1"}
if(dirw =="1"){ctx.drawImage(win, 0, 0); audio.play();}
//стены парня
//право
if(man.y<=350&&man.x==350||man.x==414)walkx=0
else if(man.x==94&&man.y==350||man.x==94&&man.y==286)walkx=0
else walkx=1
//лево
if(man.x==222&& man.y==350||man.x==222&&man.y==222||man.x==94)xwalk=0
else if(man.x==286&&man.y==286)xwalk=0
else if(man.x==222&&man.y==94)xwalk=0
else xwalk=1
//верх
if(man.y==158&&man.x<=158||man.y==286&&man.x==94||man.y==414&&man.x==158)ywalk=0
else if(man.y==350&&man.x==222||man.y==414&&man.x==414||man.y==94)ywalk=0
else ywalk=1
//вниз
if(man.y==478||man.y==222&&man.x==222)walky=0
else if (man.y==158&&man.x<=158) walky=0
else walky=1

//стены коробки
for (var i = 0; i < rad.length; i++) {
//право
if(rad[i].y<=350&&rad[i].x==350||rad[i].x==414)rad[i].d=0
else if(rad[i].x==94&&rad[i].y==350||rad[i].x==94&&rad[i].y==286)rad[i].d=0
else rad[i].d=1
//лево
if(rad[i].x==222&& rad[i].y==350||rad[i].x==222&&rad[i].y==222||rad[i].x==94)rad[i].a=0
else if(rad[i].x==286&&rad[i].y==286)rad[i].a=0
else if(rad[i].x==222&&rad[i].y==94)rad[i].a=0
else rad[i].a=1
//верх
if(rad[i].y==94||rad[i].y==158&&rad[i].x<=158||rad[i].y==286&&rad[i].x==94)rad[i].w=0
else if(rad[i].y==350&&rad[i].x==222||rad[i].x==414&&rad[i].y==414)rad[i].w=0
else rad[i].w=1
//вниз
if(rad[i].y==478||rad[i].y==222&&rad[i].x==222)rad[i].s=0
else if (rad[i].y==158&&rad[i].x<=158) rad[i].s=0
else rad[i].s=1
//Коробки и Парень взаймодействие
if(man.y==rad[i].y&&man.x+box==rad[i].x&&rad[i].d==0)walkx=0
if(man.y==rad[i].y&&man.x-box==rad[i].x&&rad[i].a==0)xwalk=0
if(man.x==rad[i].x&&man.y-box==rad[i].y&&rad[i].w==0)ywalk=0
if(man.x==rad[i].x&&man.y+box==rad[i].y&&rad[i].s==0)walky=0
//сталкновение коробок, спагети код, но по другому я не умею
if(man.y==rad[i].y&&man.x+box==rad[i].x&&rad[i].d==1)walkx=2
if(man.y==rad[i].y&&man.x-box==rad[i].x&&rad[i].a==1)xwalk=2
if(man.x==rad[i].x&&man.y-box==rad[i].y&&rad[i].w==1)ywalk=2
if(man.x==rad[i].x&&man.y+box==rad[i].y&&rad[i].s==1)walky=2
if(man.y==rad[i].y&&man.x+box*2==rad[i].x&&walkx==2)walkx=0
if(man.y==rad[i].y&&man.x-box*2==rad[i].x&&xwalk==2)xwalk=0
if(man.x==rad[i].x&&man.y-box*2==rad[i].y&&ywalk==2)ywalk=0
if(man.x==rad[i].x&&man.y+box*2==rad[i].y&&walky==2)walky=0
}}
//таймеры и обновления
let game = setInterval(draw, 100)
let intime = setInterval(timer, 10)
