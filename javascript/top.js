//スライドショー
$(function(){
    var count = $("#slide li").length;
    var current = 1;
    var next = 2;
    var interval = 3000;
    var duration = 500;
    var timer;
    $("#slide li:not(:first-child)").hide();
    timer = setInterval(slideTimer, interval);
    function slideTimer(){
        $("#slide li:nth-child(" + current + ")").fadeOut(duration);
        $("#slide li:nth-child(" + next + ")").fadeIn(duration);
    }
});



//トップメッセージのアニメーション
const message = document.querySelector('#top');
const keyfames ={
    opacity: [0,1]
};
message.animate (keyfames,2000);