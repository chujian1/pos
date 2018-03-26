'use strict';

function printReceipt(inputs) {
  var text = "***<没钱赚商店>收据***";
  var itemList = [];
  var signalPrice ;
  var totalPrice = 0 ;
  for(let input of inputs) {
    if (itemList.some(items => {
        return (items.item.barcode == input.barcode)
      }))
    {
      itemList.forEach(items => {
        if (items.item.barcode == input.barcode)
          items.count++;

      })
    }
    else {
      itemList.push({item:input,count:1});
    }
  }
    for(let i of itemList){
      signalPrice = (i.item.price * i.count).toFixed(2);
      text += "\n名称：" + i.item.name + "，数量：" + i.count + i.item.unit +"，单价：" + i.item.price.toFixed(2) +"(元)，小计：" + signalPrice +"(元)";
      totalPrice += parseFloat(signalPrice);
  }

    text += "\n----------------------\n总计：" + totalPrice.toFixed(2) + "(元)\n**********************";


  console.log(text);
}
