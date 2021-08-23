# Bubble-Attack

// link github.io


## Description
Do you want to save the world ?? 

In the game, players must finish a round-the-world quest to destroy bouncing balloons that are terrorising several of Earth's landmarks and cities. 
You need to move on the chorizontally in order to shoot the bubbles . The more bubbles you  shoot  the more points you will earn. If a ball toch you you will day and the city will be lost .

Distroy all the Bubbles to save the Earth!


## MVP
* The User player moves horizontally at the bottom of the screen
* The computer player throws from random places the ball to the User player
* Every time User player catches the ball the other player throws another pass
* Every caught pass increases the score by 10 points
* If the User player doesn't catch the ball, the game ends


## Backlog
* Choose between different players to play the game
* Different types of balls with different scoring points for each
* Gatorade (Energy system) - refuels health catching the drinks to remain more in the game
* High Scores shown at the end of the game (Starting Five)
* Ranking score (level 1: noob, ... last level: you're the G.O.A.T)


## Data structure

## main.js
- splashScreen(){}
- gameScreen () {}
- gameoverScreen () {}

## game.js

* Game(){}
* drawCanvas(){}
* StarLoop (){}
* checkCollisions(){}
* updateCanvas(){}
* clearCanvas (){}
* GameOver(){}

## userPlayer.js

* player(){x, y, direction, size}
* draw(){}
* move(){}
* catchPass(){}
* checkScreenCollision(){}

## cpuPlayer.js

* player(){x, y, direction, size}
* draw(){}
* move(){}
* throwPass(){}

## ball.js
* draw(){}
* move(){}
* checkCollision(){}


## States y States Transitions

* build a SplashScreen(){}
* build a GameScreen (){}
* build a GameOverScreen(){}




## Task
* main - buildDom
* main - buildSplashScreen
* main - addEventListener
* main - buildGameScreen
* main - buildGameOverScreen
* game - startLoop
* game - buildCanvas
* game - updateCanvas
* game - drawCanvas
* UserPlayer - draw
* UserPlayer - move
* CpuPlayer - draw
* CpuPlayer - move
* Ball - draw
* CpuPlayer - throwsBall
* game - checkCollision(){}
* game - GameOver
* game - addEventListener



## Additional Links


### Trello
[Link Trello Board Bubble-Attack](https://trello.com/b/RB22elOJ/project-1-bubble-attack-game)


### Slides
[Link Slides.com](http://slides.com)
