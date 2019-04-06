var myLocal = {
  get(key){
    return JSON.parse(window.localStorage.getItem(key));
  },
  save(key,value){
    window.localStorage.setItem(key,JSON.stringify(value));
  }
}

var localStorage = window.localStorage;


var vmPindan = new Vue({
  el: ".mainWrap",
  data:{
    finished,
  },
  methods:{
    quitLog(){
      myLocal.save("user",3);
      window.location="../index.html"
    },
    showing(index, item){
      item.show = true;
      console.log(index);
      console.log(item)
    },
    unshowing(item){
      item.show = false;
    },
    start(){
      sortSchool(orderList, tempList)
    }
  }
})