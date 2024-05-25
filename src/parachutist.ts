import { Boat } from "./boat.js";

export class Parachutist {
    public x: number;
    public y: number;
    private width = 38;
    private height = 58;
    private speed: number;
    private image: HTMLImageElement;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.speed = Math.floor(Math.random() * 4) + 2;
        this.image = new Image()
        this.image.src = 'assets/parachutist.png'
    }

    public update() {
        this.y += this.speed;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    public collidesWith(boat: Boat): boolean {
        return (
            this.x > boat.x &&
            this.x < boat.x + boat.width &&
            this.y + this.height / 2 > boat.y &&
            this.y - this.height / 2 < boat.y + boat.height
        );
    }
}