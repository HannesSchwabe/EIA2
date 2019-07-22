namespace Abschlussaufgabe {
    //import { crc } from "./canvas";
    export class SecondFish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        id: number = 2;

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = 11 - 5;
            this.dy = Math.random() * -1;
        }

        draw(_x: number, _y: number): void {
            let secondfish: Path2D = new Path2D();
            secondfish.rect(this.x + 10, this.y -25, 80, 40);
            crc.fillStyle = "orange";
            crc.fill(secondfish);
            crc.stroke(secondfish);

            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x + 30, this.y );
            flosse.lineTo(this.x + 10, this.y + 40);
            flosse.lineTo(this.x + 10, this.y - 40);
            flosse.closePath();
            crc.fillStyle = "orange";
            crc.fill(flosse);
            crc.stroke(flosse);

            let fishmachtauge: Path2D = new Path2D();
            fishmachtauge.arc(this.x + 75, this.y - 10, 5, 0, 360);
            crc.fillStyle = "white";
            crc.fill(fishmachtauge);
            crc.stroke(fishmachtauge);

            pfadgottes(secondfish, _x, _y, this.id);
        }


        update(_x: number, _y: number): void {
            this.move();
            this.draw(_x, _y);
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                //update();
                //console.log("Raus");
                this.x = 0;
                this.y = Math.random() * canvas.height;
            }
        }

    }


}