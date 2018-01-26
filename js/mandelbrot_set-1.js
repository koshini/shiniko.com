var scalar = 5;
var xTranslate = 5;
var yTranslate;
var maxIterations = 50;


function setup() {
    createCanvas(windowWidth-100, windowHeight-100);
    pixelDensity(1);
    yTranslate = height / 2 - width / 2;


    slider1 = createSlider(0, 5, 5, 0.001);
    slider2 = createSlider(-5, 0, -5, 0.001);
}

function draw() {
    loadPixels();

    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var val1 = slider1.value();
            var val2 = slider2.value();

            var a = map(x, 0 , width, val2, val1);
            var b = map(y, 0 + yTranslate, width + yTranslate, val2, val1);

            var ca = a;
            var cb = b;
            var n = 0;
            while (n < maxIterations) {
                var aa = a * a - b * b;
                var bb = 2 * a * b;
                a = aa + ca;
                b = bb + cb;
                if (a + b > 16) {
                    break;
                }
                n++;
            }
            var brightness = map(n, 0, maxIterations, 0, 1);
            brightness = map(sqrt(brightness), 0, 1, 0, 255);
            if (n === maxIterations) {
                brightness = 0;
            }

            var pix = (x + y * width) * 4;
            pixels[pix] = brightness;
            pixels[pix + 1] = brightness;
            pixels[pix + 2] = brightness;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
}