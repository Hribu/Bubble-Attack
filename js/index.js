window.onload = () => {
	//We create the canvas and its context
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	let frameId = null;
	let bubbleId = null;
	

	//We create instances of the classes we want to paint in the canvas
	//using the information we decided on their constructors
	const background = new Background(ctx);
	const player = new Player(ctx, canvas.width / 2 - 25, canvas.height - 110);
	//const laser =  new Laser(this.player, this.fps);
	const bubbles = new Bubbles(ctx);
	
	

	



//create an array to store bubble
   const bubblesArray = [];

      /* //SPAWNING Bubbles
   spawnBubble = () => {
    this.bubblesArray.push(new Bubbles());
  };
  console.log(bubblesArray);

	//create an interval to keep adding Bubbles  to the array  from race car
	bubbleId = setInterval(function () {
		let bubble = new Bubbles(
			ctx, //canvas context
			Math.random() * canvas.width - 200, //position X
			0, //position Y
			Math.random() * 50 + 100, //width
			Math.random() * 15 + 10, //height
			Math.ceil(Math.random() * 3) //speed   
		);

		

		bubblesArray.push(bubble);
	}, 8000); */

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
	bubbles.draw();
	

	
	
//3- Loop through the array and print and move every obstacle
bubblesArray.forEach((eachBubble) => {
	eachBubble.draw();
	eachBubble.move();
	
});
	

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

			default:
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