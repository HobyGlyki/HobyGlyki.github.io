const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "icon/ground.png";

const foodImg = new Image();
foodImg.src = "icon/food.png";

const portalImg  = new Image();
portalImg.src = "icon/portal.png"

const portapImg = new Image();
portapImg.src = "icon/portap.png"


let box = 32;


let pon = {
	x: 2* box,
	y:  4* box,
}
let pom = {
	x: 18 * box,
	y:  2* box,
}
let por = {
	x: 2 * box,
	y:  16* box,
}
let pob = {
	x: 16 * box,
	y:  16* box,
}

let score = 0;

let food = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box,
};

let portal = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box,
};
let portap = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box,
};

let snake = [];
snake[0] = {
	x: 9 * box,
	y: 10 * box
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
	if(event.keyCode == 37 && dir != "right")
		dir = "left";
	else if(event.keyCode == 38 && dir != "down")
		dir = "up";
	else if(event.keyCode == 39 && dir != "left")
		dir = "right";
	else if(event.keyCode == 40 && dir != "up")
		dir = "down";
		else if(event.keyCode == 100)
			dir = "12";
}

function eatTail(head, arr) {
	for(let i = 0; i < arr.length; i++) {
		if(head.x == arr[i].x && head.y == arr[i].y){
		snake = [1]; snake.pop();	dir = "none";
		portap = {
		x: Math.floor((Math.random() * 17 + 1)) * box,
		y: Math.floor((Math.random() * 15 + 3)) * box,
		};
		portal = {
		x: Math.floor((Math.random() * 17 + 1)) * box,
		y: Math.floor((Math.random() * 15 + 3)) * box,
		};
		food = {
			x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 3)) * box,
		}; score = 0;
}}}
let: k = 0
function drawGame() {
	if (k == 0) {dir4="0"; dir3= "0"; dir2 = "0";dir1 = "0"; k = 1;}




if(dir1 == "0") pon.x -= box ;
if(dir1 == "0") pon.y -= box ;
if(dir1 == "1") pon.x += box ;
if(dir1 =="1") pon.y += box ;

if(pon.y < box * 4)
dir1 = 1;
if(pon.y > box * 16)
dir1 = 0;

if(dir2 == "0") pom.x -= box ;
if(dir2 == "0") pom.y += box ;
if(dir2 == "1") pom.x += box ;
if(dir2 =="1") pom.y -= box ;

if(pom.y > box * 16)
dir2 = 1;
if(pom.y < box * 4)
dir2 = 0;

if(dir3 == "0") por.x -= box ;
if(dir3 == "0") por.y += box ;
if(dir3 == "1") por.x += box ;
if(dir3 =="1") por.y -= box ;

if(por.y > box * 16)
dir3 = 1;
if(por.y < box * 4)
dir3 = 0;

if(dir4 == "0") pob.x += box ;
if(dir4 == "0") pob.y += box ;
if(dir4 == "1") pob.x -= box ;
if(dir4 =="1") pob.y -= box ;

if(pob.y > box * 16)
dir4 = 1;
if(pob.y < box * 4)
dir4 = 0;




	ctx.drawImage(ground, 0, 0);

	ctx.drawImage(foodImg, food.x, food.y);

  	ctx.drawImage(portalImg, portal.x, portal.y);

    	ctx.drawImage(portapImg, portap.x, portap.y);

	for(let i = 0; i < snake.length; i++) {
		ctx.fillStyle = i == 0 ? "red" : "green";
		ctx.fillRect(snake[i].x, snake[i].y, box, box);
	}
{ ctx.fillStyle = "white";
	ctx.fillRect(pon.x, pon.y, box, box)

		ctx.fillRect(pom.x, pom.y, box, box)

ctx.fillRect(por.x, por.y, box, box)
ctx.fillRect(pob.x, pob.y, box, box)}



ctx.fillStyle = "black"
ctx.font = "50px Arial"
ctx.fillText('Score =',box * 3, box * 1.5)
ctx.fillText(score, box * 9, box * 1.5)
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

  if(snakeX == pon.x && snakeY == pon.y ||snakeX == por.x && snakeY == por.y || snakeX == pom.x && snakeY == pom.y || snakeX == pob.x && snakeY == pob.y){

		snakeX = 9 * box; snakeY = 10 * box; dir = "none"; snake = [1]; snake.pop(); score = 0;
		portap = {
		x: Math.floor((Math.random() * 17 + 1)) * box,
		y: Math.floor((Math.random() * 15 + 3)) * box,
		};
		portal = {
		x: Math.floor((Math.random() * 17 + 1)) * box,
		y: Math.floor((Math.random() * 15 + 3)) * box,
		};
		food = {
			x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 3)) * box,

	}}


	if(snakeX == food.x && snakeY == food.y) {
		score++;
		food = {
			x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 3)) * box,
		};
	} else
		snake.pop();

    if(snakeX == portal.x && snakeY == portal.y){
snakeX = portap.x - box
snakeY = portap.y
portal = {
x: Math.floor((Math.random() * 17 + 1)) * box,
y: Math.floor((Math.random() * 15 + 3)) * box,
};
portap = {
x: Math.floor((Math.random() * 17 + 1)) * box,
y: Math.floor((Math.random() * 15 + 3)) * box,
};
}

