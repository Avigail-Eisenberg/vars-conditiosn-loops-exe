/*1*/
function sumOfDigits(num) {
  let str = num.toString();
  let sum = 0;

  for (let char of str) {
    sum += Number(char);
  }

  return sum;
}

/*2*/
function buildTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }
}
/*3*/
function findLargest(num1, num2, num3, num4, num5) {

  let largest = num1;

  if (num2 > largest) {
    largest = num2;
  }
  if (num3 > largest) {
    largest = num3;
  }
  if (num4 > largest) {
    largest = num4;
  }
  if (num5 > largest) {
    largest = num5;
  }

  return largest;
}
/*4*/
function countDigits(num) {
  let str = num.toString();
  return str.length;
}
/*5*/
function printEvenNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(i); 
    }
  }
}

/*6*/
function reverseNumber(num) {
  let reversedStr = "";
  while (num > 0) {
    let digit = num % 10;          
    reversedStr += digit;          
    num = Math.floor(num / 10);   
  }
  return Number(reversedStr);
}

/*7*/
function printNumberPyramid() {
  for (let i = 1; i <= 5; i++) {
    console.log(String(i).repeat(i));
  }
}

/*8*/
function isPalindrome3Digits(num) {
  if (Math.floor(num / 100) === num % 10) {
    return "Palindrome";
  } else {
    return "Not a Palindrome";
  }
}
/*9*/
function printMultiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} =${num * i}`);
  }
}

/*10*/
function collatzSequence(num) {
  console.log(num);
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;       
    } else {
      num = (num * 3) + 1;
    }
    console.log(num);
  }
}
