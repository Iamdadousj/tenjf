/**
 * Created by Administrator on 2018/1/18.
 */
//    news-----动态ajax加入文本//////////////////////////////////////////////////////////////////////////////////////////////
window.onload=function(){
function Ajax(mode,Path,fnSucc) {
    var xhr=null;
    try{
        xhr=new XMLHttpRequest();
    }catch(e) {
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open(mode,Path);
    if(mode=="get"){
        xhr.send(null);
    }
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4){
            if(xhr.status==200){
                fnSucc(xhr.responseText)
            }
        }
    }
}
   function cla(e){
       return document.getElementById('news-nav')
   }
var top=cla('news-nav');
var tab_bm=top.nextElementSibling;
var tab_ul=tab_bm.children[0];
    console.log(tab_ul);
    var index=0;
    Ajax("get","js/news.json",function (data) {
        var list=JSON.parse(data);
        for(var len=0;len<list.length;len++){
            var oUls=document.createElement('a');
            oUls.className='on';
            top.appendChild(oUls);
            oUls.innerHTML="<p>"+list[len].t+"</p>";
        }
        var oA_p=oUls.children;
        console.log(oA_p);
    });
    Ajax_json(0);
    function Ajax_json(num) {
        Ajax("get","js/news.json",function (data) {
            var list=JSON.parse(data);
            //console.log(list[0].list);
            for(var g=0;g<list[num].list.length;g++){
                var oLi=document.createElement('li');
                oLi.className='item';
                tab_ul.appendChild(oLi);
                oLi.innerHTML = "<em>"+"&gt"+"</em>"+"<a>"+ list[num].list[g].doc+"</a>"+" <span>"+list[num].list[g].time +"</span>";
            }
        });
    }

}
