/**
 * Created by hhh on 2017/7/21.
 */
//innerText（textContent）会获取纯文本内容，忽略html节点标签，而innerHTML会显示标签内容，
//所以我们先将需转义的内容赋值给innerText（textContent），再获取它的innerHTML属性，这时获取到的就是转义后文本内容。
function HTMLEncode(html) {
    var temp = document.createElement("div");
    (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
    var output = temp.innerHTML;
    temp = null;
    return output;
}
//反转义的方法为先将转义文本赋值给innerHTML，然后通过innerText（textContent）获取转义前的文本内容
function HTMLDecode(text) {
    var temp = document.createElement("div");
    temp.innerHTML = text;
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}