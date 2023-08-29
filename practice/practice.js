const a = 5;
const b = 2;
let myName = "jennie";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Jenjenie";
console.log("Your new name is " + myName);

const amIFat = null;
let something;
console.log(something, amIFat);

// use array, using [ , , ], put whatever I want
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsenese = [1, 2, "hello", false, null, undefined, "jennie", something];
console.log(daysOfWeek, nonsenese);
// Get Item from Array
console.log(daysOfWeek[5]); // 6th elements. 0,1,2,..이렇게 숫자 셈.

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "chicken"];
toBuy.push("kimbab");
console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);

// const player = ["jennie", 10, true, "not at all"]
// it need explanations like, player[0] == name, player[1] == points
const player = {
  name: "jennie",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
// can update
player.fat = false;
player.points = 22;
player.name = "jenjennie";
console.log(player);
player.lastName = "potato";
console.log(player);
player.points = player.points + 10; // player.points: number
console.log(player, console); // can see what are in console function

//Function form xx.xx()
function sayHello(nameOfPerson, ageOfPerson) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + ageOfPerson);
}

sayHello("jennie", 18);
sayHello("nico", 10);
sayHello("dal", 21);

function plus(firstNumber, secondNumber) {
  //여기서 firstNumber, secondNumber는 place holder일 뿐
  console.log(firstNumber + secondNumber);
}
plus(8, 60);

function divide(a, b) {
  console.log(a / b);
}
divide(8, 60);

const player1 = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("Hello " + otherPersonsName + "! Nice to meet you");
  },
};
console.log(player1.name);
player1.sayHello("jennie");
player1.sayHello("nico");
// player1에 속한 sayHello function. player1.sayHello()
// 위에 정의한 sayHello function과는 다르다. sayHello()

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(5, 2);
calculator.minus(5, 2);
calculator.divide(5, 2);
calculator.power(5, 2);

const age1 = 34;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age1);

console.log(krAge);

const calculatorReturn = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  times: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculatorReturn.plus(2, 3);
const minusResult = calculatorReturn.minus(plusResult, 10);
const timesResult = calculatorReturn.times(10, minusResult);
const divideResult = calculatorReturn.divide(timesResult, plusResult);
const powerResult = calculatorReturn.power(divideResult, minusResult);
// consol에 직접 plusResult, minusResult.. 입력하면 값 나옴.

// conditional
const age2 = prompt("How old are you?");
// parseInt(): string -> number
console.log(age2);
console.log(typeof age2, typeof parseInt(age2)); // type 보는 방법
console.log(age2, parseInt(age2));
// 문자 입력하면, parseInt에서 NaN: not a number 뜬다.

const age3 = parseInt(prompt("How old are you??"));
console.log(age3);

// age가 parseInt() 후에 number가 아니라 NaN이면 다시 입력하라고 뜨게 할거야.
// make the function, which checks whether it is not a number
console.log(isNaN(age3)); // it returns boolean. It is not a number.

if (isNaN(age3)) {
  // condition === true
  console.log("Please write a number");
} else {
  // condition === false
  console.log("Thank you for writing your age. Your age is " + age3 + ".");
}

// more than one condition. Using else if.
const age = parseInt(prompt("Hi, How old are you?"));

// true || ture === ture
// true || false === true
// false || false === false
// true && ture === ture
// true && false === false
// false && false === false

if (isNaN(age) || age < 0) {
  // at least one conditonal true, it will run.
  console.log("Please write a real positive number!");
} else if (age < 18) {
  console.log("You are too young to drink.");
} else if (age >= 18 && age <= 50) {
  // both condition should be all true to run this conditional
  console.log("You can drink.");
} else if (age > 50 && age <= 80) {
  console.log("Why don't we stop drinking?");
} else if (age === 100) {
  console.log("Wow! Congrats!"); // consider about ordering. 이게 밑의 조건문 아래로 가면 실행하지 않게돼. true인 조건문이 실행되면 그 이후는 종료되기 때문.
} else if (age > 80) {
  console.log("You had better stop drinking.");
}
// complicate conditional: if ((a && b) || (c && d) || (x || z)){} 괄호 먼저 실행된다. 수학처럼.

/////////////////////////////////
// How to get element from HTML to JS
// 1. using getElementById
//
const title = document.querySelector(".hello:first-child h1");
console.log(title);
// title.innerText = "Hello"; // change innerText
// title.style.color = "blue";
// listen for event
// function handleTitleClick() {
//   console.log("title was clicked!");
//   title.style.color = "tomato";
// } // click 하면 실행될 function 만들기.

// title.addEventListener("click", handleTitleClick);

// title.onclick = handleTitleClick 과 동일
// 하지만 위와 같이 쓰면 removeEventListener 나중에 사용 가능.
// handleTitleClick function을 실행시키지않고(handleTitleClick()) JS에 넘겨주고 JS가 실행하게 하는 것.

// when mousenter, mous is top on the title
// function handleMouseEnter() {
//   title.innerText = "Mouse is here!";
// }
// title.addEventListener("mouseenter", handleMouseEnter);
// function handleMouseLeave() {
//   title.innerText = "Mouse is gone!";
// }
// title.addEventListener("mouseleave", handleMouseLeave);

// document처럼 window 도 JS에 이미 있어.
// function handleWindowResize() {
//   document.body.style.backgroundColor = "violet";
// }
// window.addEventListener("resize", handleWindowResize);

// function handleWindowCopy() {
//   alert("Copier!");
// }
// window.addEventListener("copy", handleWindowCopy);

// function handleWindowOffline() {
//   alert("SOS no Wifi!");
// }
// window.addEventListener("offline", handleWindowOffline);

// function handleWindowOnline() {
//   alert("ALL GOOOD!");
// }
// window.addEventListener("online", handleWindowOnline);

// function handleTitleClick() {
//   const currentColor = title.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   title.style.color = newColor;
// }

// css 를 이용해서 나타내보자
function handleTitleClick() {
  // const activeClass = "active haha.font";
  // if (h1.className === activeClass) {
  //   h1.className = "haha.font"
  // } else {
  //   h1.className = activeClass;
  // }

  // const activeClass = "active";
  // if (title.classList.contains(activeClass)) {
  //   title.classList.remove(activeClass);
  // } else {
  //   title.classList.add(activeClass);
  // }
  title.classList.toggle("active");
}

title.addEventListener("click", handleTitleClick);
