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


