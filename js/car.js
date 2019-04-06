//购物车相关方法

var myLocal = {
	get(key){
		return JSON.parse(window.localStorage.getItem(key));
	},
	save(key,value){
		window.localStorage.setItem(key,JSON.stringify(value));
	}
}

var localStorage = window.localStorage;

var vmCar = new Vue({
  el: "#content",
  data:{
    userData,
    goodsList,
    goodsIndex,
    goods,
    carList,
    localStorage
  },
  computed:{
    count : function (){
			return this.carList.filter(function(item){
					return item.checked;
				}).length;
		},
  },
  methods:{
    startCollect(){
      alert("您的订单正在拼单中");
    }
  }
})