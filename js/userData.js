//用户数据页面及相关方法

var myLocal = {
	get(key){
		return JSON.parse(window.localStorage.getItem(key));
	},
	save(key,value){
		window.localStorage.setItem(key,JSON.stringify(value));
	}
}

var localStorage = window.localStorage;
console.log(localStorage)


var vmUser = new Vue({
  el: ".mainWrap",
  data:{
    userData,
    goodsList,
    goodsIndex,
    localStorage
  },
  methods:{
    quitLog(){
      myLocal.save("user",3);
      window.location="../index.html"
    }
  }
})