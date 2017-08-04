javascript: (function() {
    var cont = document.getElementsByTagName("body")[0];
    var imgs = document.getElementsByTagName("a");
    var i = 0;
    var divv = document.createElement("div");
    var aray = new Array();
    var j = -1;
    while (++i < imgs.length) {
        if (imgs[i].href.indexOf("/imgres?imgurl=http") > 0) {
            divv.appendChild(document.createElement("br"));
            aray[++j] = decodeURIComponent(imgs[i].href).split(/=|%|&/)[1].split("?imgref")[0];
            divv.appendChild(document.createTextNode(aray[j]));
        }
    }
    cont.insertBefore(divv, cont.childNodes[0]);
    var element = document.getElementById("searchform");
    element.parentNode.removeChild(element);
})()


###################################################################################################


javascript:(function()%7Bvar%20cont%3Ddocument.getElementsByTagName(%22body%22)%5B0%5D%3Bvar%20imgs%3Ddocument.getElementsByTagName(%22a%22)%3Bvar%20i%3D0%3Bvar%20divv%3D%20document.createElement(%22div%22)%3Bvar%20aray%3Dnew%20Array()%3Bvar%20j%3D-1%3Bwhile(%2B%2Bi%3Cimgs.length)%7Bif(imgs%5Bi%5D.href.indexOf(%22%2Fimgres%3Fimgurl%3Dhttp%22)%3E0)%7Bdivv.appendChild(document.createElement(%22br%22))%3Baray%5B%2B%2Bj%5D%3DdecodeURIComponent(imgs%5Bi%5D.href).split(%2F%3D%7C%25%7C%26%2F)%5B1%5D.split(%22%3Fimgref%22)%5B0%5D%3Bdivv.appendChild(document.createTextNode(aray%5Bj%5D))%3B%7D%7Dcont.insertBefore(divv%2Ccont.childNodes%5B0%5D)%3Bvar%20element%20%3D%20document.getElementById(%22searchform%22)%3Belement.parentNode.removeChild(element)%7D)()

