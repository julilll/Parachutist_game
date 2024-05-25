import { Boat } from './boat.js';
import { Parachutist } from './parachutist.js';
import { Plane } from './plane.js';

class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private boat: Boat;
    private plane: Plane;
    private parachutists: Parachutist[];
    private points: number;
    private lives: number;
    private keys: { [key: string]: boolean };
    private seaImage: HTMLImageElement;

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.boat = new Boat(this.canvas.width / 2, this.canvas.height - 100, this.canvas.width);
        this.plane = new Plane(this.canvas.width)
        this.parachutists = [];
        this.points = 0;
        this.lives = 3;
        this.keys = {};
        this.seaImage = new Image();
        this.seaImage.src = 'assets/sea.png';
        this.initControls();
        this.spawnParachutist();
        this.gameLoop();
    }

    private initControls() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.key] = true;
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
        });

        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            this.boat.moveTo(mouseX);
        });
    }

    private spawnParachutist() {
        const x = this.plane.getDropPosition();
        this.parachutists.push(new Parachutist(x, this.plane.y + this.plane.height));
        setTimeout(() => this.spawnParachutist(), Math.floor(Math.random() * 2501) + 750);
    }

    private update() {
        if (this.keys['ArrowLeft']) this.boat.moveLeft();
        if (this.keys['ArrowRight']) this.boat.moveRight();

        this.plane.update();

        this.parachutists.forEach((parachutist, index) => {
            parachutist.update();
            if (parachutist.y > this.canvas.height) {
                this.parachutists.splice(index, 1);
                this.lives--;
            } else if (parachutist.collidesWith(this.boat)) {
                this.parachutists.splice(index, 1);
                this.points += 10;
            }
        });

        if (this.lives <= 0) {
            alert('Game Over');
            document.location.reload();
        }
    }

    private draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.seaImage, 0, this.canvas.height - 50, this.canvas.width, 50)
        this.boat.draw(this.ctx);
        this.plane.draw(this.ctx);
        this.parachutists.forEach(parachutist => parachutist.draw(this.ctx));

        this.ctx.fillStyle = 'black';
        this.ctx.font = '20px Arial';
        this.ctx.fillText(`Points: ${this.points}`, 10, 20);
        this.ctx.fillText(`Lives: ${this.lives}`, 10, 50);
    }

    private gameLoop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
}

const game = new Game('gameCanvas');