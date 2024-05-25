export class Boat {
    public x: number;
    public y: number;
    public readonly width = 122;
    public readonly height = 77;
    private canvasWidth: number;
    private speed = 5;
    private image: HTMLImageElement;

    constructor(x: number, y: number, canvasWidth: number) {
        this.x = x;
        this.y = y;
        this.canvasWidth = canvasWidth;
        this.image = new Image()
        this.image.src = 'assets/boat.png'
    }

    public moveLeft() {
        this.x = Math.max(0, this.x - this.speed);
    }

    public moveRight() {
        this.x = Math.min(this.canvasWidth - this.width, this.x + this.speed);
    }

    public moveTo(x: number) {
        this.x = Math.min(Math.max(x - this.width / 2, 0), this.canvasWidth - this.width);
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}