/**
 * Created by jonathan on 05/05/17.
 */
// CANVAS
function circle (id, value, color, shadowColor, animate) {

    var canvas = document.getElementById(id);

    var width = canvas.width;
    var height = canvas.height;

    // CANVAS PROPERTIES
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 5;
    ctx.strokeStyle = color;
    ctx.shadowOffsetX = 0.5;
    ctx.shadowOffsetY = 0.5;
    ctx.shadowBlur = 5;
    ctx.lineCap='round';
    ctx.shadowColor = shadowColor;

    // CANVAS MATHS
    var x = width / 2,
        y = height / 2,
        radius = 40,
        circum = Math.PI * 2,
        start = Math.PI / -2,
        finish = value,
        curr = 0;

    // Animate function
    if (animate) {
        function animate(draw_to) {
            ctx.clearRect(0, 0, width, height);
            ctx.beginPath();
            ctx.arc(x, y, radius, start, draw_to, false);
            ctx.stroke();
            curr++;
            if (curr < finish + 1) {
                requestAnimationFrame(function () {
                    animate(circum * curr / 100 + start);
                });
            }
        }

        animate();
    } else {
        ctx.beginPath();
        ctx.arc(x, y, radius, start, circum, false)
        ctx.stroke();
    }
}
