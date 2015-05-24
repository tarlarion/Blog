function fadeOut(element) {
    var op = 1;  // initial opacity
	var element = document.getElementById(element);
    var timer = setInterval(function () {
	     if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        op -= op * 0.2;
    }, 50);
};




//SmoothScroll function
function currentPosition() {
    if (self.pageYOffset)
        return self.pageYOffset;

    if (document.body.scrollTop)
        return document.body.scrollTop;

    return 0;
}

function objectPosition(target) {
    var target = document.getElementById(target);
    var vd = target.offsetTop;
    var node = target;
        while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        vd += node.offsetTop;
    } return vd;
}

function smoothScroll(target) {
    var start = currentPosition();
    var stop = objectPosition(target);
    var distance = stop > start ? stop - start : start - stop;
    if (distance < 100) {
        scrollTo(0, stop);
        return;
    }

    var speed = Math.round(distance/100);
    if (speed >= 20) speed = 20;

    var step = Math.round(distance/25);
    var leap = stop > start ? start + step : start - step;
    var timer = 0;

    if (stop > start) {
        for(var i = start; i < stop; i += step) {
            setTimeout("window.scrollTo(0, "+leap+")", timer * speed);

            leap += step;
            if (leap > stop) leap = stop;
            timer++;

        } return;
        }

        for (var i = start; i > stop; i-=step) {
            setTimeout("window.scrollTo(0, "+leap+")", timer * speed);


            leap -= step;
            if(leap < stop) leap = stop;
            timer++;
            } return false;
}

function Toggle() {
    var menu = document.getElementById("menu");
    if (menu.style.display == "block" || menu.style.display == "")
        menu.style.display = "none";

    else menu.style.display = "block";

    return menu.style.display;
}

function TabCheck(event) {
    var codechar = event.keyCode;
    if (codechar == 17)
        Toggle();
    else return false;

}

document.body.addEventListener("keyup", TabCheck);
document.getElementById("logo").addEventListener("click", Toggle);
