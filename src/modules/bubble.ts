
export class Bubble {
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-0.3, 0.3);
    private ySpeed: number = random(-1, -0.1);
    private stopped: boolean = false;
    private speedUp: boolean = false;
    private color: string;
    private borderColor: string;

    constructor(x: number, y: number, size: number, color: string = "#FFFFFFA0", borderColor: string = "#00000030") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.borderColor = borderColor;
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
        this.xSpeed = random(-0.1, 0.1);
        this.ySpeed = random(-0.1, -0.3);
    }

    public moveAfterFreeze() {
        if (this.speedUp == true) {
            if (this.xSpeed >= -30 && this.xSpeed <= 30) {
                this.xSpeed = this.xSpeed * 1.004;

            }
            if (this.ySpeed >= -40 && this.ySpeed <= -1) {
                this.ySpeed = this.ySpeed * 3;
            }
            this.x = this.x + this.xSpeed;
            this.y = this.y + this.ySpeed;
        }
        this.doBorderBehavior();
    }

    public draw(): void {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }

    public move(): void {
        if (this.stopped == false) {
            this.wiggle();
            this.float();
            this.doBorderBehavior();
        }
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    public touchingMouse(): boolean {
        return this.distFromMouse() < this.size / 2;
    }

    private wiggle(): void {
        this.x = this.x + this.xSpeed;
    }

    private float(): void {
        this.y = this.ySpeed + this.y;
    }

    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
