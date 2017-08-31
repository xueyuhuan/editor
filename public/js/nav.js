//导航
//实现滚动条无法滚动
var mo=function(e){e.preventDefault();};
$("#nav").click(function(){
    $("#mysearch").val("");
    var src=$(this)[0].src;
    var arr=src.split("/");
    if(arr[arr.length-1]=="icon-nav.png"){
        arr[arr.length-1]="icon_close.png";
        $("html,body").css({"position":"relative","overflow":"hidden"});
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
    }
    else{
        arr[arr.length-1]="icon-nav.png";
        $("html,body").css("overflow","auto");
        document.removeEventListener("touchmove",mo,false);
    }
    src=arr.join("/");
    $(this).attr("src",src);
    $("nav").fadeToggle();
});

$("#search").click(function () {
    var sss =$("#mysearch").val();
    if(sss !=""){
        sessionStorage.event=sss;
        window.location.href="/search/list?key="+sss;
    }else{
        alert("搜索值不能为空");
    }

});
