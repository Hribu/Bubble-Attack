# Bubble-Attack

// link github.io


## Description
Do you want to save the world ?? 

In the game, players must finish a round-the-world quest to destroy bouncing balloons that are terrorize several of Earth's landmarks and cities. 
You have to move horizontally to shoot bubbles. The more bubbles you draw, the more points you will earn. If you touch a bubble, you will explode and the city will be lost.
Destroy all the Bubbles to save the City!


## MVP
* The User player moves horizontally at the bottom of the screen
* The computer generate bubbles from random places that are coming down from all directions.
* Each destroyed bubble increases the score by 10 points
 * Each destroyed bubble increases the score by 10 points


## Backlog
* Bounce the bubbles when they hit the walls



## Data structure

## index.js
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

## player.js

* player(){x, y, direction, size}
* draw(){}
* move(){}
* checkCollision(){}


## bubbles.js
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
* bubbles - draw
* bubbles - move
* laser - draw
* laser - move
* 
* game - checkCollision(){}
* game - GameOver
* game - addEventListener



## Additional Links


### Trello
[Link Trello Board Bubble-Attack](https://trello.com/b/RB22elOJ/project-1-bubble-attack-game)


### Slides
[Link Slides.com](http://slides.com)
