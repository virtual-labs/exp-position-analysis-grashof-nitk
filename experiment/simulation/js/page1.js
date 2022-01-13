function resetGraphs() {
    y1_graph.delete();
    y2_graph.delete();
}

function runPage1() {
    background(255);
    image(bg, 0, 0)
    stroke(0);
    fill(0);
    strokeWeight(0);

    textSize(32);

    push();
    textSize(36);
    textFont("Times")
    text('BASE EXCITATION', 255, 50);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    push();
    stroke(0, 100);
    for (let i = 20; i < 591; i++) {
        point(i, 505);
        i += 4;
    }
    for (let i = 510; i < 570; i++) {
        point(300, i);
        i += 4;
    }
    pop();

    spring1.initialise(k.inp, m.inp, z.inp, y.inp, _w.inp);
    spring1.update(t, factor);
    spring1.show(0, 0, 0);

    y1_graph.update(spring1.y);
    y1_graph.draw(0, 0, 255)
    y2_graph.update(spring1.y_base);
    y2_graph.draw(255, 0, 0)

    textSize(14);
    textFont("Comic Sans MS")
    fill(231, 114, 43);
    text('ωn = ' + spring1.wn.toFixed(4) + " rad/s", 50, 520);
    text('η = ' + (_w.inp / spring1.wn).toFixed(4), 50, 540);
    text('ζ = ' + z.inp.toFixed(4), 50, 560);

    textSize(24);
    fill(0, 0, 0);
    text("Harmonic Exitation", 95, 495);

    k.draw();
    m.draw();
    z.draw();
    y.draw();
    _w.draw();

    button1.draw();
    button2.draw();

    t = t + dt;
}
