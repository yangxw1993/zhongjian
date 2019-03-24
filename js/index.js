$(function () {
  // 绑定数据
  function bindData(res, template, el) {
    var t = template.html();
    var f = Handlebars.compile(t);
    var h = f(res);
    el.html(h);
  }
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
  var showIndex = 0; // TODO 
  $tab.find('li').eq(showIndex).addClass(className);
  $tabContent.eq(showIndex).addClass(className);
  $tab.find('li').on('click', function () {
    let curIndex = $(this).index();
    $(this).addClass(className).siblings().removeClass(className);
    $tabContent.eq(curIndex).addClass(className).siblings().removeClass(className);
  });


  // 视频切换
  bindData(videoList, $('#videoTmp'), $('#videoWrapper'))
  var swiperVideo = new Swiper('.video-container', {
    loop: true,
  });
  var curVideoIndex = swiperVideo.activeIndex;
  var $videoTitle = $('#videoTitle');
  console.log(curVideoIndex);
  setVideoTitle(curVideoIndex)
  $videoTitle.on('click', 'a', function(){
    var curClassName = $(this).attr('class');
    if(curClassName === 'btn-next'){
      swiperVideo.slideNext();
    }else if(curClassName === 'btn-prev'){
      swiperVideo.slidePrev();
    }
    curVideoIndex = swiperVideo.activeIndex;
    if(curVideoIndex > videoList.length){
      curVideoIndex = 1;
    }
    if(curVideoIndex < 1){
      curVideoIndex = videoList.length;
    }
    console.log(curVideoIndex)
    setVideoTitle(curVideoIndex);
  });
  function setVideoTitle(index){
    $videoTitle.find('span').text(`${videoList[index-1].title}(${index}/${videoList.length})`);
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

  Handlebars.registerHelper('addOne', function (index) {
    return index + 1;
  });
  bindData(farmData, $('#operateTmp'), $('#operate'))


  var swiperFixed = null;
  $('.preview').click(function () {
    var curAllImg = $(this).find('img');
    var operate = $(this).attr('data-type');

    var imgArr = [];
    curAllImg.each(function () {
      var dataSrc = $(this).attr('data-src');
      if (dataSrc) {
        imgArr.push(dataSrc)
      } else {
        imgArr.push($(this).attr('src'))
      }

    });
    imgArr = deleteCopy(imgArr); // 数组去重
    $('#fixed').removeClass('hide');
    bindData(imgArr, $('#previewTmp'), $('#fixedWrapper'));
    if (operate && operate === 'operate') {
      var dataIndex = $(this).attr('data-index');
      var curData = farmData[dataIndex];
      $('#fixedTitle').text(curData.title)
      $('#operateDate').text('操作时间：' + curData.time)
      $('#operateAuthor').text('操作人：' + curData.author)
      $('#operateText').text(curData.content)
      $('.fixed-text').show();
    } else {
      $('.fixed-text').hide();
    }
    swiperFixed = new Swiper('.fixed-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  })
  $('.fixed-content').click(function (e) {
    e.stopPropagation();
  })
  $('#fixed').click(function (e) {
    swiperFixed.destroy(false);
    $(this).addClass('hide')
  })

  // 地图
  // 百度地图API功能
  var map = new BMap.Map("map");    // 创建Map实例
  map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
  //添加地图类型控件
  map.addControl(new BMap.MapTypeControl({
    mapTypes: [
      BMAP_NORMAL_MAP,
      BMAP_HYBRID_MAP
    ]
  }));
  // map.setCurrentCity("上饶");          // 设置地图显示的城市 此项是必须设置的
  map.centerAndZoom("上饶", 15);
  setTimeout(function () {
    map.setZoom(14);
  }, 2000);  //2秒后放大到14级
  map.enableDragging();
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

})