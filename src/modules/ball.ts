
export class Ball {

  private x: number;
  private y: number;
  private size: number;
  private xSpeed: number = random(-3, 3);
  private ySpeed: number = random(-3, 3);
  private stopped: boolean = false;
  private speedUp: boolean = false;
  private color: string = this.getRandColor();
  private borderColor: string = "black";
  private iAmSpeed = document.getElementById("speedup") as HTMLAudioElement;

  constructor(x: number, y: number, size: number) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  // random color generator; taken from the interwebs
  public getRandColor() {
    let color = Math.floor(Math.random() * 16777216).toString(16);
    return "#000000".slice(0, -color.length) + color;
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
    this.ySpeed = random(-0.1, 0.1);
    this.iAmSpeed.play();
  }

  public moveAfterFreeze() {
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

  public draw(): void {
    fill(this.color);
    stroke(this.borderColor);
    ellipse(this.x, this.y, this.size);
  }

  public move(): void {
    if (this.stopped == false) {
      this.x = this.xSpeed + this.x;
      this.y = this.ySpeed + this.y;
    }
    this.doBorderBehavior();
  }

  private doBorderBehavior() {
    if (this.x < this.size / 2) {
      this.x = this.size / 2;
      this.xSpeed = -this.xSpeed;
    } else if (this.x > width - this.size / 2) {
      this.x = width - this.size / 2;
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < this.size / 2) {
      this.y = this.size / 2;
      this.ySpeed = -this.ySpeed;
    } else if (this.y > height - this.size / 2) {
      this.ySpeed = -this.ySpeed;
      this.y = height - this.size / 2;
    }
  }

}
