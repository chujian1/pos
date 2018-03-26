'use strict';

function printReceipt(inputs) {
  const itemList = loadAllItems();
  const discount = loadPromotions();
  const discountItems = discount[0].barcodes;
  var text = '***<没钱赚商店>收据***';
  var items = [];
  var signalPrice = 0;
  var totalPrice = 0;
  var prePrice = 0;
  function getItems(barcode,count) {
    if(items.some( i => { return i.item.barcode == barcode})){
      for(let i of items){
        if(i.item.barcode == barcode){
          i.count += parseInt(count);
          break;
        }
      }
    }
    else{
      for(let i of itemList){
        if(barcode == i.barcode){
          items.push({item:i,count:count})
          break;
        }
      }
    }
  }
  inputs.forEach( input => {
    var arr = input.split("-");
    if(arr.length == 1)
      getItems(input,1)
    else
      getItems(arr[0],arr[1])
  })

  items.forEach( i => {
    prePrice += parseFloat((i.item.price * i.count).toFixed(2));
    if(discountItems.some( d => {
      return d == i.item.barcode;
      })){
      let num = parseInt(i.count/3);
      signalPrice = (i.item.price * (i.count - num)).toFixed(2);
    }
    else{
      signalPrice = (i.item.price * i.count).toFixed(2);
    }
    text += "\n名称：" + i.item.name + "，数量：" + i.count + i.item.unit +"，单价：" + i.item.price.toFixed(2) +"(元)，小计：" + signalPrice +"(元)";
    totalPrice += parseFloat(signalPrice);
  })
  text += "\n----------------------\n总计：" + totalPrice.toFixed(2) + "(元)\n节省：" + (prePrice - totalPrice).toFixed(2) + "(元)\n**********************";
  console.log(text);
}
