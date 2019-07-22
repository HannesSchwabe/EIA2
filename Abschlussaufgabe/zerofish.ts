namespace Abschlussaufgabe {
    export class ZeroFish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        id: number = 0;

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = 25 - 5;
            this.dy = Math.random() * -5;
        }



        draw(_x: number, _y: number): void {
            let zerofish: Path2D = new Path2D();
            zerofish.rect(this.x , this.y - 25, 30, 15);
            zerofish.closePath();
            crc.fillStyle = "grey";
            crc.fill(zerofish);
            crc.stroke(zerofish);

            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x, this.y - 20);
            flosse.lineTo(this.x - 25, this.y - 5);
            flosse.lineTo(this.x - 25, this.y - 35);
            flosse.closePath();
            crc.fillStyle = "grey";
            crc.fill(flosse);
            crc.stroke(flosse);

            let fishmachtauge: Path2D = new Path2D();
            fishmachtauge.arc(this.x + 23, this.y - 20, 3, 0, 360);
            crc.fillStyle = "white";
            crc.fill(fishmachtauge);
            crc.stroke(fishmachtauge);

            pfadgottes(zerofish, _x, _y, this.id);
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
                this.y = Math.random() * 600;
            }
        }


    }
}