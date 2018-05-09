/**
 * Created by Administrator on 2018/1/10. name='dadou_bw'
 */
window.onload=function(){

//banner 部分

    var timer = null;
    var box = document.getElementById('official');
    var screen = box.children[0];
    var ul = screen.children[0];
    var ulLis = ul.children;
    var ol = screen.children[1];
    var arr = box.children[1];
    var left = arr.children[0];
    var right =arr.children[1];
    var imgWidth = screen.offsetWidth;
    var olLis = ol.children;
    olLis[0].className = "active";
    var firstImg = ulLis[0].cloneNode(true);
    ul.appendChild(firstImg);
    var target = 0;
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].index = i;
        olLis[i].onmouseover = function () {
            //干掉所有人
            for (var j = 0; j < olLis.length; j++) {
                olLis[j].className = "";
            }
            //留下我自己
            this.className = "active";

            //最后让ul移动到指定位置
            target = -this.index * imgWidth;
            move(ul, 30, target);
            //把记录当前亮起的按钮的索引的square变为当前按钮的索引
            //把记录当前显示的图片的索引的pic变为当前按钮的索引
            pic = square = this.index;
        };
    }
    box.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer);
    };
    box.onmouseout = function () {
        arr.style.display = "none";
        timer = setInterval(playNext, 2000);
    };
    var pic = 0;//记录当前图片的索引
    var square = 0;//记录当前切换btn的索引值
    right.onclick = function () {
//        alert(ulLis.length)
        if (pic === ulLis.length - 1) {//最后一张图片的下标值
            ul.style.left = 0;//瞬间移动到开头
            pic = 0;//索引归0，后续的代码会让ul渐渐地从第一张图片移动到第二张图片
        }
        pic++;//计算出之后显示图片的下标值
        //target和pic以及图片的宽度有关，而且是负数
        target = -pic * imgWidth;
        move(ul, 30, target);
        //下面的按钮跟着动
        if (square < olLis.length - 1) {//还没到最后
            square++;//计算出下一个切换的btn的下标值
        } else {
            square = 0;
        }
        //干掉所有人
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //留下对应的
        olLis[square].className = "active";
    };
    left.onclick = function () {
        //如果到第一张图片，就瞬间跳到最后
        //然后做从最后一张（假的第一张）到倒数第二张的动画
        if (pic === 0) {//第一张图
            ul.style.left = -(ulLis.length - 1) * imgWidth + "px";//瞬间移动到最后
            pic = ulLis.length - 1;
        }
        pic--;//计算出接下来应该显示的图片的索引
        //target和pic以及图片的宽度有关，而且是正数
        target = -pic * imgWidth;
        move(ul, 30, target);

        //下面的按钮跟着动
        if (square > 0) {//还没到最前
            square--;//计算出下一个应该亮起的按钮的索引
        } else {
            square = olLis.length - 1;
        }
        //干掉所有人
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //留下对应的
        olLis[square].className = "active";
    };
    timer = setInterval(playNext, 3000);
    function playNext() {
        right.onclick();
    }

//slider_right_tab_start  部分
    //recently news

    new Tabswitch('parts');
    function Tabswitch(id){
        var _this=this;
        var Pnew=document.getElementById(id);
        var part_news=Pnew.children[1];
        this.tab_A=part_news.getElementsByTagName('a');
        this.ul_News=Pnew.getElementsByClassName('ul-news');
        for(var i=0;i<this.tab_A.length;i++){
            this.tab_A[i].index = i;
            this.tab_A[i].onmouseover=function(){
                _this.fnClick(this);
            };
        }
    }
    Tabswitch.prototype.fnClick=function(tab){
        for(var i=0;i<this.tab_A.length;i++){
            this.tab_A[i].className='';
            this.ul_News[i].style.display='none'
        }
        tab.className='on';
        this.ul_News[tab.index].style.display='block'
    };

