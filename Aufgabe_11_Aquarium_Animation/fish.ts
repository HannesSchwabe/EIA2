namespace L11 {
    //import { crc } from "./canvas";
    export class Fish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        

		draw(_x: number, _y: number): void {
        let fish: Path2D = new Path2D();
        fish.arc(_x , _y , 30, 0, 360);
        crc.fillStyle = "orange";
        crc.fill(fish);
        crc.stroke(fish);

        let fish1: Path2D = new Path2D();
        fish1.moveTo(_x + 30, _y );
        fish1.lineTo(_x + 70, _y + 40);
        fish1.lineTo(_x + 70, _y - 40);
        fish1.closePath();
        crc.fillStyle = "orange";
        crc.fill(fish1);
        crc.stroke(fish1);

        let fishmachtauge: Path2D = new Path2D();
        fishmachtauge.arc(_x - 10, _y - 10, 5, 0, 360);
        crc.fillStyle = "white";
        crc.fill(fishmachtauge);
        crc.stroke(fishmachtauge);
        }





        newMove(_x: number, _y: number) {
        let fish: Path2D = new Path2D();
        fish.arc(_x + 200, _y + 200, 30, 0, 360);
        crc.fillStyle = "orange";
        crc.fill(fish);
        crc.stroke(fish);

        let fish1: Path2D = new Path2D();
        fish1.moveTo(_x + 230, _y + 200);
        fish1.lineTo(_x + 270, _y + 240);
        fish1.lineTo(_x + 270, _y + 160);
        fish1.closePath();
        crc.fillStyle = "orange";
        crc.fill(fish1);
        crc.stroke(fish1);

        let fishmachtauge: Path2D = new Path2D();
        fishmachtauge.arc(_x + 190, _y + 190, 5, 0, 360);
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
                //fish.newMove(x, y);
                //update();
                console.log("Raus");
                this.x = canvas.width / 2;
                this.y = canvas.height / 2;
            }
        }
        
    }

    
}