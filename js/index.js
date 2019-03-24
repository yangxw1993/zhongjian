$(function () {
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
      el: '.banner-pagination',
    },
  });
  // tab栏切换
  var $tab = $('#tab');
  var $tabContent = $('.tab-content');
  var className = 'active';
  var showIndex = 1; // TODO 
  $tab.find('li').eq(showIndex).addClass(className);
  $tabContent.eq(showIndex).addClass(className);
  $tab.find('li').on('click', function () {
    let curIndex = $(this).index();
    $(this).addClass(className).siblings().removeClass(className);
    $tabContent.eq(curIndex).addClass(className).siblings().removeClass(className);
  });


  // 视频切换
  var videoSwiper = $('#videoSwiper');
  var videoWrapper = $('#videoWrapper');
  var $videoSlide = videoSwiper.find('.video-slide')
  var slideSize = $videoSlide.size();
  var slideWidth = videoWrapper.outerWidth(true);
  $videoSlide.width(slideWidth)
  videoWrapper.width(slideWidth * slideSize)
  var curIndex = 0
  var $title = $('#videoTitle').find('span');

  setTitle(curIndex)
  // 获取标题
  function setTitle(curIndex) {
    $title.text(`${$videoSlide.eq(curIndex).attr('data-title')}(${curIndex + 1}/${slideSize})`);
  }
  $('#videoTitle').on('click', 'a', function () {
    let curClassName = $(this).attr('class');
    if (curClassName === 'btn-next') {
      curIndex++;
      curIndex === slideSize ? curIndex = 0 : '';
    } else if (curClassName === 'btn-prev') {
      curIndex--;
      curIndex < 0 ? curIndex = slideSize - 1 : '';
    }
    videoMove(curIndex);
    setTitle(curIndex)
  })
  // 视频移动
  function videoMove(index) {
    videoWrapper.stop().animate({
      left: -slideWidth * index
    }, 500);
  }


  // 图表
  var $chartLi = $('.chart').find('li');
  let status = false;
  $('.quota').find('li').on('click', '.quota-title', function () {
    var curEle = $(this).siblings('.quota-content');
    var $arrow = $(this).find('.arrow');
    var isHide = curEle.hasClass('hide');
    console.log(isHide);
    if (isHide) {
      curEle.removeClass('hide');
      $arrow.removeClass('rotate')
    } else {
      curEle.addClass('hide');
      $arrow.addClass('rotate')
    }
  })
  $chartLi.each(function (i) {
    var value = $(this).find('.leval').attr('data-value');
    var canvasId = $(this).find('canvas').attr('id');
    new Chart(canvasId).ratePie(value)
    // console.log(this.find('p').text())
  })

  // 农事操作
  function bindData(res, template, el) {
    var t = template.html();
    var f = Handlebars.compile(t);
    var h = f(res);
    el.html(h);
  }  
  Handlebars.registerHelper('addOne', function (index) {
    return index + 1;
  }); 
  bindData(farmData, $('#operateTmp'), $('#operate'))

 
  var swiperFixed = null;
  $('.preview').click(function(){
    var curAllImg = $(this).find('img');
    var operate = $(this).attr('data-type');
    
    var imgArr = [];
    curAllImg.each(function(){
      var dataSrc= $(this).attr('data-src');
      if(dataSrc){
        imgArr.push(dataSrc)
      }else{
        imgArr.push($(this).attr('src'))
      }
      
    });
    imgArr = deleteCopy(imgArr); // 数组去重
    $('#fixed').removeClass('hide');
    bindData(imgArr, $('#previewTmp'), $('#fixedWrapper'));
    if(operate && operate === 'operate'){
      var dataIndex = $(this).attr('data-index');
      var curData = farmData[dataIndex];
      $('#fixedTitle').text(curData.title)
      $('#operateDate').text('操作时间：' + curData.time)
      $('#operateAuthor').text('操作人：' + curData.author)
      $('#operateText').text(curData.content)
      $('.fixed-text').show();
    }else{
      $('.fixed-text').hide();
    }
    swiperFixed = new Swiper('.fixed-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  })
  /* swiperFixed = new Swiper('.fixed-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  }); */
  $('.fixed-content').click(function(e){
    e.stopPropagation();
  })
  $('#fixed').click(function(e){
    swiperFixed.destroy(false);
    $(this).addClass('hide')
  })
})