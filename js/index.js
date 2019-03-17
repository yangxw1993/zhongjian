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
  var $videoSlide = videoSwiper.find('.video-slide')
  var slideSize  = $videoSlide.size();
  var slideWidth = videoWrapper.outerWidth(true);  
  $videoSlide.width(slideWidth)
  videoWrapper.width(slideWidth * slideSize)
  var curIndex = 0
  var $title = $('#videoTitle').find('span');
  
  setTitle(curIndex)
  // 获取标题
  function setTitle (curIndex) {
    $title.text(`${$videoSlide.eq(curIndex).attr('data-title')}(${curIndex + 1}/${slideSize})`);
  }
  $('#videoTitle').on('click', 'a', function(){
    let curClassName = $(this).attr('class');
    if(curClassName === 'btn-next'){
      curIndex++;
      curIndex === slideSize ? curIndex = 0 : '';      
    }else if(curClassName === 'btn-prev'){
      curIndex--;
      curIndex < 0 ? curIndex = slideSize - 1 : '';
    }
    videoMove(curIndex);
    setTitle(curIndex)
  })
  // 视频移动
  function videoMove(index){
    videoWrapper.stop().animate({
      left: -slideWidth * index
    }, 500);
  }


  // 图表
  var $chartLi = $('.chart').find('li');
  let status = false;
  $('.quota').find('li').on('click', '.quota-title', function(){
    var curEle = $(this).siblings('.quota-content')
    var isHide = curEle.hasClass('hide');
    console.log(isHide);
    if(isHide){
      curEle.removeClass('hide')
    }else{
      curEle.addClass('hide')
    }
    // status = !status;
    /* console.log(status)
    if(status){
      $(this).siblings('.quota-content').slideUp();
    }else{
      $(this).siblings('.quota-content').slideDown();
    } */
    
  })
  /* $chartLi.on('click', '.quota-title', function(){
    console.log($(this).siblings('.quota-content').height())
    console.log(1)
    // $(this).siblings('.quota-content').slideDown();
  }) */
  $chartLi.each(function(i){
    var value = $(this).find('.leval').attr('data-value');
    var canvasId = $(this).find('canvas').attr('id');
    new Chart(canvasId).ratePie(value)
    // console.log(this.find('p').text())
  })
  // var cadmium = new Chart('cadmium')
  // cadmium.ratePie(30);
})