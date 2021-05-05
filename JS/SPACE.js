const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "icon/grounds.png";
const tank = new Image();
tank.src = "icon/tank.png";
const shipi1  = new Image();
shipi1.src = "icon/SpaceI1.png"
const shipi  = new Image();
shipi.src = "icon/SpaceI.png"
const shipi2  = new Image();
shipi2.src = "icon/SpaceI2.png"
const death = 0

let dfell="icon/deathiF.png";
let gfell="icon/groundsF.png";
let tfell="icon/tankF.png";
let ffell="icon/SpaceI1F.png";
let sfell="icon/SpaceIF.png";


let livet = [0, 1, 2];
      let agt = [0, 1, 2];
      function fack() {
      for(let i = 0; i < 3; i++) {
        agt[i] ={
          x:-10,
          y:0,
          w:11,
          d:4}
          livet[i] ={
            x:15+(33*i),
            y:7,
            w:27*0.6,
            d:50*0.6};
  };}

let space1 = [
  { x:183.5-22,
        y:7+64, s: shipi, d:27,
        w:27, s: shipi,},
      { x:183.5-22+44,
        y:7+64, s: shipi, d:27,
        w:27, s: shipi,},
      { x:183.5-22+44*2,
        y:7+64, s: shipi, d:27,
        w:27, s: shipi,},
      { x:183.5-22+44*3,
        y:7+64, s: shipi, d:27,
        w:27, s: shipi,},
      { x:183.5-22+44*4,
        y:7+64, s: shipi, d:27,
        w:27, s: shipi,},
      { x:183.5-22+44*5,
        y:7+64, s: shipi, d:27,
        w:27, s: shipi,},
      { x:183.5-22+44*6,
        y:7+64, s: shipi, d:27,
        w:27, s: shipi,},
      { x:183.5-22+44*7, s: shipi,
        y:7+64, s: shipi, d:27,
        w:27, s: shipi,},
      { x:183.5-22+44*8,
        y:7+64, s: shipi, d:27,
        w:27, s: shipi,},
      { x:183.5-22+44*9,
        y:7+64, s: shipi, d:27,
        w:27, s: shipi,},
      { x:183.5-22+44*10,
        y:7+64, s: shipi, d:27,
        w:27, s: shipi,},

        { x:183.5-22,
    y:7+64+32, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44,
    y:7+64+32, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*2,
    y:7+64+32, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*3,
    y:7+64+32, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*4,
    y:7+64+32, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*5,
    y:7+64+32, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*6,
    y:7+64+32, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*7, s: shipi,
    y:7+64+32, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*8,
    y:7+64+32, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*9,
    y:7+64+32, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*10,
    y:7+64+32, s: shipi, d:27,
    w:27,},

    { x:183.5-22,
    y:7+64+32*2, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44,
    y:7+64+32*2, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*2,
    y:7+64+32*2, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*3,
    y:7+64+32*2, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*4,
    y:7+64+32*2, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*5,
    y:7+64+32*2, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*6,
    y:7+64+32*2, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*7, s: shipi,
    y:7+64+32*2, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*8,
    y:7+64+32*2, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*9,
    y:7+64+32*2, s: shipi, d:27,
    w:27,},
  { x:183.5-22+44*10,
    y:7+64+32*2, s: shipi, d:27,
    w:27,},

    { x:183.5-22,
    y:7+64+32*3, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44,
    y:7+64+32*3, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*2,
    y:7+64+32*3, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*3,
    y:7+64+32*3, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*4,
    y:7+64+32*3, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*5,
    y:7+64+32*3, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*6,
    y:7+64+32*3, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*7, s: shipi,
    y:7+64+32*3, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*8,
    y:7+64+32*3, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*9,
    y:7+64+32*3, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*10,
    y:7+64+32*3, s: shipi1, d:27,
    w:27,},

    { x:183.5-22,
    y:7+64+32*4, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44,
    y:7+64+32*4, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*2,
    y:7+64+32*4, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*3,
    y:7+64+32*4, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*4,
    y:7+64+32*4, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*5,
    y:7+64+32*4, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*6,
    y:7+64+32*4, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*7, s: shipi,
    y:7+64+32*4, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*8,
    y:7+64+32*4, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*9,
    y:7+64+32*4, s: shipi1, d:27,
    w:27,},
  { x:183.5-22+44*10,
    y:7+64+32*4, s: shipi1, d:27,
    w:27,},]
    var downs = "d"
    let score=0
    let iy= 4
    let lives = 3
    let up="s"
    let op="n"
    let pp="n"
    let lp="n"
    let cum ="1"
    let ll="10";
    let foo=[]
    let o = Math.floor((Math.random() * 54 + 0))
    let p = o
    let l = o
    let deathik ="icon/deathi.png"
    let chit="0"
    let dust ="n"
    let fell=1
    let swap=1
    let light = 1
    let shrift="white"
    let speed=40

