// var ctx = document.getElementById('canvasBackground').getContext("2d");
//
// function resize(canvas) {
//   var width = canvas.clientWidth;
//   var height = canvas.clientHeight;
//   if (width != canvas.width || height != canvas.height) {
//     canvas.width = width;
//     canvas.height = height;
//   }
// }
//
// function render(time) {
//   time *= 0.001;
//   resize(ctx.canvas);
//   ctx.save();
//   var w = ctx.canvas.width;
//   var h = ctx.canvas.height;
//   var hw = w / 2;
//   var hh = h / 2;
//   ctx.clearRect(0, 0, w, h);
//   ctx.strokeStyle = "red";
//   ctx.translate(hw, hh);
//   ctx.rotate(time * 0.1);
//   for (var ii = 0; ii < 100; ++ii) {
//     ctx.rotate(Math.sin(time * 0.1) * 0.2);
//     ctx.strokeRect(-hw, -hh, w, h);
//     ctx.scale(0.9, 0.9);
//   }
//   ctx.restore();
//
//   requestAnimationFrame(render);
// }
// requestAnimationFrame(render);

let canvas, width, height, fps;
let numVertices, vertexRad, lineWidth, connDist, dist;
let maxRestSpeed, friction;

let vertices = [];
let connections = [];

function setup () {
    width = window.innerWidth;
    height = window.innerHeight;
    fps = 30;

    vertexRad = 1;
    lineWidth = 3;
    connDist = 200;
    maxRestSpeed = 2;
    friction = 0.9;

    repopulate();

    canvas = createCanvas(width, height);
    canvas.parent('canvasBackground');
    smooth();
    ellipseMode(RADIUS);
    colorMode(RGB, 255, 255, 255, 1);
    strokeWeight(lineWidth);
    fill(255);
}


function draw () {
    frameRate(fps);

    background(0);

    push();
    for (let conn of connections) {
        dist = sqrt(pow(conn[0].pos.x-conn[1].pos.x, 2) + pow(conn[0].pos.y-conn[1].pos.y, 2));
        stroke(
            0,
            map(conn[0].pos.x, vertexRad, width - vertexRad, 50, 255),
            map(conn[0].pos.y, vertexRad, height - vertexRad, 50, 255),
            (dist <= connDist) ? 1 - map(dist, 0, connDist, 0, 1) : 0
        );
        line(conn[0].pos.x, conn[0].pos.y, conn[1].pos.x, conn[1].pos.y);
    }
    pop();

    for (let vertex of vertices) {
        vertex.update();
        vertex.show();
    }

}


function repopulate () {
    vertices = [];
    connections = [];
    numVertices = floor(width * height / 18000);
    for (let i = 0; i < numVertices; i ++) vertices.push(new Vertex());
    for (let v1 = 0; v1 < vertices.length; v1 ++)
        for (let v2 = v1 + 1; v2 < vertices.length; v2 ++)
            connections.push([vertices[v1], vertices[v2]]);
}

function windowResized () {
    width = window.innerWidth;
    height = window.innerHeight;floor(width * height / 15000);
    repopulate();

    canvas.size(width, height);
}

// for enabling and disabling the dynamic background
function pause () {
    let isContinue = $('#performance').find('input').is(':checked');
    (isContinue) ? loop() : noLoop();
}
