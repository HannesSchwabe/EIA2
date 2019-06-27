namespace Abschlussaufgabe {
    //import { crc } from "./canvas";
    export class SecondFish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        draw(_x: number, _y: number): void {
            let secondfish: Path2D = new Path2D();
            secondfish.rect(_x + 10, _y -25, 80, 40);
            crc.fillStyle = "orange";
            crc.fill(secondfish);
            crc.stroke(secondfish);

            let flosse: Path2D = new Path2D();
            flosse.moveTo(_x + 30, _y );
            flosse.lineTo(_x + 10, _y + 40);
            flosse.lineTo(_x + 10, _y - 40);
            flosse.closePath();
            crc.fillStyle = "orange";
            crc.fill(flosse);
            crc.stroke(flosse);

            let fishmachtauge: Path2D = new Path2D();
            fishmachtauge.arc(_x + 75, _y - 10, 5, 0, 360);
            crc.fillStyle = "white";
            crc.fill(fishmachtauge);
            crc.stroke(fishmachtauge);
        }


        update(): void {
            this.move();
            this.draw(this.x, this.y);
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