namespace Abschlussaufgabe {
    export class ThirdFish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;


        draw(_x: number, _y: number): void {
            let thirdfish: Path2D = new Path2D();
            thirdfish.rect(_x + 10, _y - 25, 100, 60);
            crc.fillStyle = "pink";
            crc.fill(thirdfish);
            crc.stroke(thirdfish);


            let flosse: Path2D = new Path2D();
            flosse.moveTo(_x + 110, _y + 10);
            flosse.lineTo(_x + 150, _y + 70);
            flosse.lineTo(_x + 150, _y - 60);
            flosse.closePath();
            crc.fillStyle = "pink";
            crc.fill(flosse);
            crc.stroke(flosse);

            let fishmachtauge: Path2D = new Path2D();
            fishmachtauge.arc(_x + 30, _y - 10, 8, 0, 360);
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
                this.x = 1000;
                this.y = Math.random() * 600;
            }
        }


    }
}