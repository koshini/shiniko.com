var w = 5;
var h = (w * height)/width;
var coef;
var canvasWidth;
var canvasHeight;


function setup() {
    canvasWidth = windowWidth;
    canvasHeight = windowHeight;
    createCanvas(canvasWidth, canvasHeight);
    coef = canvasWidth / canvasHeight;
    pixelDensity(1);
}

function draw() {
    var maxIterations = 50;
    loadPixels();
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            var n = 0;
            var a = map(i, 0, width, -2*coef, 2*coef);
            var b = map(j, 0, height, -2, 2);
            var ca = map(mouseX, 0, width, -1, 1);
            var cb = map(mouseY, 0, height, -1, 1);

            while (n < maxIterations) {
                var aa = a * a - b * b;
                var bb = 2 * a * b;
                a = aa + ca;
                b = bb + cb;
                if (a*a + b*b > 4) {
                    break;
                }
                n++;
            }

            var brightness = map(n, 0, maxIterations, 0, 1);
            brightness = map(sqrt(brightness), 0, 1, 0, 255);
            if (n === maxIterations) {
                brightness = 0;
            }

            var pix = (i + j * width) * 4;
            pixels[pix] = brightness;
            pixels[pix + 1] = brightness;
            pixels[pix + 2] = brightness;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
}
