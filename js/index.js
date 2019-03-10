$(function(){
  var swiper = new Swiper('.swiper-banner', {
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
  });


  // 视频切换
  var videoSwiper = $('#videoSwiper');
  var videoWrapper = $('#videoWrapper');
  var slideSize  = videoSwiper.find('.video-slide').size();
  var slideWidth = videoWrapper.outerWidth(true);
  videoSwiper.find('.video-slide').width(slideWidth)
  videoWrapper.width(slideWidth * slideSize)
  $('#videoTitle').on('click', 'a', function(){
    console.log($(this).attr('class'))
    let curClassName = $(this).attr('class');
    if(curClassName === 'btn-next'){
      console.log(11)
      videoSwiper.animate({
        left: -slideWidth
      }, 500);
    }else if(curClassName === 'btn-prev'){

    }
    // if($(this).className())
  })
  console.log(videoWrapper.outerWidth(true), slideSize);
})