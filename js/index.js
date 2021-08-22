window.onload = () => {
	//We create the canvas and its context
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	let frameId = null;
	let obstaclesId = null;

	//We create instances of the classes we want to paint in the canvas
	//using the information we decided on their constructors
	const background = new Background(ctx);
	const car = new Car(ctx, canvas.width / 2 - 25, canvas.height - 110);

	//create an array to store obstacles
	const obstaclesArray = [];

	const score = {
		points: 0,
		draw: function () {
			ctx.font = '30px Arial';
			ctx.fillStyle = 'black';
			ctx.fillText('Score: ' + this.points, 200, 50);
		}
	};

	
};