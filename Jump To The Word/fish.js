class Fish {
    constructor(imageSrc, scale = 1) {
        this.image = new Image();
        this.image.src = imageSrc;

        this.width = null;
        this.height = null;
        this.x = Math.random() * 500; // Posisi awal acak di sumbu x
        this.y = 100 + Math.random() * (750 - 200); // Pastikan berada di luar area rumput
        this.vx = -3 - Math.random() * 2; // Kecepatan acak ke kiri

        this.image.onload = () => {
            this.width = this.image.naturalWidth * scale;
            this.height = this.image.naturalHeight * scale;
        };
    }

    move() {
        this.x += this.vx;

        // Jika ikan keluar dari layar, pindahkan kembali ke kanan
        if (this.x + this.width < 0) {
            this.x = 500;
            this.y = 100 + Math.random() * (750 - 200); // Tetap di luar area rumput
        }
    }

    draw(context) {
        if (this.width && this.height) {
            context.drawImage(
                this.image,
                this.x - this.width / 2,
                this.y - this.height / 2,
                this.width,
                this.height
            );
        }
    }
}
