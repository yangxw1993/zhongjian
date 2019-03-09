$(function(){
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  // tab栏切换
  var $tab = $('#tab');
  var $tabContent = $('.tab-content');
  var className = 'active';
  $tab.find('li').eq(0).addClass(className);
  $tabContent.eq(0).addClass(className);
  $tab.find('li').on('click', function(){
    let curIndex = $(this).index();
    $(this).addClass(className).siblings().removeClass(className);
    $tabContent.eq(curIndex).addClass(className).siblings().removeClass(className);
  })
})