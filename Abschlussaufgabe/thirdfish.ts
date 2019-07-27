namespace Abschlussaufgabe {
    export class ThirdFish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        id: number = 3;

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = -12;
            this.dy = Math.random() * -1;
        }

        draw(_x: number, _y: number): void {
            let thirdfish: Path2D = new Path2D();
            thirdfish.rect(this.x + 10, this.y - 25, 100, 60);
            crc.fillStyle = "pink";
            crc.fill(thirdfish);
            crc.stroke(thirdfish);


            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x + 110, this.y + 10);
            flosse.lineTo(this.x + 150, this.y + 70);
            flosse.lineTo(this.x + 150, this.y - 60);
            flosse.closePath();
            crc.fillStyle = "pink";
            crc.fill(flosse);
            crc.stroke(flosse);

            let fishmachtauge: Path2D = new Path2D();
            fishmachtauge.arc(this.x + 30, this.y - 10, 8, 0, 360);
            crc.fillStyle = "white";
            crc.fill(fishmachtauge);
            crc.stroke(fishmachtauge);

            pfadgottes(thirdfish, _x, _y, this.id);
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
                this.x = 1000;
                this.y = Math.random() * 600;
            }
        }

        


    }
}