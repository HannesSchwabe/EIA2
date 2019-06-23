namespace Abschlussaufgabe {
    export class FourthFish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;


        draw(_x: number, _y: number): void {
            let fourthfish: Path2D = new Path2D();
            fourthfish.rect(_x , _y - 25, 130, 90);
            crc.fillStyle = "black";
            crc.fill(fourthfish);
            crc.stroke(fourthfish);


            let flosse: Path2D = new Path2D();
            flosse.moveTo(_x + 20, _y + 10);
            flosse.lineTo(_x - 10, _y + 70);
            flosse.lineTo(_x - 10, _y - 60);
            flosse.closePath();
            crc.fillStyle = "black";
            crc.fill(flosse);
            crc.stroke(flosse);

            let fishmachtauge: Path2D = new Path2D();
            fishmachtauge.arc(_x + 100, _y - 10, 8, 0, 360);
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