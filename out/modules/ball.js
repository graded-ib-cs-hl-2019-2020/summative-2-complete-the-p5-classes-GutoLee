export class Ball {
    constructor(x, y, size) {
        this.xSpeed = random(-3, 3);
        this.ySpeed = random(-3, 3);
        this.stopped = false;
        this.speedUp = false;
        this.color = this.getRandColor();
        this.borderColor = "black";
        this.iAmSpeed = document.getElementById("speedup");
        this.x = x;
        this.y = y;
        this.size = size;
    }
    getRandColor() {
        let color = Math.floor(Math.random() * 16777216).toString(16);
        return "#000000".slice(0, -color.length) + color;
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
        this.ySpeed = random(-0.1, 0.1);
        this.iAmSpeed.play();
    }
    moveAfterFreeze() {
        if (this.speedUp == true) {
            if (this.xSpeed <= 30 && this.xSpeed >= -30) {
                this.xSpeed = this.xSpeed * 1.004;
            }
            if (this.ySpeed <= 30 && this.ySpeed >= -30) {
                this.ySpeed = this.ySpeed * 1.004;
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
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
        }
        this.doBorderBehavior();
    }
    doBorderBehavior() {
        if (this.x < this.size / 2) {
            this.x = this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        else if (this.x > width - this.size / 2) {
            this.x = width - this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < this.size / 2) {
            this.y = this.size / 2;
            this.ySpeed = -this.ySpeed;
        }
        else if (this.y > height - this.size / 2) {
            this.ySpeed = -this.ySpeed;
            this.y = height - this.size / 2;
        }
    }
}
//# sourceMappingURL=ball.js.map