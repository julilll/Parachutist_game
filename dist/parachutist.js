export class Parachutist {
    constructor(x, y) {
        this.width = 38;
        this.height = 58;
        this.x = x;
        this.y = y;
        this.speed = Math.floor(Math.random() * 4) + 2;
        this.image = new Image();
        this.image.src = 'assets/parachutist.png';
    }
    update() {
        this.y += this.speed;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    collidesWith(boat) {
        return (this.x > boat.x &&
            this.x < boat.x + boat.width &&
            this.y + this.height / 2 > boat.y &&
            this.y - this.height / 2 < boat.y + boat.height);
    }
}
