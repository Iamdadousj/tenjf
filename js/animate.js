/**
 * Created by Administrator on 2018/01/08.  name='dadou_bw'
 */
function getStyleValue(node,attr){
    var styleNode;
    if(node.currentStyle==undefined){
        styleNode = getComputedStyle(node,null);
    }else{
        styleNode = node.currentStyle;
    }
    return styleNode[attr];
}
function animate(node,obj,speed,fn){
    clearInterval(node.num);
    node.num = setInterval(function(){
        var flag = true;
        for(var key in obj){
            var v = parseInt(getStyleValue(node,key));
            if(v!=obj[key]){
                flag = false;
            }
            var step = (obj[key]-v)/20;
            if(step>0){
                step = Math.ceil(step);
            }else if(step<0){
                step = Math.floor(step);
            }
            var v2 = v + step;
            node.style[key] = v2 + 'px';
        }
        if(flag){
            clearInterval(node.num);
            if(fn!=undefined){
                fn();
            }
        }
    },speed);
}