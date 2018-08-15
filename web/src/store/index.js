import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export const store=new Vuex.Store({
  strict:true,
  state:{
    products:[
    {name:'得到1',price:200},
    {name:'得到2',price:200},
    {name:'得到3',price:300}
    ]
  },
getters:{
  saleProducts:(state)=>{
var saleProducts=state.products.map(product=>{
return{
  name:"*" + product.name + "*",
  price:product.price/2
}
});
return saleProducts;
  }
},
mutations:{
  reducePrice:(state,payload)=>{
    state.products.forEach(product=>{
      product.price -=payload;
    });
  }
},
actions:{
  reducePrice:(context,payload)=>{
    setTimeout(function(){
context.commit("reducePrice",payload);
    },1000);
  }
}
});