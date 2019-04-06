//商品细节页面相关方法

var myLocal = {
	get(key){
		return JSON.parse(window.localStorage.getItem(key));
	},
	save(key,value){
		window.localStorage.setItem(key,JSON.stringify(value));
	}
}

var localStorage = window.localStorage;

var vmGoodsDetail = new Vue({
  el:".mainCont",
  data: {
    goodsList,
    goodsIndex,
    localStorage,
  },
  methods : {
    countMin(data){
      if(goodsList[localStorage.goodsIndex].count >= 1){
        goodsList[localStorage.goodsIndex].count -= 1;
        goodsList[localStorage.goodsIndex].sumPrice -= goodsList[localStorage.goodsIndex].singlePrice;
      }
    },
    countPlus(data){
      goodsList[localStorage.goodsIndex].count += 1;
      goodsList[localStorage.goodsIndex].sumPrice += goodsList[localStorage.goodsIndex].singlePrice;
    },
    startCollect(data){
      sumPrice = data.count* goodsList[localStorage.goodsIndex].singlePrice
      myLocal.save("goodsCount", data.count);
      myLocal.save("sumPrice", data.sumPrice);
      alert("您的订单正在拼单中");
    },
    addIncar(data){
      sumPrice = data.count* goodsList[localStorage.goodsIndex].singlePrice
      myLocal.save("goodsCount", data.count);
      myLocal.save("sumPrice", data.sumPrice);
      alert("已加入到购物车");
    }
  }
})