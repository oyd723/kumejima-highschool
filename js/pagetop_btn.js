//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {//上から100pxスクロールしたら
    $('#pagetop').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
    $('#pagetop').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
  } else {
    if ($('#pagetop').hasClass('UpMove')) {//すでに#page-topにUpMoveというクラス名がついていたら
      $('#pagetop').removeClass('UpMove');//UpMoveというクラス名を除き
      $('#pagetop').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#pagetop').click(function () {
  var scroll = $(window).scrollTop(); //スクロール値を取得
  if (scroll > 0) {
    $(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
    $('body,html').animate({
      scrollTop: 0
    }, 2000, function () {//スクロールの速さ。数字が大きくなるほど遅くなる
      $('#pagetop').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
    });
  }
  return false;//リンク自体の無効化
});