if(snakeX == portap.x && snakeY == portap.y){
snakeX = portal.x + box
snakeY = portal.y
portap = {
x: Math.floor((Math.random() * 17 + 1)) * box,
y: Math.floor((Math.random() * 15 + 3)) * box,
};
portal = {
x: Math.floor((Math.random() * 17 + 1)) * box,
y: Math.floor((Math.random() * 15 + 3)) * box,
};
}

	if(snakeX < box || snakeX > box * 17
		|| snakeY < 3 * box || snakeY > box * 17){
	snakeX = 9 * box; snakeY = 10 * box; dir = "none"; snake = [1]; snake.pop(); score = 0;
	portap = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box,
	};
	portal = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box,
	};
	food = {
		x: Math.floor((Math.random() * 17 + 1)) * box,
		y: Math.floor((Math.random() * 15 + 3)) * box,
	};
}
else {
}

	if(dir == "left") snakeX -= box;
	if(dir == "right") snakeX += box;
	if(dir == "up") snakeY -= box;
	if(dir == "down") snakeY += box;
	if(dir == "none"){ snakeY = 10 * box; snakeX = 9 * box;	}
	if(dir == "12") score = 12

	let newHead = {
		x: snakeX,
		y: snakeY
	};

	eatTail(newHead, snake);

	snake.unshift(newHead);

if(score == 15){win()
}

}
function nope(){ //выключение окна пороля
	var   pass = document.getElementById('pass').value;
			win  = document.getElementById('pass-window');
			mask = document.getElementById('mask');
			osn = document.getElementById('osnowa');
			fon = document.getElementById('Fon');
			secr = document.getElementById('Secret')
		win.style.display='none';
		mask.style.display='none';
					fon.style.display='block';
}
function xuy() { // включение окна пороля. А ещё мой НЕ СМЕШНОЙ юмор
	var pass = document.getElementById('pass').value;
			win  = document.getElementById('pass-window');
			mask = document.getElementById('mask');
			osn = document.getElementById('osnowa');
			Fon = document.getElementById('Fon');
			Secr = document.getElementById('Secret')
	win.style.display='block';
	fon.style.display='none';
	mask.style.display='block';
}
function Accept() { // пороль.
var pass = document.getElementById('pass').value;
		log = document.getElementById('login').value;
		win  = document.getElementById('pass-window');
		mask = document.getElementById('mask');
		osn = document.getElementById('osnowa');
		Fon = document.getElementById('Fon');
		secr = document.getElementById('Secret')
		wrp = document.getElementById('wrapper')
if ( log == 'Adrian' && pass =='minikills') { // Указываем пароль и Логин
		win.style.display='none';
		mask.style.display='none';
		fon.style.display='none';
		secr.style.display='block';
} else { alert('Доступ запрещён'); }
}

function win() {
		dir = "none"; clearInterval(game)
	{ctx.fillStyle="white"
	ctx.fillRect(0, 0, box * 19, box * 19)}
	{ctx.fillStyle = "black"
	ctx.font = "50px Arial"
	ctx.fillText('Ты выиграл, вот тебе',box * 3.6, box * 1.5)
		ctx.fillText('приз',box * 9, box * 3.5)
				ctx.fillText('Ключ: 13-21-18-4-5-18',box * 3, box * 5.5)
				fon.style.display='block';
}
		}

let game = setInterval(drawGame, 150);
