const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "icon/ground.png";
const spacei = new Image();
spacei.src = "icon/SpaceI.png";
const shipi  = new Image();
shipi.src = "icon/shipi.png"


let livet = [0, 1, 2];
livet[0] ={
  x:15,
  y:561+50,
  w:27*0.6,
  d:50*0.6};
livet[1] ={
  x:15+33,
  y:561+50,
  w:27*0.6,
  d:50*0.6};
livet[2] ={
  x:15+66,
  y:561+50,
  w:27*0.6,
  d:50*0.6};
const death = 0

  let o = Math.floor((Math.random() * 54 + 0))
  let agt = [];
  agt[0] ={
    x:-10,
    y:0,
    w:11,
    d:4
  };
var downs = "d"
  let space1 = [
     { x:183.5-22,
      y:7, d:27,
      w:27,},
    { x:183.5-22+44,
      y:7, d:27,
      w:27,},
    { x:183.5-22+44*2,
      y:7, d:27,
      w:27,},
    { x:183.5-22+44*3,
      y:7, d:27,
      w:27,},
    { x:183.5-22+44*4,
      y:7, d:27,
      w:27,},
    { x:183.5-22+44*5,
      y:7, d:27,
      w:27,},
    { x:183.5-22+44*6,
      y:7, d:27,
      w:27,},
    { x:183.5-22+44*7,
      y:7, d:27,
      w:27,},
    { x:183.5-22+44*8,
      y:7, d:27,
      w:27,},
    { x:183.5-22+44*9,
      y:7, d:27,
      w:27,},
    { x:183.5-22+44*10,
      y:7, d:27,
      w:27,},

      { x:183.5-22,
  y:7+32, d:27,
  w:27,},
{ x:183.5-22+44,
  y:7+32, d:27,
  w:27,},
{ x:183.5-22+44*2,
  y:7+32, d:27,
  w:27,},
{ x:183.5-22+44*3,
  y:7+32, d:27,
  w:27,},
{ x:183.5-22+44*4,
  y:7+32, d:27,
  w:27,},
{ x:183.5-22+44*5,
  y:7+32, d:27,
  w:27,},
{ x:183.5-22+44*6,
  y:7+32, d:27,
  w:27,},
{ x:183.5-22+44*7,
  y:7+32, d:27,
  w:27,},
{ x:183.5-22+44*8,
  y:7+32, d:27,
  w:27,},
{ x:183.5-22+44*9,
  y:7+32, d:27,
  w:27,},
{ x:183.5-22+44*10,
  y:7+32, d:27,
  w:27,},

  { x:183.5-22,
  y:7+32*2, d:27,
  w:27,},
{ x:183.5-22+44,
  y:7+32*2, d:27,
  w:27,},
{ x:183.5-22+44*2,
  y:7+32*2, d:27,
  w:27,},
{ x:183.5-22+44*3,
  y:7+32*2, d:27,
  w:27,},
{ x:183.5-22+44*4,
  y:7+32*2, d:27,
  w:27,},
{ x:183.5-22+44*5,
  y:7+32*2, d:27,
  w:27,},
{ x:183.5-22+44*6,
  y:7+32*2, d:27,
  w:27,},
{ x:183.5-22+44*7,
  y:7+32*2, d:27,
  w:27,},
{ x:183.5-22+44*8,
  y:7+32*2, d:27,
  w:27,},
{ x:183.5-22+44*9,
  y:7+32*2, d:27,
  w:27,},
{ x:183.5-22+44*10,
  y:7+32*2, d:27,
  w:27,},

  { x:183.5-22,
  y:7+32*3, d:27,
  w:27,},
{ x:183.5-22+44,
  y:7+32*3, d:27,
  w:27,},
{ x:183.5-22+44*2,
  y:7+32*3, d:27,
  w:27,},
{ x:183.5-22+44*3,
  y:7+32*3, d:27,
  w:27,},
{ x:183.5-22+44*4,
  y:7+32*3, d:27,
  w:27,},
{ x:183.5-22+44*5,
  y:7+32*3, d:27,
  w:27,},
{ x:183.5-22+44*6,
  y:7+32*3, d:27,
  w:27,},
{ x:183.5-22+44*7,
  y:7+32*3, d:27,
  w:27,},
{ x:183.5-22+44*8,
  y:7+32*3, d:27,
  w:27,},
{ x:183.5-22+44*9,
  y:7+32*3, d:27,
  w:27,},
{ x:183.5-22+44*10,
  y:7+32*3, d:27,
  w:27,},

  { x:183.5-22,
  y:7+32*4, d:27,
  w:27,},
{ x:183.5-22+44,
  y:7+32*4, d:27,
  w:27,},
{ x:183.5-22+44*2,
  y:7+32*4, d:27,
  w:27,},
{ x:183.5-22+44*3,
  y:7+32*4, d:27,
  w:27,},
{ x:183.5-22+44*4,
  y:7+32*4, d:27,
  w:27,},
{ x:183.5-22+44*5,
  y:7+32*4, d:27,
  w:27,},
{ x:183.5-22+44*6,
  y:7+32*4, d:27,
  w:27,},
{ x:183.5-22+44*7,
  y:7+32*4, d:27,
  w:27,},
{ x:183.5-22+44*8,
  y:7+32*4, d:27,
  w:27,},
{ x:183.5-22+44*9,
  y:7+32*4, d:27,
  w:27,},
{ x:183.5-22+44*10,
  y:7+32*4, d:27,
  w:27,},
    ]

