class Sand {
    constructor(imageSrc, scale = 1) {
        this.image = new Image();
        this.image.src = imageSrc;

        this.width = null;
        this.height = null;
        this.x = 0;
        this.y = 0;
        this.vx = 5;
        this.letter = null;

        this.image.onload = () => {
            this.width = this.image.naturalWidth * scale;
            this.height = this.image.naturalHeight * scale;
        };
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
