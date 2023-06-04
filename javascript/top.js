//スライドショー
$(function(){
    var count = $("#slide li").length;
    var current = 1;
    var next = 2;
    var interval = 5000;
    var duration = 700;
    var timer;
    $("#slide li:not(:first-child)").hide();
    timer = setInterval(slideTimer, interval);
    function slideTimer(){
        $("#slide li:nth-child(" + current + ")").fadeOut(duration);
        $("#slide li:nth-child(" + next + ")").fadeIn(duration);
        current = next;
        next= ++next;
        if(next > count){
            next = 1;
        }

        //targetクラス削除
        $("#button li a").removeClass("target");
        //現在のボタンにtargetクラスを追加
        $("#button li:nth-chuld("+ current +") a")
        .addClass("target");
    }
    //スライドショー　ボタン
    $("#button li a").click(function(){
        next = $(this).html();
        clearInterval(timer);
        timer = setInterval(slideTimer , interval);
        slideTimer();
        return false;
    });
});


//トップメッセージのアニメーション
$(function () {
    $(window).scroll(function(){
      var windowHeight = $(window).height(),
      scrollY = $(window).scrollTop();
      $('.scroll_fadein').each(function(){
        var thisPosition = $(this).offset().top;
        if(scrollY > thisPosition - windowHeight){
          $(this).addClass('fadein_animation_start');
        }
      });
    });
  });