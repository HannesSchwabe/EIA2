namespace Abschlussaufgabe {
    //import { crc } from "./canvas";
    export class Fish {


        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;



        draw(_x: number, _y: number): void {
            let fish: Path2D = new Path2D();
            fish.arc(_x, _y, 15, 0, 360);
            crc.fillStyle = "red";
            crc.fill(fish);
            crc.stroke(fish);

            let fish1: Path2D = new Path2D();
            fish1.moveTo(_x + 14, _y);
            fish1.lineTo(_x + 24, _y + 40);
            fish1.lineTo(_x + 24, _y - 40);
            fish1.closePath();
            crc.fillStyle = "red";
            crc.fill(fish1);
            crc.stroke(fish1);

            let fishmachtauge: Path2D = new Path2D();
            fishmachtauge.arc(_x - 5, _y - 5, 4, 0, 360);
            crc.fillStyle = "white";
            crc.fill(fishmachtauge);
            crc.stroke(fishmachtauge);
        }







        updatee(): void {
            this.move();
            this.draw(this.x, this.y);
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                //update();
                //console.log("Nix mehr Fisch");
                this.x = 1000;
                this.y = Math.random() * canvas.height;
            }

        }

        //steuerung(_event: KeyboardEvent) {
        //console.log(_event);
        //if (_event.keyCode == 37) {
        //this.x += this.dx;
        //console.log("Terrrst");
        //}
        //}

    }



}