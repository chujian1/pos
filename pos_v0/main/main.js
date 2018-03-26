'use strict';

function printReceipt(inputs) {
  var text = "***<没钱赚商店>收据***";
  var signalPrice ;
  var totalPrice = 0 ;
  for(let i in inputs){
    signalPrice = (inputs[i].price * inputs[i].count).toFixed(2);
    text += "\n名称：" + inputs[i].name + "，数量：" + inputs[i].count + inputs[i].unit +"，单价：" + inputs[i].price.toFixed(2) +"(元)，小计：" + signalPrice +"(元)";
    totalPrice += parseFloat(signalPrice);
  }
  text += "\n----------------------\n总计：" + totalPrice.toFixed(2) + "(元)\n**********************";

  console.log(text);
}
