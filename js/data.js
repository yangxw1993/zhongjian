// 农事操作
var farmData = [
  {
    title: "产地土壤整修记录",
    time: "2018/03/15",
    author: "华春雨",
    content: "正在进行春耕前的土地休整工作，土地休整预计持续3天，需要分配10-20人次进行反复翻整。",
    imgList: [
      {
        img: '0315_1_1.jpg',
        bigImg: '0315_1_2.jpg',
      },
      {
        img: '0315_2_1.jpg',
        bigImg: '0315_2_2.jpg',
      }
    ]
  },
  {
    title: "产地水质检测",
    time: "2018/04/02",
    author: "杨兵",
    content: "产地水质检测，采样并提交实验室，3日内返回检测结果。",
    imgList: [
      {
        img: '0402_1_1.jpg',
        bigImg: '0402_1_2.jpg',
      },
      {
        img: '0402_2_1.jpg',
        bigImg: '0402_2_2.jpg',
      }
    ]
  },
  {
    title: "春耕",
    time: "2018/04/10",
    author: "王桂金",
    content: "2018年4月10日 在水稻种植区进行春耕作业，计划投入12个人力，在5天内完成。",
    imgList: [
      {
        img: '0410_1_1.jpg',
        bigImg: '0410_1_2.jpg',
      },
      {
        img: '0410_2_1.jpg',
        bigImg: '0410_2_2.jpg',
      }
    ]
  },
  {
    title: "播种",
    time: "2018/04/20",
    author: "詹俊峰",
    content: "2018年4月20日 苗床进入播种期，同时做到防止烂种死苗，计划三天内完成。",
    imgList: [
      {
        img: '0420_1_1.jpg',
        bigImg: '0410_1_2.jpg',
      },
      {
        img: '0420_2_1.jpg',
        bigImg: '0410_2_2.jpg',
      },
      {
        img: '0420_3_1.jpg',
        bigImg: '0410_3_2.jpg',
      }
    ]
  },
  {
    title: "施肥",
    time: "2018/04/25",
    author: "王心铭",
    content: "2018年4月25日 进入施肥期，预备投入7人，在五天内完成。",
    imgList: [
      {
        img: '0425_1_1.jpg',
        bigImg: '0425_1_2.jpg',
      },
      {
        img: '0425_2_1.jpg',
        bigImg: '0425_2_2.jpg',
      },
      {
        img: '0425_3_1.jpg',
        bigImg: '0425_3_2.jpg',
      }
    ]
  },
  {
    title: "灌溉",
    time: "2018/04/30",
    author: "詹俊峰",
    content: "2018年4月30日 进入灌溉期，准备充足水源，并投入15人力，预计3天完成。",
    imgList: [
      {
        img: '0430_1_1.jpg',
        bigImg: '0430_1_2.jpg',
      },
      {
        img: '0430_2_1.jpg',
        bigImg: '0430_2_2.jpg',
      },
      {
        img: '0430_3_1.jpg',
        bigImg: '0430_3_2.jpg',
      }
    ]
  },
  {
    title: "除草",
    time: "2018/05/04",
    author: "詹俊峰",
    content: "2018年5月4号 进入除草期，加强水稻田管理，防虫病害，防治杂草，并对杂草进行清除，预计三天完成。",
    imgList: [
      {
        img: '0504_1_1.jpg',
        bigImg: '0504_1_2.jpg',
      },
      {
        img: '0504_2_1.jpg',
        bigImg: '0504_2_2.jpg',
      },
      {
        img: '0504_3_1.jpg',
        bigImg: '0504_3_2.jpg',
      }
    ]
  },
  {
    title: "除虫",
    time: "2018/05/29",
    author: "詹俊峰",
    content: "通过物理除虫方式，改善水稻生长环境，增加水稻产量。",
    imgList: [
      {
        img: '0529_1_1.jpg',
        bigImg: '0529_1_2.jpg',
      },
      {
        img: '0529_2_1.jpg',
        bigImg: '0529_2_2.jpg',
      }
    ]
  },
  {
    title: "灌溉",
    time: "2018/07/02",
    author: "詹俊峰",
    content: "收割前 7 天撤水，根据地块的土质情况，粘重的涝洼地可提前半个月撤水，不保水的砂性地可提前三天撤水。",
    imgList: [
      {
        img: '0702_1_1.jpg',
        bigImg: '0702_1_2.jpg',
      },
      {
        img: '0702_2_1.jpg',
        bigImg: '0702_2_2.jpg',
      }
    ]
  },
  {
    title: "收获",
    time: "2018/07/16",
    author: "詹俊峰",
    content: "收获前将田间倒伏、感病虫害的植株淘汰掉，防止霉变及虫食稻谷混入，在水稻完熟期 90%谷粒变黄时收割。",
    imgList: [
      {
        img: '0716_1_1.jpg',
        bigImg: '0716_1_2.jpg',
      },
      {
        img: '0716_2_1.jpg',
        bigImg: '0716_2_2.jpg',
      },
      {
        img: '0716_3_1.jpg',
        bigImg: '0716_3_2.jpg',
      }
    ]
  },
  {
    title: "晾晒",
    time: "2018/07/22",
    author: "詹俊峰",
    content: "及时脱粒、干燥降水、包装、入库贮存，避免贮存时含水量超标，水分含量在 14%左右为宜。",
    imgList: [
      {
        img: '0410_1_1.jpg',
        bigImg: '0410_1_2.jpg',
      },
      {
        img: '0410_2_1.jpg',
        bigImg: '0410_2_2.jpg',
      }
    ]
  },
  {
    title: "加工生产",
    time: "2018/08/18",
    author: "詹俊峰",
    content: "稻谷领用、投料、上料、初清、清理、砻谷、碾米、筛理、色选、抛光。",
    imgList: [
      {
        img: '0410_1_1.jpg',
        bigImg: '0410_1_2.jpg',
      },
      {
        img: '0410_2_1.jpg',
        bigImg: '0410_2_2.jpg',
      }
    ]
  },
  {
    title: "入库",
    time: "2018/08/25",
    author: "詹俊峰",
    content: "有机产品应单独存放。与常规产品共同存放时，在仓库内划出特定区域，利用有机标签，确保有机产品不与非认证产品混放。",
    imgList: [
      {
        img: '0410_1_1.jpg',
        bigImg: '0410_1_2.jpg',
      },
      {
        img: '0410_2_1.jpg',
        bigImg: '0410_2_2.jpg',
      }
    ]
  }
];

var videoList = [
  {
    videoUrl: './video/movie.ogg',
    title: "威坪村有机大米1号"
  },
  {
    videoUrl: './video/mov_bbb.mp4',
    title: "威坪村有机大米2号"
  },
  {
    videoUrl: './video/movie.ogg',
    title: "威坪村有机大米3号"
  }
]