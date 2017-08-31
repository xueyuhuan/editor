/**
 * Created by hhh on 2017/7/14.
 */
function msg(e){
    $("body").append("<div id='msg'><span>"+e+"</span></div>");
    clearmsg();
}
function clearmsg(){
    var t = setTimeout(function(){
        $("#msg").remove();
    },2000)
}