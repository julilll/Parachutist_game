export class Plane {
    constructor(canvasWidth) {
        this.x = 0;
        this.y = 50;
        this.width = 145;
        this.height = 113;
        this.speed = 2;
        this.canvasWidth = canvasWidth;
        this.image = new Image();
        this.image.src = 'assets/plane.png';
        this.direction = -1;
    }
    update() {
        this.x += this.speed * this.direction;
        if (this.x > this.canvasWidth - this.width || this.x < 0) {
            this.direction *= -1;
        }
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    getDropPosition() {
        return this.x + this.width / 2;
    }
}