let times =0
function timer() {
if(times!=40)times+=1
else times=0
}
let timet =0
function timer1() {
if(timet!=3)timet+=1
else timet=0
}
document.addEventListener("keydown", direction);
let att = [];
att[0] ={
  x:10,
  y:10,
};
att[1] ={
  x:0,
  y:0,
  w:11,
  d:4,
};

var ship={
  x:754/2,
  y:561,
  w:27,
  d:50
}
let score=0
let lives = 3
let up="s"
let op="n"
let cum ="1"
let lol ="l"
let ll="10";
function direction(event) {
if(event.keyCode == 37&& op!=1&& ship.x>=8.5)ship.x-=5
if(event.keyCode == 109)lol = "l"
else if(event.keyCode == 39&& op!=1&&ship.x<=754-8.5*8+10)ship.x+=5
else if(event.keyCode == 32&& cum !="0"){up = "a";}
}
let win=" "
function drawspace() {
  timer()
    timer1()
  ctx.drawImage(ground, 0, 0, 754, 630)
for(let i = 0; i < space1.length; i++) {
  ctx.drawImage(spacei, space1[i].x, space1[i].y, space1[i].w, space1[i].d)
}
  ctx.drawImage(shipi, ship.x, ship.y, ship.d, ship.w)
  for(let i = 0; i < att.length; i++) {
    ctx.fillStyle = i == 0 ? "white" : "white";
    ctx.fillRect(att[i].x, att[i].y, att[i].d, att[i].w);
    ctx.fillStyle = "red";
    ctx.fillRect(agt[0].x, agt[0].y, agt[0].d, agt[0].w);
  }
  for(let i = 0; i < livet.length; i++) {
  ctx.drawImage(shipi, livet[i].x, livet[i].y, livet[i].d, livet[i].w)}

ctx.fillStyle = "white"
ctx.font = "35px Arial"


ctx.fillText(win,300,300)
ctx.fillText('score '+score, 640-20, 561+67)


for(let i = 0; i < space1.length; i++) {
  if(downs=="d"  && space1[54].x <=754-44&& times==5) {space1[i].x+=22}
  else if(space1[i].x >=754-44&&downs == "d") downs = "s"
  if( downs == "s"&& times == 10 ){space1[i].y+=22;}
  if(downs=="s"&&times == 1){downs = "a"}
  if(downs=="a" && space1[i].x>=7.5+22 && times == 5)space1[i].x-=22
 if(downs=="a" && space1[i].x<=7.5 && times == 10){downs = "w";space1[i].x+=22 }
  if(times ==10&&downs=="w"){space1[i].y+=27.5;}
  if(downs == "w"&& times == 5) {downs = "d"}
  if(times == 5&&space1[i].y>=ship.y-11&&space1[i].d!=death) {shipi.src ="icon/deathi1.png"; op=1; win="GameOver";downs="n"; cum = "0"}
  if(lol == "o"&& timet==1){space1[i].d=death; space1[1].d=27; ll ='l'}
  if(ll='l'&&timet==3){lol="l"}



if(timet==1&&up=="a"){att[1].x=ship.x+ship.w-4.5; att[1].y=ship.y-10; up = "w"; cum="0"}
if(timet==1&&up=="w"){att[1].x=att[1].x; att[1].y -=0.4}
if(timet==1&&up=="w"&&att[1].y <=0){att[1].y = -10; cum = "1"; up ="s" }}
//теперь все 50 раз попаданий

if(up=='w'&&att[1].x >=space1[1].x&&att[1].x <=space1[1].x+space1[1].d && att[1].y >=space1[1].y&& att[1].y <=space1[1].y+27&&space1[1].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[1].d=death}; if(up=='w'&&att[1].x >=space1[0].x&&att[1].x <=space1[0].x+space1[0].d && att[1].y >=space1[0].y&& att[1].y <=space1[0].y+27&&space1[0].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[0].d=death}; if(up=='w'&&att[1].x >=space1[1].x&&att[1].x <=space1[1].x+space1[1].d && att[1].y >=space1[1].y&& att[1].y <=space1[1].y+27&&space1[1].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[1].d=death}; if(up=='w'&&att[1].x >=space1[2].x&&att[1].x <=space1[2].x+space1[2].d && att[1].y >=space1[2].y&& att[1].y <=space1[2].y+27&&space1[2].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[2].d=death}; if(up=='w'&&att[1].x >=space1[3].x&&att[1].x <=space1[3].x+space1[3].d && att[1].y >=space1[3].y&& att[1].y <=space1[3].y+27&&space1[3].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[3].d=death}; if(up=='w'&&att[1].x >=space1[4].x&&att[1].x <=space1[4].x+space1[4].d && att[1].y >=space1[4].y&& att[1].y <=space1[4].y+27&&space1[4].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[4].d=death}; if(up=='w'&&att[1].x >=space1[5].x&&att[1].x <=space1[5].x+space1[5].d && att[1].y >=space1[5].y&& att[1].y <=space1[5].y+27&&space1[5].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[5].d=death}; if(up=='w'&&att[1].x >=space1[6].x&&att[1].x <=space1[6].x+space1[6].d && att[1].y >=space1[6].y&& att[1].y <=space1[6].y+27&&space1[6].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[6].d=death}; if(up=='w'&&att[1].x >=space1[7].x&&att[1].x <=space1[7].x+space1[7].d && att[1].y >=space1[7].y&& att[1].y <=space1[7].y+27&&space1[7].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[7].d=death}; if(up=='w'&&att[1].x >=space1[8].x&&att[1].x <=space1[8].x+space1[8].d && att[1].y >=space1[8].y&& att[1].y <=space1[8].y+27&&space1[8].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[8].d=death}; if(up=='w'&&att[1].x >=space1[9].x&&att[1].x <=space1[9].x+space1[9].d && att[1].y >=space1[9].y&& att[1].y <=space1[9].y+27&&space1[9].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[9].d=death}; if(up=='w'&&att[1].x >=space1[10].x&&att[1].x <=space1[10].x+space1[10].d && att[1].y >=space1[10].y&& att[1].y <=space1[10].y+27&&space1[10].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[10].d=death}; if(up=='w'&&att[1].x >=space1[11].x&&att[1].x <=space1[11].x+space1[11].d && att[1].y >=space1[11].y&& att[1].y <=space1[11].y+27&&space1[11].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[11].d=death}; if(up=='w'&&att[1].x >=space1[12].x&&att[1].x <=space1[12].x+space1[12].d && att[1].y >=space1[12].y&& att[1].y <=space1[12].y+27&&space1[12].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[12].d=death}; if(up=='w'&&att[1].x >=space1[13].x&&att[1].x <=space1[13].x+space1[13].d && att[1].y >=space1[13].y&& att[1].y <=space1[13].y+27&&space1[13].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[13].d=death}; if(up=='w'&&att[1].x >=space1[14].x&&att[1].x <=space1[14].x+space1[14].d && att[1].y >=space1[14].y&& att[1].y <=space1[14].y+27&&space1[14].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[14].d=death}; if(up=='w'&&att[1].x >=space1[15].x&&att[1].x <=space1[15].x+space1[15].d && att[1].y >=space1[15].y&& att[1].y <=space1[15].y+27&&space1[15].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[15].d=death}; if(up=='w'&&att[1].x >=space1[16].x&&att[1].x <=space1[16].x+space1[16].d && att[1].y >=space1[16].y&& att[1].y <=space1[16].y+27&&space1[16].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[16].d=death}; if(up=='w'&&att[1].x >=space1[17].x&&att[1].x <=space1[17].x+space1[17].d && att[1].y >=space1[17].y&& att[1].y <=space1[17].y+27&&space1[17].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[17].d=death}; if(up=='w'&&att[1].x >=space1[18].x&&att[1].x <=space1[18].x+space1[18].d && att[1].y >=space1[18].y&& att[1].y <=space1[18].y+27&&space1[18].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[18].d=death}; if(up=='w'&&att[1].x >=space1[19].x&&att[1].x <=space1[19].x+space1[19].d && att[1].y >=space1[19].y&& att[1].y <=space1[19].y+27&&space1[19].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[19].d=death}; if(up=='w'&&att[1].x >=space1[20].x&&att[1].x <=space1[20].x+space1[20].d && att[1].y >=space1[20].y&& att[1].y <=space1[20].y+27&&space1[20].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[20].d=death}; if(up=='w'&&att[1].x >=space1[21].x&&att[1].x <=space1[21].x+space1[21].d && att[1].y >=space1[21].y&& att[1].y <=space1[21].y+27&&space1[21].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[21].d=death}; if(up=='w'&&att[1].x >=space1[22].x&&att[1].x <=space1[22].x+space1[22].d && att[1].y >=space1[22].y&& att[1].y <=space1[22].y+27&&space1[22].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[22].d=death}; if(up=='w'&&att[1].x >=space1[23].x&&att[1].x <=space1[23].x+space1[23].d && att[1].y >=space1[23].y&& att[1].y <=space1[23].y+27&&space1[23].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[23].d=death}; if(up=='w'&&att[1].x >=space1[24].x&&att[1].x <=space1[24].x+space1[24].d && att[1].y >=space1[24].y&& att[1].y <=space1[24].y+27&&space1[24].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[24].d=death}; if(up=='w'&&att[1].x >=space1[25].x&&att[1].x <=space1[25].x+space1[25].d && att[1].y >=space1[25].y&& att[1].y <=space1[25].y+27&&space1[25].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[25].d=death}; if(up=='w'&&att[1].x >=space1[26].x&&att[1].x <=space1[26].x+space1[26].d && att[1].y >=space1[26].y&& att[1].y <=space1[26].y+27&&space1[26].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[26].d=death}; if(up=='w'&&att[1].x >=space1[27].x&&att[1].x <=space1[27].x+space1[27].d && att[1].y >=space1[27].y&& att[1].y <=space1[27].y+27&&space1[27].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[27].d=death}; if(up=='w'&&att[1].x >=space1[28].x&&att[1].x <=space1[28].x+space1[28].d && att[1].y >=space1[28].y&& att[1].y <=space1[28].y+27&&space1[28].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[28].d=death}; if(up=='w'&&att[1].x >=space1[29].x&&att[1].x <=space1[29].x+space1[29].d && att[1].y >=space1[29].y&& att[1].y <=space1[29].y+27&&space1[29].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[29].d=death}; if(up=='w'&&att[1].x >=space1[30].x&&att[1].x <=space1[30].x+space1[30].d && att[1].y >=space1[30].y&& att[1].y <=space1[30].y+27&&space1[30].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[30].d=death}; if(up=='w'&&att[1].x >=space1[31].x&&att[1].x <=space1[31].x+space1[31].d && att[1].y >=space1[31].y&& att[1].y <=space1[31].y+27&&space1[31].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[31].d=death}; if(up=='w'&&att[1].x >=space1[32].x&&att[1].x <=space1[32].x+space1[32].d && att[1].y >=space1[32].y&& att[1].y <=space1[32].y+27&&space1[32].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[32].d=death}; if(up=='w'&&att[1].x >=space1[33].x&&att[1].x <=space1[33].x+space1[33].d && att[1].y >=space1[33].y&& att[1].y <=space1[33].y+27&&space1[33].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[33].d=death}; if(up=='w'&&att[1].x >=space1[34].x&&att[1].x <=space1[34].x+space1[34].d && att[1].y >=space1[34].y&& att[1].y <=space1[34].y+27&&space1[34].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[34].d=death}; if(up=='w'&&att[1].x >=space1[35].x&&att[1].x <=space1[35].x+space1[35].d && att[1].y >=space1[35].y&& att[1].y <=space1[35].y+27&&space1[35].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[35].d=death}; if(up=='w'&&att[1].x >=space1[36].x&&att[1].x <=space1[36].x+space1[36].d && att[1].y >=space1[36].y&& att[1].y <=space1[36].y+27&&space1[36].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[36].d=death}; if(up=='w'&&att[1].x >=space1[37].x&&att[1].x <=space1[37].x+space1[37].d && att[1].y >=space1[37].y&& att[1].y <=space1[37].y+27&&space1[37].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[37].d=death}; if(up=='w'&&att[1].x >=space1[38].x&&att[1].x <=space1[38].x+space1[38].d && att[1].y >=space1[38].y&& att[1].y <=space1[38].y+27&&space1[38].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[38].d=death}; if(up=='w'&&att[1].x >=space1[39].x&&att[1].x <=space1[39].x+space1[39].d && att[1].y >=space1[39].y&& att[1].y <=space1[39].y+27&&space1[39].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[39].d=death}; if(up=='w'&&att[1].x >=space1[40].x&&att[1].x <=space1[40].x+space1[40].d && att[1].y >=space1[40].y&& att[1].y <=space1[40].y+27&&space1[40].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[40].d=death}; if(up=='w'&&att[1].x >=space1[41].x&&att[1].x <=space1[41].x+space1[41].d && att[1].y >=space1[41].y&& att[1].y <=space1[41].y+27&&space1[41].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[41].d=death}; if(up=='w'&&att[1].x >=space1[42].x&&att[1].x <=space1[42].x+space1[42].d && att[1].y >=space1[42].y&& att[1].y <=space1[42].y+27&&space1[42].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[42].d=death}; if(up=='w'&&att[1].x >=space1[43].x&&att[1].x <=space1[43].x+space1[43].d && att[1].y >=space1[43].y&& att[1].y <=space1[43].y+27&&space1[43].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[43].d=death}; if(up=='w'&&att[1].x >=space1[44].x&&att[1].x <=space1[44].x+space1[44].d && att[1].y >=space1[44].y&& att[1].y <=space1[44].y+27&&space1[44].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[44].d=death}; if(up=='w'&&att[1].x >=space1[45].x&&att[1].x <=space1[45].x+space1[45].d && att[1].y >=space1[45].y&& att[1].y <=space1[45].y+27&&space1[45].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[45].d=death}; if(up=='w'&&att[1].x >=space1[46].x&&att[1].x <=space1[46].x+space1[46].d && att[1].y >=space1[46].y&& att[1].y <=space1[46].y+27&&space1[46].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[46].d=death}; if(up=='w'&&att[1].x >=space1[47].x&&att[1].x <=space1[47].x+space1[47].d && att[1].y >=space1[47].y&& att[1].y <=space1[47].y+27&&space1[47].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[47].d=death}; if(up=='w'&&att[1].x >=space1[48].x&&att[1].x <=space1[48].x+space1[48].d && att[1].y >=space1[48].y&& att[1].y <=space1[48].y+27&&space1[48].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[48].d=death}; if(up=='w'&&att[1].x >=space1[49].x&&att[1].x <=space1[49].x+space1[49].d && att[1].y >=space1[49].y&& att[1].y <=space1[49].y+27&&space1[49].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[49].d=death}; if(up=='w'&&att[1].x >=space1[50].x&&att[1].x <=space1[50].x+space1[50].d && att[1].y >=space1[50].y&& att[1].y <=space1[50].y+27&&space1[50].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[50].d=death}; if(up=='w'&&att[1].x >=space1[51].x&&att[1].x <=space1[51].x+space1[51].d && att[1].y >=space1[51].y&& att[1].y <=space1[51].y+27&&space1[51].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[51].d=death}; if(up=='w'&&att[1].x >=space1[52].x&&att[1].x <=space1[52].x+space1[52].d && att[1].y >=space1[52].y&& att[1].y <=space1[52].y+27&&space1[52].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[52].d=death}; if(up=='w'&&att[1].x >=space1[53].x&&att[1].x <=space1[53].x+space1[53].d && att[1].y >=space1[53].y&& att[1].y <=space1[53].y+27&&space1[53].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[53].d=death}; if(up=='w'&&att[1].x >=space1[54].x&&att[1].x <=space1[54].x+space1[54].d && att[1].y >=space1[54].y&& att[1].y <=space1[54].y+27&&space1[54].d!=death){score+=1; att[1].y=777; up ='n';cum = '1'; space1[54].d=death};



  if(times==1&&op =="n"&& space1[o].d!=death) {agt[0].x = space1[o].x-space1[o].w/2; agt[0].y = space1[o].y; op="s";agt[0].w=11}
  if (space1[o].d==death&&op!="s"){o = Math.floor((Math.random() * 54 + 0));op="n"}
  if(timet==1&&op=="s"){agt[0].x= agt[0].x;  agt[0].y+=5}
  if(timet==1&& agt[0].y>=600){agt[0].y= 900 ; agt[0].x= -100 ; o = Math.floor((Math.random() * 54 + 0));op="n"; agt[0].w=death }
    if(timet==1&&agt[0].x >=ship.x&&agt[0].x <=ship.x+ship.d && agt[0].y >=ship.y){o = Math.floor((Math.random() * 54 + 0)); agt[0].x= -100 ;op="n"; lives--; livet.pop() }
    if(lives == 0){shipi.src ="icon/deathi.png"; op=1; win="GameOver"; downs="n"; cum = "0"}
if(score == 55){op=1; win="Win"}

}
let inter =setInterval(drawspace, 10)
//  else if(downs=="a" && space1[0].x<=20 && times == 5){ downs = "w"}
  //if(times == 5&& dir == "w"){ty[0]+=27.5; downs = "d"}
//}}
