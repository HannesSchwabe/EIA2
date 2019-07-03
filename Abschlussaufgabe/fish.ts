namespace Abschlussaufgabe {
    //import { crc } from "./canvas";
    export class Fish {


        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        a: number;

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = -8 + -2;
            this.dy = Math.random() * - 1;
            this.a = 1;
        }



        draw(): void {
            let fish: Path2D = new Path2D();
            fish.arc(this.x, this.y, 15 * this.a, 0, 360);
            crc.fillStyle = "red";
            crc.fill(fish);
            crc.stroke(fish);

            let fishmachtauge: Path2D = new Path2D();
            fishmachtauge.arc(this.x - 5, this.y - 5, 4 * this.a, 0, 360);
            crc.fillStyle = "white";
            crc.fill(fishmachtauge);
            crc.stroke(fishmachtauge);
        }

        update(_x: number, _y: number, _s: number): void {
            this.move(_x, _y, _s);
            this.draw();
        }

        move(_x: number, _y: number, _s: number): void {
            this.x += _x;
            this.y += _y;
            this.a = this.a * _s;

            if(this.x > canvas.width) {
                this.x = 0;
            }
            if(this.x < 0) {
                this.x = 1000;
            }
            if(this.y > canvas.height) {
                this.y = 0;
            }
            if(this.y < 0) {
                this.y = 600;
            }
        }


    }



}