/**
 * Created by Administrator on 2018/01/08. name='dadou_bw'
 */

//topbar  部分

    var ost_G=document.getElementById('ost_g');
    var ost_D=document.getElementById('ost_d');
    var ost_T=document.getElementById('ost_t');
    var ost_P=document.getElementById('ost_p');
    var seC_is=document.getElementById('slide-vs');
    var seC_a=seC_is.children[0];
    var seC_List=seC_is.children[1];
    ost_G.onmouseover=function(){
        ost_D.style.display="block";
        ost_D.style.zIndex="1";

    };
    ost_G.onmouseout=function(){
        ost_D.style.display="none";
        ost_D.style.zIndex="0";
    };

//ost_title  iframe 部分

    ost_T.onmouseover=function(){
        ost_P.style.display="block";
        ost_T.classList.add("ost_title_hover");

    };
    ost_T.onmouseout=function(){
        ost_P.style.display="none";
        ost_T.classList.remove("ost_title_hover");
    };

// 合作媒体网站

    seC_is.onmouseover=function(){
        seC_List.style.display="block";
    };
    seC_is.onmouseout=function(){
        seC_List.style.display="none";
    };

//  官方微信

    function str(c,d){
        for(var i = 0; i < c.length; i++) {
            c[i].index = i;
            c[i].onclick = function(e) {
                for(var j = 0; j < c.length; j++) {
                    c[j].className = "";
                    d[j].style.display = "none";
                }
                this.className = "on";
                d[this.index].style.display= "block";
            }
        }
    }
    function img(a,b){
        var oLi = document.getElementById(a).getElementsByTagName('a');
        var oDiv = document.getElementById(b).getElementsByTagName('img');
        str(oLi,oDiv);
    }
    img('pif','tab_f');



//登录模态框

function overlay(){
    var e1 = document.getElementById('modal-overlay');
    e1.style.visibility = (e1.style.visibility == "visible")? "hidden" : "visible";
}

// 标题跑马灯

function scroll(){
    var tit = document.title;//将标题赋值给自定义属性
    var fir = tit.charAt(0);//获取属性第一个字符
    var left = tit.substring(1, tit.length);//获取属性剩余字符
    document.title = left + fir;//将头文件重新赋值 （原标题的第二个字符到最后一个字符+原标的的第一个字符）
}
setInterval("scroll()", 2000); //标题走马灯 每两秒执行一次

//返回顶部

gotop();

function gotop(){
    var obj=document.getElementById('gotop');
    function getScrollTop(){
        return document.documentElement.scrollTop|| document.body.scrollTop;
    }
    function setScrollTop(value){
        document.documentElement.scrollTop=value;
    }
    window.onscroll=function(){getScrollTop()>=500?obj.style.display='block':obj.style.display='none';};
    obj.onclick=function(){
        var gotop=setInterval(scrollMove,10);
        function scrollMove(){
            setScrollTop(getScrollTop()/1.1);
            if(getScrollTop()<1)clearInterval(gotop);
        }
    }
}

