export class Plane {
    public x = 0;
    public readonly y = 50;
    public readonly width = 145;
    public readonly height = 113;
    private speed = 2;
    private canvasWidth: number;
    private image: HTMLImageElement;
    private direction: -1 | 1;

    constructor(canvasWidth: number) {
        this.canvasWidth = canvasWidth;
        this.image = new Image();
        this.image.src = 'assets/plane.png';
        this.direction = -1;
    }

    public update() {
        this.x += this.speed * this.direction;
        if (this.x > this.canvasWidth - this.width || this.x < 0) {
            this.direction *= -1;
        }
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    public getDropPosition(): number {
        return this.x + this.width / 2;
    }
}
