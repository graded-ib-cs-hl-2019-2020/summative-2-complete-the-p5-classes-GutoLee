import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
let balls = [];
let bubbles = [];
let snowflakes = [];
let timesClicked = 0;
function setup() {
    let numBalls = 10;
    let numBubbles = 15;
    let numFlakes = 30;
    createCanvas(1425, 750);
    for (let i = 0; i < numBalls - 1; i++) {
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
    for (let i = 0; i < numBubbles - 1; i++) {
        bubbles[i] = new Bubble(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
    for (let i = 0; i < numFlakes - 1; i++) {
        snowflakes[i] = new Snowflake(random(25, width - 25), random(25, height - 25), random(20, 30));
    }
}
function draw() {
    background("skyblue");
    for (let i = 0; i < balls.length - 1; i++) {
        balls[i].draw();
        balls[i].move();
        balls[i].moveAfterFreeze();
    }
    for (let i = 0; i < bubbles.length - 1; i++) {
        bubbles[i].draw();
        bubbles[i].move();
        bubbles[i].moveAfterFreeze();
    }
    for (let i = 0; i < snowflakes.length - 1; i++) {
        snowflakes[i].draw();
        snowflakes[i].move();
        snowflakes[i].moveAfterFreeze();
    }
}
function mousePressed() {
    timesClicked = timesClicked + 1;
    for (let i = 0; i < balls.length - 1; i++) {
        balls[i].stop();
        if (timesClicked % 2 == 0) {
            balls[i].twoClick();
        }
        else {
            balls[i].oneClick();
        }
    }
    for (let i = 0; i < bubbles.length - 1; i++) {
        bubbles[i].stop();
        if (timesClicked % 2 == 0) {
            bubbles[i].twoClick();
        }
        else {
            bubbles[i].oneClick();
        }
    }
    for (let i = 0; i < snowflakes.length - 1; i++) {
        snowflakes[i].stop();
        if (timesClicked % 2 == 0) {
            snowflakes[i].twoClick();
        }
        else {
            snowflakes[i].oneClick();
        }
    }
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
//# sourceMappingURL=index.js.map