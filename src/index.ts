/* Programming Summative 2

    This summative comes in 2 parts.

    Part 1 - Programming
    ---------------------
    Your PRIMARY goal is to get the program running. You can find missing elements by looking for comments marked
    TODO REQUIRED. If they are all fixed, the program should run with 10 red balls, 10 white snowflakes, and
    10 transluscent bubbles.

    Your SECONDARY goal is to implement the optional TODO requirements and any other fun things you think of.

    Part 2 - Documenting
    ------------------------
    Create UML diagrams for all three of these classes, and a flowchart that shows the basic program flow of
    index.ts. You can do these by hand (be neat!) or using an online tool - draw.io and lucidchart are both nice
    online offerings.

    For a Proficient, the documentation must be complete and the program must run and be readable.
        An Approaching might mean incomplete documentation OR hard-to-read code OR not-quite-working code
        Work your way downwrd from there
    For an Accomplished, some optional requirements or embellishments are
    required or the code must be particularly beautiful
    For an Exemplary, I would expect all optional requirements to be implemented,
    or additional features of similar or greater
        difficulty.
*/

import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";

let balls: Ball[] = [];
let bubbles: Bubble[] = [];
let snowflakes: Snowflake[] = [];
let timesClicked: number = 0;

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
        } else {
            balls[i].oneClick();
        }
    }
    for (let i = 0; i < bubbles.length - 1; i++) {
        bubbles[i].stop();
        if (timesClicked % 2 == 0) {
            bubbles[i].twoClick();
        } else {
            bubbles[i].oneClick();
        }
    }
    for (let i = 0; i < snowflakes.length - 1; i++) {
        snowflakes[i].stop();
        if (timesClicked % 2 == 0) {
            snowflakes[i].twoClick();
        } else {
            snowflakes[i].oneClick();
        }
    }
}

// do not edit the below lines
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
