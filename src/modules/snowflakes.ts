export class Snowflake {
    private x: number;
    private y: number;
    private size: number;
    private ySpeed: number = random(1, 3);
    private stopped: boolean = false;
    private speedUp: boolean = false;
    private color: string = "white";

    constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    public oneClick() {
        this.speedUp = false;
    }

    public twoClick() {
        this.speedUp = true;
        this.ySpeed = random(0.1, 0.3);
    }

    public moveAfterFreeze() {
        if (this.speedUp == true) {
            if (this.ySpeed >= 0.1 && this.ySpeed <= 30) {
                this.ySpeed = this.ySpeed * 1.0035;
            }
            this.y = this.y + this.ySpeed;
        }
        this.doBorderBehavior();
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
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }
    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    public touchingMouse(): boolean {
        return this.distFromMouse() < this.size / 2;
    }

    private doBorderBehavior() {
        if (this.onYEdge()) {
            this.y = 0;
            this.x = random(1, width - length / 4);
            this.size = random(20, 30);
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
