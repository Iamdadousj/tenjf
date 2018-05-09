/**
 * Created by Administrator on 2018/1/7.
 */
function getStyle ( obj, name ) {
    return obj.currentStyle?obj.currentStyle[name] : getComputedStyle( obj )[name];
}
function move(obj, step, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        step = Math.abs(step);
        step = leader < target ? step : -step;
        //Math.abs(target - leader)  当前位置到目标的位置
        if (Math.abs(target - leader) > Math.abs(step)) {
            leader += step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 15);
}