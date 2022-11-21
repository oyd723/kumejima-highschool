$(function () {

  $('.slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
  });


  // ----------------------------------
  // レスポンシブ用ナビゲーション
  // ----------------------------------
  var windowWidth = $(window).width();
  var windowSm = 480;
  if (windowWidth <= windowSm) {
    //横幅480px以下（スマホ）に適用させるJavaScriptを記述

    $('.slider').slick({
      slidesToShow: 2,//スライドを画面に2枚見せる
      slidesToScroll: 1,//1回のスライドで動かす要素数
    });
  }





});