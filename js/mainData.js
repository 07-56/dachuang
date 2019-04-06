//主要的数据结构及相关模拟数据

var goodsList = [
  {
    title:"2018新款iPad",               //商品名称
    imgs : "../imgs/source/1.JPG",     //图片地址
    singlePrice: 350,                  //商品单价
    sumPrice: 350,                      //商品总价
    from: "Amazon.com",               //商品来源地
    count: 1,                         //商品数量
    goodsId: "0101"                   //商品ID（唯一）
  },
  {
    title:"Samsung galaxy手机",               //商品名称
    imgs : "../imgs/source/2.JPG",     //图片地址
    singlePrice: 400,                  //商品单价
    sumPrice: 400,                      //商品总价
    from: "Amazon.com",               //商品来源地
    count: 1,                         //商品数量
    goodsId: "0102"                   //商品ID（唯一）
  },
  {
    title:"营养早餐1.4kg",               //商品名称
    imgs : "../imgs/source/3.JPG",     //图片地址
    singlePrice: 80,                  //商品单价
    sumPrice: 80,                      //商品总价
    from: "Amazon.com",               //商品来源地
    count: 1,                         //商品数量
    goodsId: "0103"                   //商品ID（唯一）
  },
  {
    title:"霸王洗发液",               //商品名称
    imgs : "../imgs/source/4.JPG",     //图片地址
    singlePrice: 90,                  //商品单价
    sumPrice: 90,                      //商品总价
    from: "Amazon.com",               //商品来源地
    count: 1,                         //商品数量
    goodsId: "0104"                   //商品ID（唯一）
  }
]
//localStorage===========================
var goodsIndex = 0;//临时商品索引
var user = "用户"; //登陆账户

var goods={
  count: 1,
  sumPrice: 0
}
//=======================================
var carList = [
  {
    checked: true,
  }
]

var userData = [
  {
    userName : "用户",                     //用户名
    userID: "01",                          //用户ID
    userAddress : "哈尔滨理工大学",         //收货地址
    passWord: "123123",                    //密码
    orderNo: "1122334",                     //用户订单号
    orderStatus :"拼单成功"
  }
]

var orderListComplete = [           //拼单完成的列表
  {
    target:"哈尔滨理工大学",        //订单目的地
    orderNo:"1122334",             //订单编号
    userCount : 0,                //用户数量
    orderValueB : 0,               //大订单总价
    userList:[                    //用户列表
      {
        userName: "Text",         //用户名
        userID: "01",             //用户ID
        orderValue: 0,            //商品总价值
        goods: "",                //商品
      }
    ]
  }
]


