window.onload = () => {
	//We create the canvas and its context
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	let frameId = null;
	let obstaclesId = null;

	//We create instances of the classes we want to paint in the canvas
	//using the information we decided on their constructors
	const background = new Background(ctx);
	

	

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
	

}

//Start the game when we click on the start button
document.getElementById('start-button').onclick = () => {
	gameLoop();
};



















};