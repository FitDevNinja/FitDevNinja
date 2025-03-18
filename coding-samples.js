let arr1 = [1,2,3,4,33,10];
let arr2 = [6,7,8,9,10,33,44];


function findDuplicates(arr1,arr2){
  let set1 = {};
  let result = [];
  for(let i=0;i<arr1.length;i++){
    set1[arr1[i]] = true;
  }
  for(let j=0;j<arr2.length;j++){
    if(set1[arr2[j]]){
      result.push(arr2[j]);
      set1[arr2[j]] = false;
    }
  }
  return result;
  
}

console.log(findDuplicates(arr1,arr2));
