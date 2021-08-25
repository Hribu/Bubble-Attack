window.onload = () => {
	//We create the canvas and its context
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	let frameId = null;
	let bubbleId = null;
	let laserId = null;
	

	//We create instances of the classes we want to paint in the canvas
	//using the information we decided on their constructors
	const background = new Background(ctx);
	const player = new Player(ctx, canvas.width / 2 - 25, canvas.height - 110);
	
	
	let collision = false
	


//create an array to store bubble
   const bubblesArray = [];
   const laserArray = [];

     //SPAWNING Bubbles

	//create an interval to keep adding Bubbles  to the array  
	bubbleId = setInterval(function () {
		let bubble = new Bubbles(
			ctx, //canvas context
			Math.ceil(Math.random() * 1.5) //speed   
		);
		bubblesArray.push(bubble);
	}, 2000); 

	//create laser bullets 

	function createLasers (){
	let laser = new Laser(player, ctx);
	laserArray.push(laser)
	}

    //This is where the game logic happens
    function gameLoop() {
	//0- Create a loop to animate the game
	frameId = requestAnimationFrame(gameLoop);

	//Check if the game is working with a console log
	console.log('Game Started');

	//1- Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//2- paint the objects
	background.draw();
	player.draw();

	
	
	
	
	
//3- Loop through the array and print and move every obstacle
bubblesArray.forEach((eachBubble) => {
	eachBubble.draw();
	eachBubble.move();
	checkCollision(player, eachBubble)

	//console.log('this is the each bubble', eachBubble)
	
});


//4- Loop through the array and print and move every obstacle
laserArray.forEach((eachLaser) => {
	eachLaser.drawLaser();
	eachLaser.moveLaser();
	//checkCollision(player, eachBubble)
});
	

}

function checkCollision (player, bubble) {
	collision = 
	(player.x < bubble.x + bubble.width &&         // check left side of element (ship or bullet)
	player.x + player.width > bubble.x &&           // check right side
	player.y < bubble.y + bubble.height &&         // check top side
	player.y + player.height > bubble.y);           // check bottom side

	// IMPORTANT: if the ship crashes the game is Over
    if (collision) {
        clearInterval(frameId);
        clearInterval(bubbleId);
        alert("Game Over");
        window.location.reload();
      }
}

//Start the game when we click on the start button
document.getElementById('start-button').onclick = () => {
	gameLoop();
};


//Add an event listener to move the player with the arrow keys
	//Keyboard events checker => https://keycode.info/

	window.addEventListener('keydown', movePlayer);

	function movePlayer(event) {
		
		switch (event.keyCode) {
			case 37:
				if (player.x > 0) player.x -= 15;
				break;

			case 39:
				if (player.x < canvas.width - player.width) player.x += 15;
				break;

			case 87:
				if (event.repeat) {
					break;
				}
				else {
					createLasers();
					laserId = setInterval(createLasers, 500);
					break;
				}
		}
	}

	window.addEventListener('keyup', stopLaser);

	// handle keyup events
	function stopLaser (event) {
		switch (event.keyCode) {
			case 87:            // space 
				clearInterval(laserId);
			break;
		}
	}


	//Add an event listener to shoot 
	//Keyboard events checker => https://keycode.info/

	/*window.addEventListener('keydown', shoot);

	function shoot(event) {
		switch (event.keyCode) {
			case 32:
				laser.speed += 15;
				break;
			default:g
				break;
		}
	}
*/














};