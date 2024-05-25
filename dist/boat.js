export class Boat {
    constructor(x, y, canvasWidth) {
        this.width = 122;
        this.height = 77;
        this.speed = 5;
        this.x = x;
        this.y = y;
        this.canvasWidth = canvasWidth;
        this.image = new Image();
        this.image.src = 'assets/boat.png';
    }
    moveLeft() {
        this.x = Math.max(0, this.x - this.speed);
    }
    moveRight() {
        this.x = Math.min(this.canvasWidth - this.width, this.x + this.speed);
    }
    moveTo(x) {
        this.x = Math.min(Math.max(x - this.width / 2, 0), this.canvasWidth - this.width);
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
