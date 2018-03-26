'use strict';

function printReceipt(inputs) {
  const itemList = loadAllItems();
  var text = '***<没钱赚商店>收据***';
  var items = [];
  var signalPrice = 0;
  var totalPrice = 0;
  inputs.forEach( input => {
    if(items.some( i => { return i.item.barcode == input})){
      for(let i of items){
        if(i.item.barcode == input){
          i.count++;
          break;
        }
      }
    }
    else{
      for(let i of itemList){
        if(input == i.barcode){
          items.push({item:i,count:1})
          break;
        }
      }
    }
  })
  items.forEach( i => {
    signalPrice = (i.item.price * i.count).toFixed(2);
    text += "\n名称：" + i.item.name + "，数量：" + i.count + i.item.unit +"，单价：" + i.item.price.toFixed(2) +"(元)，小计：" + signalPrice +"(元)";
    totalPrice += parseFloat(signalPrice);
  })
  text += "\n----------------------\n总计：" + totalPrice.toFixed(2) + "(元)\n**********************";
  console.log(text);
}
