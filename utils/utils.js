function deleteCopy(arr){      
  let obj={};
  let newArr = [];
  arr.forEach((item,index) => { 
    if(!obj[item]){
      obj[item] = true;
      newArr.push(item);
    }             
  });
  return newArr;
}