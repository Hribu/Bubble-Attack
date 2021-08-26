window.onload = () => {
	//We create the canvas and its context
	const gamePage = document.getElementById('game-page')
	const startPage = document.getElementById('start-page')
	const losePage = document.getElementById('game-over-page')
	const winPage = document.getElementById('game-winning-page')

	const tryAgainBtnLose = document.getElementById('restartLose')
	const tryAgainBtnWin = document.getElementById('restartWin')

	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	
	let frameId = null;
	let bubbleId = null;
	let laserId = null;
	var laserSound;
	// let laserSound = new Sound('../sounds/gunm.mp3')
	
	//create an arrays to store bubbles and lasers 
	let bubblesArray = [];
	let laserArray = [];


	//We create instances of the classes we want to paint in the canvas
	//using the information we decided on their constructors
	const background = new Background(ctx);
	const player = new Player(ctx, canvas.width / 2 - 25, canvas.height - 110);
	
	
//create laser bullets 

    function createLasers (){
	let laser = new Laser(player, ctx);
	laserArray.push(laser)
	}



   // flags
   let collision = false;  
   let hit = false    
        

     
   const score = {
	points: 0,
	draw: function () {
		ctx.font = '30px Arial';
		ctx.fillStyle = 'green';
		ctx.fillText('Score: ' + this.points, 100, 50);
	}
};
	
	     

	
	let loseCondition = false
	let gameStarted = false // I write logic and put this under the start button on-click Event to toggle to true 

    //This is where the game logic happens-- Game loop starts here -----------------------------------------------------------
    // WIN CONDITION CHECKER FUNCTION
    function checkWin() {
 		if(score.points >= 20){
			gamePage.style.display='none';
			winPage.style.display='flex';    
			clearInterval(frameId);
        	clearInterval(bubbleId);
 		}
        
    }

    // LOSING FUNCTION
    function playerLost() {
		if(loseCondition){
				gamePage.style.display='none';
				losePage.style.display='flex'
		}
     

    }


    function gameLoop() {
//SPAWNING Bubbles		
//create an interval to keep adding Bubbles  to the array  
	if(!bubbleId && gameStarted){
		bubbleId = setInterval(function () {
			let bubble = new Bubbles(
				ctx, //canvas context
				// Math.ceil(Math.random() * 1) //position   
				0
			);
			bubblesArray.push(bubble);
		}, 2000); }

	//0- Create a loop to animate the game
	frameId = requestAnimationFrame(gameLoop);

	
	

	//1- Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//2- paint the objects
	background.draw();
	player.draw();
	score.draw();
	playerLost();
	checkWin() 
	
	//3- Loop through the array and print and move every obstacle
	bubblesArray.forEach((eachBubble) => {
		eachBubble.draw();
		eachBubble.move();
		checkCollision(player, eachBubble)
		
		
		
	});
	bubblesArray.filter((eachBubble) => {
		if (eachBubble.y > canvas.height) {
			return false
		}
		return true
	})

	//4- Loop through the array and print and move every obstacle
	laserArray.forEach((eachLaser, i) => {
		eachLaser.drawLaser();
		eachLaser.moveLaser();
		checkCollisionLaser(eachLaser, i)
		
	});
	laserArray.filter((eachLaser) => {
		if (eachLaser.y < 0) {
			return false;
		}
		return true;
	})

} 

// Game loop ends here -------------------------------------------------------------------------------------



//checkCollision laser vs  bubble 
  function checkCollisionLaser(laser, j){
	let newBubblesArray = bubblesArray.slice();
	let newLaserArray = laserArray.slice();
	for(let i=0;i<bubblesArray.length;i++){
			 if(!bubblesArray[i]) {
				 continue;
			 }
			 
			 if (laser.y <= bubblesArray[i].y + bubblesArray[i].height && laser.y >= bubblesArray[i].y) {
				 if (laser.x >= bubblesArray[i].x && laser.x <= bubblesArray[i].x + bubblesArray[i].width) {
					 score.points +=10;
					 
					newBubblesArray.splice(i, 1);
					newLaserArray.splice(j, 1);
					
					console.log ("i have a hit ")
				 }
			 }
	 }
	 bubblesArray = newBubblesArray;
	 laserArray = newLaserArray;
 } 

//checkCollision player vs  bubble 
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
        console.log("Bubbles have destroyed the city!")
		//alert("Bubbles have destroyed the city!");
		gameStarted = !gameStarted;
		loseCondition = true
       // window.location.reload();
      }
}


//Start the game when we click on the start button
document.getElementById('start-button').onclick = () => {
	gameLoop();
	gameStarted = !gameStarted;
	// this.winnerPage.style.display = 'flex'
	gamePage.style.display='flex'
	startPage.style.display='none'
};

tryAgainBtnLose.onclick = () => {
		window.location.reload();
		// gamePage.style.display='flex';
		// losePage.style.display='none';
		// gameLoop();
};
tryAgainBtnWin.onclick = () => {
		window.location.reload();
		// gamePage.style.display='flex';
		// losePage.style.display='none';
		// gameLoop();
};

//Add an event listener to move the player with the arrow keys
	//Keyboard events checker => https://keycode.info/

	window.addEventListener('keydown', movePlayer);

	function movePlayer(event) {
		event.preventDefault();
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
					laserSound = new Sound('./sounds/gunm.mp3')
					laserSound.play()
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






};