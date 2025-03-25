// Reverse the given numbers
var reverse = function(num) {
var reverseNum = 0;
  while(parseInt(num)>0){
        lastdigit = num %10;
        reverseNum = (reverseNum*10) + parseInt(lastdigit);
        num = num /10;
  } return reverseNum;
};

console.log(reverse(1234));
console.log(reverse(55989));
console.log(reverse(190900));

// Palindrome function

var reverse = function(num) {
  let temp = num;
var reverseNum = 0;
  while(parseInt(temp)>0){
        lastdigit = temp %10;
        reverseNum = (reverseNum*10) + parseInt(lastdigit);
        temp = temp /10;
  } 
  if(num == reverseNum) return true;
  else return false;
};

num = 1234;
num1 = 1991;
num2 = 190900;
console.log(reverse(num));
console.log(reverse(num1));
console.log(reverse(num2));

// Armstrong number function

var armStrong = function(num) {
  let temp = num;
var result = 0;
  while(parseInt(temp)>0){
        lastdigit = temp %10;
        result = result + (parseInt(lastdigit) * parseInt(lastdigit) * parseInt(lastdigit));
        temp = temp /10;
  } 
  if(num == result) return true;
  else return false;
};

num = 153;
num1 = 371;
num2 = 131;
console.log(armStrong(num));
console.log(armStrong(num1));
console.log(armStrong(num2));

// Print all divisors  function

var divisors = function(num) {
  let arr = [];
  for(let i =0; i<=(i*i<=num);i++){
    if(num%i == 0){
      arr.push(i);
      if(num/i != i){
        arr.push(num/i);
      }
    }
  }
  return arr;
  
};

num = 36;
num1 = 12;
num2 = 50;
console.log(divisors(num));
console.log(divisors(num1));
console.log(divisors(num2));
var divisors = function(num) {
  let arr = [];
  for(let i =0; i<=num;i++){
    if(num%i == 0){
      arr.push(i);
    }
  }
  return arr;
  
};

num = 36;
num1 = 12;
num2 = 50;
console.log(divisors(num));
console.log(divisors(num1));
console.log(divisors(num2));

