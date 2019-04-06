//订单细节模拟数据：主要用于订单细节页面的数据提供

var userCont = 0,
    count = 1;

var orderList = [
  {
    userName : "user1",
    orderPrice : 299,
    address : "哈尔滨理工大学",
    from : "fellunique"
  },
  {
    userName : "user2",
    orderPrice : 498,
    address : "哈尔滨工业大学",
    from : "Amazon"
  },
  {
    userName : "user3",
    orderPrice : 397,
    address : "黑龙江大学",
    from : "Amazon"
  },
  {
    userName : "user4",
    orderPrice : 268,
    address : "黑龙江大学",
    from : "Amazon"
  },
  {
    userName : "user5",
    orderPrice : 310,
    address : "哈尔滨工业大学",
    from : "Amazon"
  },
  {
    userName : "user6",
    orderPrice : 375,
    address : "哈尔滨理工大学",
    from : "fellunique"
  },
  {
    userName : "user7",
    orderPrice : 383,
    address : "哈尔滨理工大学",
    from : "macy"
  },
  {
    userName : "user8",
    orderPrice : 400,
    address : "哈尔滨理工大学",
    from : "macy"
  },
  {
    userName : "user9",
    orderPrice : 338,
    address : "哈尔滨理工大学",
    from : "Amazon"
  },
  {
    userName : "user10",
    orderPrice : 534,
    address : "哈尔滨工业大学",
    from : "Amazon"
  },
  {
    userName : "user11",
    orderPrice : 257,
    address : "哈尔滨理工大学",
    from : "Amazon"
  },
  {
    userName : "user12",
    orderPrice : 140,
    address : "哈尔滨理工大学",
    from : "Amazon"
  },
  {
    userName : "user13",
    orderPrice : 620,
    address : "哈尔滨理工大学",
    from : "macy"
  },
  {
    userName : "user14",
    orderPrice : 430,
    address : "哈尔滨理工大学",
    from : "fellunique"
  },
  {
    userName : "user15",
    orderPrice : 704,
    address : "黑龙江大学",
    from : "Amazon"
  },
  {
    userName : "user15",
    orderPrice : 279,
    address : "哈尔滨理工大学",
    from : "Amazon"
  },
  {
    userName : "user16",
    orderPrice : 277,
    address : "哈尔滨理工大学",
    from : "fellunique"
  },
  {
    userName : "user17",
    orderPrice : 260,
    address : "哈尔滨理工大学",
    from : "Amazon"
  },
  {
    userName : "user18",
    orderPrice : 123,
    address : "哈尔滨理工大学",
    from : "fellunique"
  },
  {
    userName : "user19",
    orderPrice : 234,
    address : "哈尔滨理工大学",
    from : "Amazon"
  },
  {
    userName : "user20",
    orderPrice : 233,
    address : "哈尔滨理工大学",
    from : "Amazon"
  }
]

var tempList = [           //学校临时分组
  [],
  [],
  []
]
var webListA = [          //网站分组
  [],
  [],
  []
]

var templateFin = {          //大订单模板
  address : "",
  orderNo : "20181124" + new Date().getTime(),
  userCont : 0,
  sumPrice : 0,
  show: false,
  userList : []
}

var finished = []

function sortOther() {
  orderDeal(tempList[1],0);
  orderDeal(tempList[2],0);
}

function sortSchool(orderList, tempList) { //对学校进行分类
  orderList.forEach(function (item,index) {
    if(item.address == "哈尔滨理工大学"){
      tempList[0].push(orderList[index]);

    }
    if(item.address == "哈尔滨工业大学"){
      tempList[1].push(orderList[index]);
    }
    if(item.address == "黑龙江大学"){
      tempList[2].push(orderList[index]);
    }
  })
  sortWeb();
}

function sortWeb() {//对网站进行分类
  tempList[0].forEach(function (item, index) {
    if(item.from == "Amazon"){
      webListA[0].push(item);
    }
    if(item.from == "fellunique"){
      webListA[1].push(item);
    }
    if(item.from == "macy"){
      webListA[2].push(item);
    }
  })
  webListA.forEach(function (item, index) {
    orderDeal(item, index);
  })
  sortOther();
}

function orderDeal(item,index) {//处理订单
  if(index == 0){
    templateFin.from = "Amazon"
  }else{
    if(index == 1){
      templateFin.from = "fellunique"
    }else{
      templateFin.from = "macy"
    }
  }
  item.forEach(function (item, index) {
    if(templateFin.sumPrice < 2000 && templateFin.from == item.from){
      templateFin.sumPrice += item.orderPrice;
      templateFin.userCont += 1 ;
      if(templateFin.address !== item.address){
        templateFin.address = item.address;
      }
      templateFin.userList.push(
        {
          "userName" : item.userName,
          "orderPrice" : item.orderPrice
        }
      )
    }
  })
  finished.push(templateFin);
  console.log(templateFin)
  templateFin = {          //大订单模板
    address : "",
    orderNo : "20181124" + new Date().getTime(),
    userCont : 0,
    sumPrice : 0,
    show: false,
    userList : []
  }
}