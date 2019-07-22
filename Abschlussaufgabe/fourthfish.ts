namespace Abschlussaufgabe {
    export class FourthFish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        id: number = 4;

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = 25 - 5;
            this.dy = Math.random() * -1;
        }


        draw(_x: number, _y: number): void {
            let fourthfish: Path2D = new Path2D();
            fourthfish.rect(this.x, this.y - 25, 130, 90);
            crc.fillStyle = "black";
            crc.fill(fourthfish);
            crc.stroke(fourthfish);


            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x + 20, this.y + 10);
            flosse.lineTo(this.x - 10, this.y + 70);
            flosse.lineTo(this.x - 10, this.y - 60);
            flosse.closePath();
            crc.fillStyle = "black";
            crc.fill(flosse);
            crc.stroke(flosse);

            let fishmachtauge: Path2D = new Path2D();
            fishmachtauge.arc(this.x + 100, this.y - 10, 8, 0, 360);
            crc.fillStyle = "white";
            crc.fill(fishmachtauge);
            crc.stroke(fishmachtauge);
            
            pfadgottes(fourthfish, _x, _y, this.id);

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