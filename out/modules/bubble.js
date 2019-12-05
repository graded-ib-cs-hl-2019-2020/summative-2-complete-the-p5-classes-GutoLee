export class Bubble {
    constructor(x, y, size, color = "#FFFFFFA0", borderColor = "#00000030") {
        this.xSpeed = random(-0.3, 0.3);
        this.ySpeed = random(-1, -0.1);
        this.stopped = false;
        this.speedUp = false;
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.borderColor = borderColor;
    }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    oneClick() {
        this.speedUp = false;
    }
    twoClick() {
        this.speedUp = true;
        this.xSpeed = random(-0.1, 0.1);
        this.ySpeed = random(-0.1, -0.3);
    }
    moveAfterFreeze() {
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
    draw() {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }
    move() {
        if (this.stopped == false) {
            this.wiggle();
            this.float();
            this.doBorderBehavior();
        }
    }
    wiggle() {
        this.x = this.x + this.xSpeed;
    }
    float() {
        this.y = this.ySpeed + this.y;
    }
    doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        }
        else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        }
        else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
//# sourceMappingURL=bubble.js.map