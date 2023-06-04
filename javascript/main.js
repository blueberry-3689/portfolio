const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});

//Workのフィルタリング
$(function(){
    var $btn = $('.btn [data-filter]'),
    $list = $('.list [data-category]');
     
    $btn.on('click', function(e) {
      e.preventDefault();
       
      var $btnTxt = $(this).attr('data-filter');
       
      if ($btnTxt == 'all'){
        $list.fadeOut().promise().done(function() {
          $list.addClass('animate').fadeIn();
        });
      } else {
        $list.fadeOut().promise().done(function() {
          $list.filter('[data-category = "' + $btnTxt + '"]').addClass('animate').fadeIn();
        });
      }
    });
  });