let times =0
function timer() {
if(times<=speed)times+=swap
else times=0
}
let timet =0
function timer1() {
if(timet<=4)timet+=1
else timet=0
}
let timea =0
function timer2() {
if(timea!=50)timea+=1
else timea=0
}
document.addEventListener("keydown", direction);
let att = [];
att[0] ={
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

fack()
function direction(event) {
if(event.keyCode == 37&& op!=1&& ship.x>=8.5)ship.x-=5
else if(event.keyCode == 39&& op!=1&&ship.x<=754-8.5*8+10)ship.x+=5
else if(event.keyCode == 32&& cum !="0"){up = "a";}


  for(let i = 0; i < 122; i++) {
if(event.keyCode == 68){chit ="dust1";}
  if(event.keyCode != 85&&chit =="dust1"&&event.keyCode != 68) chit = "0"
if(event.keyCode == 85&&chit =="dust1"){chit ="d2"}
  if(event.keyCode != 83&&chit =="d2"&&event.keyCode != 85) chit = "0"
if(event.keyCode == 83&&chit =="d2"){chit ="d3";}
  if(event.keyCode != 84&&chit =="d3"&&event.keyCode != 83) chit = "0"
if(event.keyCode == 84&&chit =="d3"){dust = "o"; chit = "0"}

if(event.keyCode == 83&&chit=="0"){chit ="s1";}
  if(event.keyCode != 87&&chit =="s1"&&event.keyCode != 83) chit = "0"
if(event.keyCode == 87&&chit =="s1"){chit ="s2"}
  if(event.keyCode != 65&&chit =="s2"&&event.keyCode != 87) chit = "0"
if(event.keyCode == 65&&chit =="s2"){chit ="s3";}
  if(event.keyCode != 80&&chit =="s3"&&event.keyCode != 65) chit = "0"
if(event.keyCode == 80&&chit =="s3"){swap=0; chit = "0"}

if(event.keyCode == 76&&chit=="0"){chit ="l1";}
  if(event.keyCode != 73&&chit =="l1"&&event.keyCode != 76) chit = "0"
if(event.keyCode == 73&&chit =="l1"){chit ="l2"}
  if(event.keyCode != 71&&chit =="l2"&&event.keyCode != 73) chit = "0"
if(event.keyCode == 71&&chit =="l2"){chit ="l3";}
  if(event.keyCode != 72&&chit =="l3"&&event.keyCode != 71) chit = "0"
if(event.keyCode == 72&&chit =="l3"){chit="l4"}
  if(event.keyCode != 84&&chit =="l4"&&event.keyCode != 72) chit = "0"
if(event.keyCode == 84&&chit =="l4"){light=0; chit = "0"}

if(event.keyCode == 70&&chit=="0"){chit ="f1";}
  if(event.keyCode != 69&&chit =="f1"&&event.keyCode != 70) chit = "0"
if(event.keyCode == 69&&chit =="f1"){chit ="f2"}
  if(event.keyCode != 76&&chit =="f2"&&event.keyCode != 69) chit = "0"
if(event.keyCode == 76&&chit =="f2"){chit ="f3";}

  if(event.keyCode != 76&&chit =="f4") chit = "0"
if(event.keyCode == 76&&chit =="f4"){fell=3; chit = "1"}

}}
let win=" "
function drawspace() {
if( chit=="f3"&timet>=2){chit="f4"}
  timer()
    timer1()
      timer2()

  ctx.drawImage(ground, 0, 0, 754, 630)

for(let i = 0; i < space1.length; i++) { ctx.drawImage(space1[i].s, space1[i].x, space1[i].y, space1[i].d, space1[i].w)}

  ctx.drawImage(tank, ship.x, ship.y, ship.d, ship.w)


    ctx.fillStyle = shrift;
    ctx.fillRect(att[0].x, att[0].y, att[0].d, att[0].w);

      for(let i = 0; i < agt.length; i++) {
    ctx.fillStyle = "red";
    ctx.fillRect(agt[i].x, agt[i].y, agt[i].d, agt[i].w);}

  for(let i = 0; i < livet.length; i++) {
  ctx.drawImage(tank, livet[i].x, livet[i].y, livet[i].d, livet[i].w)}

ctx.fillStyle = shrift
ctx.font = "35px Arial"


ctx.fillText(win,300,300)
ctx.fillText('score '+score*fell, 640-20, 7*4)



for(let i = 0; i < space1.length; i++) {
  if(downs=="d"  && space1[54].x <=754-44&& times==5) {space1[i].x+=22}
  else if(space1[i].x >=754-44&&downs == "d") downs = "s"
  if( downs == "s"&& times == 10 ){space1[i].y+=22;}
  if(downs=="s"&&times == 1){downs = "a"}
  if(downs=="a" && space1[i].x>=7.5+22 && times == 5)space1[i].x-=22
 if(downs=="a" && space1[i].x<=7.5 && times == 10){downs = "w";space1[i].x+=22 }
  if(times ==10&&downs=="w"){space1[i].y+=27.5;}
  if(downs == "w"&& times == 5) {downs = "d"}
  if(times == 5&&space1[i].y>=ship.y-11&&space1[i].d!=death) {tank.src ="icon/deathi1.png"; op=1; win="GameOver";downs="n"; cum = "0"}
  if(dust == "o"&& timet==1){space1[i].d=death; space1[1].d=27;space1[53].d=27; ll ='o'}
  if(ll=="o"&&timet==2){dust="l"}
{
  if(space1[0].d==death && space1[1].d==death && space1[2].d==death && space1[3].d==death && space1[4].d==death && space1[5].d==death && space1[6].d==death && space1[7].d==death && space1[8].d==death && space1[9].d==death && space1[10].d==death && space1[11].d==death && space1[12].d==death && space1[13].d==death && space1[14].d==death && space1[15].d==death && space1[16].d==death && space1[17].d==death && space1[18].d==death && space1[19].d==death && space1[20].d==death && space1[21].d==death && space1[22].d==death && space1[23].d==death && space1[24].d==death && space1[25].d==death && space1[26].d==death && space1[27].d==death && space1[28].d==death && space1[29].d==death && space1[30].d==death && space1[31].d==death && space1[32].d==death && space1[33].d==death && space1[34].d==death && space1[35].d==death && space1[36].d==death && space1[37].d==death && space1[38].d==death && space1[39].d==death && space1[40].d==death && space1[41].d==death && space1[42].d==death && space1[43].d==death && space1[44].d==death && space1[45].d==death && space1[46].d==death && space1[47].d==death && space1[48].d==death && space1[49].d==death && space1[50].d==death && space1[51].d==death && space1[52].d==death && space1[53].d==death && space1[54].d==death){win="Win";op=1}}
if(timet==1&&up=="a"){att[0].x=ship.x+ship.w-4.5; att[0].y=ship.y-10; up = "w"; cum="0"}
if(timet==1&&up=="w"){att[0].x=att[0].x; att[0].y -=0.4}
if(timet==1&&up=="w"&&att[0].y <=0){att[0].y = -10; cum = "1"; up ="s" }}
//теперь все 50 раз попаданий
	for(let i = 0; i < 55; i++) {
  if(up=='w'&&att[0].x >=space1[i].x&&att[0].x <=space1[i].x+space1[i].d && att[0].y >=space1[i].y&& att[0].y <=space1[i].y+27&&space1[i].d!=death){score+=1; att[0].y=777; up ='n';cum = '1'; space1[i].d=death};
}

{
  if(times==1&&op =="n"&& space1[o].d!=death) {agt[0].x = space1[o].x-space1[o].w/2; agt[0].y = space1[o].y; op="s";agt[0].w=11}
  if (space1[o].d==death&&op=="n"){o = Math.floor((Math.random() * 54 + 0));op="n"}
  if(timet==1&&op=="s"){agt[0].x= agt[0].x;  agt[0].y+=5}
  if(timet==1&& agt[0].y>=600){agt[0].y= 900 ; agt[0].x= -100 ; o = Math.floor((Math.random() * 54 + 0));op="n"; agt[0].w=death }
  if(timet==1&&agt[0].x >=ship.x&&agt[0].x <=ship.x+ship.d &&light!=0&& agt[0].y >=ship.y&&agt[0].y <=ship.y+ship.w){o = Math.floor((Math.random() * 54 + 0)); agt[0].x= -100 ;op="n"; lives--; livet.pop() }


if(times==1&&pp =="n"&& space1[p].d!=death&& p!=o) {agt[1].x = space1[p].x-space1[p].w/2; agt[1].y = space1[p].y; pp="s";agt[1].w=11}
if (space1[p].d==death&&op=="n"){p = Math.floor((Math.random() * 54 + 0));pp="n"}
if(timet==1&&pp=="s"){agt[1].x= agt[1].x;  agt[1].y+=5}
if(timet==1&& agt[1].y>=600){agt[1].y= 900 ; agt[1].x= -100 ; p = Math.floor((Math.random() * 54 + 0));pp="n"; agt[1].w=death }
if(timet==1&&agt[1].x >=ship.x&&agt[1].x <=ship.x+ship.d&&light!=0&&  agt[1].y >=ship.y&&agt[0].y <=ship.y+ship.w){o = Math.floor((Math.random() * 54 + 0)); agt[1].x= -100 ;pp="n"; lives--; livet.pop() }


if(times==1&&lp =="n"&& space1[l].d!=death&& l!=o&& l!=p) {agt[2].x = space1[l].x-space1[l].w/2; agt[2].y = space1[l].y; lp="s";agt[2].w=11}
if (space1[l].d==death&&lp=="n"){l = Math.floor((Math.random() * 54 + 0));lp="n"}
if(timet==1&&lp=="s"){agt[2].x= agt[2].x;  agt[2].y+=5}
if(timet==1&& agt[2].y>=600){agt[2].y= 900 ; agt[2].x= -100 ; l = Math.floor((Math.random() * 54 + 0));lp="n"; agt[2].w=death }
if(timet==1&&agt[2].x >=ship.x&&agt[2].x <=ship.x+ship.d&&light!=0 && agt[2].y >=ship.y&&agt[0].y <=ship.y+ship.w){o = Math.floor((Math.random() * 54 + 0)); agt[2].x= -100 ;lp="n"; lives--; livet.pop() }
}
if(lives == 0){tank.src =deathik; op=1; win="GameOver"; downs="n"; cum = "0"}
if(score == 55){op=1; win="Win";}

if(fell==3){
deathik=dfell;
ground.src = gfell;
tank.src = tfell
shipi1.src = ffell
shipi.src = sfell
shrift='#8C1332';
lives=1;
livet.pop()
livet.pop()
speed=15
fell=2}

}
let inter =setInterval(drawspace, 9)
//  else if(downs=="a" && space1[0].x<=20 && times == 5){ downs = "w"}
  //if(times == 5&& dir == "w"){ty[0]+=27.5; downs = "d"}
//}}
