function Vertex () {

    this.pos = { x: random(vertexRad, width-vertexRad), y: random(vertexRad, height-vertexRad) };
    this.vel = { x: random(-1.5, 1.5), y: random(-1.5, 1.5) };

    this.update = function () {

        this.vel.x += random(-0.01, 0.01);
        this.vel.y += random(-0.01, 0.00);

        if (this.pos.x < vertexRad) this.vel.x = abs(this.vel.x);
        else if (width - vertexRad < this.pos.x) this.vel.x = -abs(this.vel.x);
        if (this.pos.y < vertexRad) this.vel.y = abs(this.vel.y);
        else if (height - vertexRad < this.pos.y) this.vel.y = -abs(this.vel.y);

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    };

    this.show = function () {
        push();
        stroke(255);
        fill(255);
        ellipse(this.pos.x, this.pos.y, vertexRad, vertexRad);
        pop();
    };

}
