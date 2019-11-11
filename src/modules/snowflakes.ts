export class Snowflake {
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-3, 3);
    private ySpeed: number = random(-3, 3);
    private stopped: boolean = false;
    private color: string = "white";

    /* TODO REQUIRED - Make this work.
    The snowflakes should drift slowly downward. I have implemented only the draw() method.
     * You can base the rest of the behavior after bubbles, with only a few changes. */

    // make color and borderColor parameters

    constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }

    public move(): void {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }

    private doBorderBehavior() {
        if (this.onYEdge()) {
            this.y = - (this.size / 2);
            this.x = random(1, width - length / 4);
            this.ySpeed = random(2, 10);
            this.size = random(20, 70);
        }
    }

    private onYEdge(): boolean {
        if (this.y - (this.size / 2) >= 750) {
            return true;
        } else {
            return false;
        }
    }
}
