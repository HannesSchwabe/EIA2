namespace Abschlussaufgabe {
    export class ZeroFish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;


        draw(_x: number, _y: number): void {
            let zerofish: Path2D = new Path2D();
            zerofish.rect(_x , _y - 25, 30, 15);
            crc.fillStyle = "grey";
            crc.fill(zerofish);
            crc.stroke(zerofish);


            let flosse: Path2D = new Path2D();
            flosse.moveTo(_x, _y - 20);
            flosse.lineTo(_x - 25, _y - 5);
            flosse.lineTo(_x - 25, _y - 35);
            flosse.closePath();
            crc.fillStyle = "grey";
            crc.fill(flosse);
            crc.stroke(flosse);

            let fishmachtauge: Path2D = new Path2D();
            fishmachtauge.arc(_x + 23, _y - 20, 3, 0, 360);
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
                console.log("Raus");
                this.x = 0;
                this.y = Math.random() * 600;
            }
        }


    }
}