//  tab_desk(all)

    function desk(c,d){
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
    function tab(a,b){
        var oLi = document.getElementById(a).getElementsByTagName('a');
        var oDiv = document.getElementById(b).getElementsByTagName('div');
        desk(oLi,oDiv);
    };

    tab('pip','tab_w');
    tab('pit','tab_s');
    tab('videoNav','tab_k');
    tab('pio','tab_wl');
    tab('pin','tab_n');
    tab('piu','tab_rt');
    tab('piv','tab_sv');
    tab('pix','tab_ss');
    tab('Napav','tab_aa');
    tab('pig','tab_se');
    //tab('Psz','Tab_l');

//  吸顶盒
    var tit = document.getElementById('nav_top');
    //占位符的位置
    var rect = tit.getBoundingClientRect();//获得页面导航条相对于浏览器视窗的位置
    var inser = document.createElement('div');
    tit.parentNode.replaceChild(inser,tit);
    inser.appendChild(tit);
    inser.style.height = rect.height + "px";
    //获取距离页面顶端的距离
    var titleTop = tit.offsetTop;
    //滚动事件
    document.onscroll = function(){
        //获取当前滚动的距离
        var btop = document.body.scrollTop||document.documentElement.scrollTop;
        //如果滚动距离大于导航条据顶部的距离
        if(btop>titleTop){
            //为导航条设置fixed 固定定位
            tit.className = 'nav_s fixed';
        }else{
            //移除fixed  恢复初始值
            tit.className = 'nav_s';
        }
    };

//疾风圈

    function tab_jf(c,d){
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
    function jfq(a,b){
        var oLi = document.getElementById(a).getElementsByTagName('a');
        var oDiv = document.getElementById(b).getElementsByTagName('ul');
        tab_jf(oLi,oDiv);
    };
    jfq('pil','tab_kk');

//今日游戏内活动 自动轮播

    var lunbo=document.getElementById('lunbo');
    var Prev=lunbo.children[0];
    var Next=lunbo.children[1];
    var oUter=lunbo.children[2];
    var link=oUter.children[0];
    var oA=link.children;
    var index = 0;
    var lock = true;//lock开关锁思想，防止动画打乱
    Prev.onclick=function(){
        if(lock){
            lock = false;
            index--;
            if(index<0){
                index = 5;
                //判断：当图片动画运动到最后头部开始位置的时候，立马将图片不以动画的方式(闪现到尾部最后的位置。)
                link.style.left = 6 * -430 + 'px';
            }
            var targetValue = index * -430;
            var temp = index;
            animate(link,{left:targetValue},10,function(){
                lock = true;
            });
        }
}
    Next.onclick=function(){
        if(lock){
            lock = false;
            index++;
            var targetValue = index * -430;
            //用第三方变量temp接收index的值
            var temp = index;
            if(index==6){
                index = 0;
            }
            animate(link,{left:targetValue},10,function(){
                if(temp==6){
                    //判断：当图片动画运动到最后尾部的时候，立马将图片不以动画的方式(闪现到开始位置。)
                    link.style.left = 0 + 'px';
                }
                //最后一步：将lock赋值true；将锁打开
                lock = true;
            });
        }
    }
    lunbo.onmouseenter = function(){
        clearInterval(flag)
    };
    lunbo.onmouseleave = function(){
        autoPlay();
    };
    var flag;//定时器部分
    function autoPlay(){
        flag = setInterval(function(){
            Next.onclick();
        },2000);
    }
    autoPlay();

//版本中心  单个轮播

    var Vbox=document.getElementById('Vbox');
    var Spre=Vbox.children[0];
    var Snxt=Vbox.children[1];
    var oUT= Vbox.children[3];
    var Ver=oUT.children[0];
    var A_v=Ver.children;
    Ver.innerHTML += Ver.innerHTML;
    var index = 0;
    var fs = true;
    Spre.onclick=function(){
        if(fs){
            fs = false;
            index++;
            var targetValue = index * -132;
            var temp = index;
            if(index==30){
                index = 0;
            }
            animate(Ver,{left:targetValue},10,function(){
                if(temp==30){
                    Ver.style.left = 0 + 'px';
                }
                fs = true;
            });
        }
    };
    Snxt.onclick=function(){
        if(fs){
            fs = false;
            index--;
            if(index<0){
                index = 5;
                Ver.style.left = 30 * -132 + 'px';
            }
            var targetValue = index * -132;
            var temp = index;
            animate(Ver,{left:targetValue},10,function(){
                fs = true;
            });
        }
    };

//职业介绍

   var actPs=document.getElementById('actPs');
    var Psz=actPs.children[1];
    var P_a=Psz.children;
    console.log(P_a);
    var Tab_l=actPs.children[2];
    var act_box=Tab_l.children;
    console.log(act_box);
    for(var t=0;t<P_a.length;t++){
        P_a[t].index=t;
        P_a[t].onclick=function(){
            for(var g=0;g<P_a.length;g++){
                act_box[g].style.display="none";
                P_a[g].className = "";
            }
            act_box[this.index].style.display= "block";
            this.className = "on";
        }
    }
};

