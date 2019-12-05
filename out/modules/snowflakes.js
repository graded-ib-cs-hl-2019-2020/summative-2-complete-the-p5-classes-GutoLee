export class Snowflake {
    constructor(x, y, size) {
        this.ySpeed = random(1, 3);
        this.stopped = false;
        this.speedUp = false;
        this.color = "white";
        this.x = x;
        this.y = y;
        this.size = size;
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
        this.ySpeed = random(0.1, 0.3);
    }
    moveAfterFreeze() {
        if (this.speedUp == true) {
            if (this.ySpeed >= 0.1 && this.ySpeed <= 30) {
                this.ySpeed = this.ySpeed * 1.0035;
            }
            this.y = this.y + this.ySpeed;
        }
        this.doBorderBehavior();
    }
    draw() {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }
    move() {
        if (this.stopped == false) {
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }
    doBorderBehavior() {
        if (this.onYEdge()) {
            this.y = 0;
            this.x = random(1, width - length / 4);
            this.size = random(20, 30);
        }
    }
    onYEdge() {
        if (this.y - (this.size / 2) >= 750) {
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=snowflakes.js.map