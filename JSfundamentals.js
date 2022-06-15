// let x = 15;
// x += 10;
// x++;
// x--;
// console.log(x);

//Order of precedence
// exponential is executed from right to left
// math operators are executed from left to right
//assignment operator is executed right to left
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// Coding Challenge #1
//mass in kg
//height in meter
// let markMass = 95;
// let markHeight = 1.88;
// let johnMass = 85;
// let johnHeight = 1.76;
// BMI = mass / height ** 2;
// let markBMI = markMass / markHeight ** 2;
// console.log(markBMI);
// let johnBMI = johnMass / johnHeight ** 2;
// console.log(johnBMI);
// let markHigherBMI = markBMI;
// let johnHigherBMI = johnBMI;
// console.log(markHigherBMI > johnHigherBMI);

// let mark = `Mark's BMI is ${markBMI}`;
// console.log(mark);

// Coding Challenge #2
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI ${markBMI} is greater than John's ${johnBMI}`);
// } else {
//   console.log(`John's BMI ${johnBMI} is greater than Mark's ${markBMI}`);
// }

// prompt the user to enter a value, if value is a strng convert to a number and add a value
// let number = '1991';
// console.log(Number(number) + 18);
// let user = prompt('Enter a number');
// console.log(Number(user) + 9);

// let year = "2022";
// let age = "33";
// console.log(Number(2022) - Number(age));

// console.log(String(23));

//Falsy values - 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean({}));

// Coding Challenge #3
// i. Calculate the average score for each team(dolphins and koalas)
// ii. Compare the team's average scores to determine the winner of the competition.
// iii. If there is adraw between teams, include a requirement for a minimum score of 100, with this rule a team wins if it has higher score
// than the other team and at the same a score of atleast 100 points

// let dolphinAverageScore = (97 + 112 + 101) / 3;

// let koalasAverageScore = (109 + 95 + 106) / 3;

// if (dolphinAverageScore > koalasAverageScore) {
//   console.log(`Team Dolphin won the trophy 🏆`);
// } else if (koalasAverageScore > dolphinAverageScore) {
//   console.log(`Team Koalas won the trophy 🏆`);
// } else if (dolphinAverageScore === koalasAverageScore) {
//   console.log(`Both won the trophy 🏆`);
// }

// An expression is a piece of code that produces a value
// A statement is a piece of code that does not produce a value

// let age = 23;
// age >= 18
//   ? console.log("Allowed to drink wine")
//   : console.log("Not allowed to drink wine");

// let name = "Precious";
// name === "Precious" ? console.log("Name is precious"): console.log("Name is not precious");

// let age = 18;
// console.log(`I'll like to drink ${age >= 18 ? 'wine 🥂'  : 'water 🥃' }`);

// let name = "Joy";
// console.log(`My name is ${name === 'Joy' ? 'Correct' : 'Wrong'}`);

// Coding Challenge #4
// let bill = 40;
// let tip =
//   bill >= 50 && bill <= 300
//     ? console.log(`The bill was ${bill}, the tip is ${bill * 0.15}`)
//     : console.log(`The bill was ${bill}, the tip is ${bill * 0.20}`);

// Babel is used to transpile and polyfill your code which means converting back to ES5 to ensure browser compatibility for all users

//Strict mode
// "use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive 😁😀😁");

"use strict";
//to return the value outside the function use return keyword

// function calculateAge(birthYear){
//     return 2022 -  birthYear;
// }
// let age1 = calculateAge(2000);
// console.log(age1);

// let getWinners = function (averageScore, houseColor) {
//     ? console.log(
//         `The ${houseColor} won with the avaerage score of ${averageScore}`
//       )
//     : console.log(
//         `The ${houseColor} won with the avaerage score of ${averageScore}`
//       );
// };

// let userOne = getWinners(90, "Blue");
// let userTwo = getWinners(120, "Yellow");

// let user = 20;
// user <= 18
//   ? console.log("User can drink wine")
//   : console.log("User can drink water");

// let age = 23;
// age <= 18
//   ? console.log("Allowed to drink wine")
//   : console.log("Not allowed to drink wine");

//Get user input using prompt(“Enter your age:”).
//If user is 18 or older , give feedback:'You are old enough to drive'
//but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let age = Number(prompt("Enter your age: "));
// age >= 18
//   ? console.log("You are old enough to drive: ", age)
//   : console.log("You are not old enough to drive: ", age);

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// let number = Number(prompt("Enter an even number"));
// number%2==0 ? console.log(number, "is an even number"): console.log(number, "is not an even number");

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

//make uppercase and lowercase acceptable

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let season = prompt("Enter a season");
// if(season === "September" || season === "October" || season === "November"){
//     console.log("AUTUMN 🍂🍂");
// }else if(season === "December" || season === "January" || season === "February"){
//     console.log("WINTER ❄❄");
// }else if(season === "March" || season === "April" || season === "May"){
//     console.log("SPRING ♨♨");
// }else if(season === "June" || season === "July" || season === "August"){
//     console.log("SUMMER 😎😎");
// }else{
//     console.log("Not a season");
// }

// Write a program which tells the number of days in a month.
// Write a program which tells the number of days in a month, now consider leap year.
// let month = prompt("Enter the month to tell the number of days");
// if(month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "September" ||
// month === "October" || month === "December"){
//     console.log(`${month} has 31 days`);
// }else if(month === "April" || month === "June" || month === "November"){
//     console.log(`${month} has 30 days`);
// }else if(month === "February"){
//     console.log(`${month} has 28 days`);
// }else{
//     console.log("Invalid");
// }

// Write a function to calculate simple interest based on the principle amount
// formula is principle + ptr

// let simpleInterest = function (principle, time, rate) {
//   let finalAmount = principle + principle * time * rate;
//   return finalAmount;
// };
// let finalAnswer = simpleInterest(12, 60, 0.5);
// console.log(finalAnswer);

// const calcAge = birthYear => 2037 - birthYear;
// let age1 = calcAge(2001);
// console.log(age1);

// let yearsUntilRetirement = (birthYear) => {
//     let age = 2037 - birthYear;
//     let retirementAge = 65 - age;
//     return retirementAge;
// };

// console.log(yearsUntilRetirement(1991));

//FUNCTIONS CALLING OTHER FUNCTIONS
// let cutFruitPieces = (fruit) => {
//   return fruit * 4;
// };
// let fruitProcessor = (apples, oranges) => {
//   let applePieces = cutFruitPieces(apples);
//   let orangePieces = cutFruitPieces(oranges);
//   let juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

//first function called square computes the square of a given number
//second function called sum of squares makes use of square to compute the sum of three numbers that have been squared
// let square = (squaredNum) => {
//   return squaredNum * squaredNum;
// };
// let sum_of_squares = (sum_one, sum_two, sum_three) => {
//   let sum1 = square(sum_one);
//   let sum2 = square(sum_two);
//   let sum3 = square(sum_three);
//   let sum_total = sum1 + sum2 + sum3;
//   return `The sum of squares of ${sum_one} , ${sum_two} and ${sum_three} is ${sum_total}`;
// };
// console.log(sum_of_squares(12, 6, 8));

// let calcAge = function(birthYear){
//     return 2037 - birthYear;
// }
// let yearsUntilRetirement = function(birthYear, firstname) {
//     let age = calcAge(birthYear)
//     let retirementAge = 65 - age;
//     return `${firstname} retires in ${retirementAge} years`;
// };
// console.log(yearsUntilRetirement(1991,"Simeon"));

// create an arrow function calcAverage to calculate the average of 3 scores
// use the function to calculate the average for both teams
// create a function checkwinner that takes the average scores of each team as parameters and logs the winner to the console
// together with the victory points, according to the rule above Examples: "Koalas win (30 vs. 13)"
//Dolphins (44,23,72),(85,54,41)
//Koalas (65,54,49),(23,34,27)

// let calcAverage = (avg1, avg2) => {
//   return (avg1, avg2) / 3;
// };

// let scoresDolphins = calcAverage(44, 23, 41);
// let scoresKoalas = calcAverage(65, 54, 49);

// let checkWinner = (avgDolphin, avgKoala) => {
//   let doubleAverageDolphin = avgDolphin * avgDolphin;
//   let doubleAverageKoala = avgKoala * avgKoala;
//   if (avgDolphin >= doubleAverageKoala) {
//     return `Dolphins win ${avgKoala} vs ${doubleAverageKoala}`;
//   } else if (avgKoala >= doubleAverageDolphin) {
//     return `Koalas win ${avgKoala} vs ${doubleAverageDolphin}`;
//   } else {
//     return `No team wins....`;
//   }
// };
// console.log(checkWinner(scoresDolphins,scoresKoalas));

// create an arrow function calcAverage to calculate the average of 3 scores
// use the function to calculate the average for both teams
// create a function checkwinner that takes the average scores of each team as parameters and logs the winner to the console
// together with the victory points, according to the rule above Examples: "Koalas win (30 vs. 13)"
//Dolphins (44,23,72),(85,54,41)
//Koalas (65,54,49),(23,34,27)

// const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
//   return (scoreOne + scoreTwo + scoreThree) / 3;
// };
// let scoreDolphins = calcAverage(44, 23, 72);
// let scoreKoalas = calcAverage(65, 54, 49);
// const checkWinner = (avgDolphins, avgKoalas) => {
//   let doubleAverageDolphins = avgDolphins * avgDolphins;
//   let doubleAverageKoalas = avgKoalas * avgKoalas;
//   if (doubleAverageDolphins >= avgKoalas) {
//     console.log(`Dolphins win (${doubleAverageDolphins} vs ${avgKoalas})`);
//   } else if (doubleAverageKoalas >= avgDolphins) {
//     console.log(`Koalas win (${doubleAverageKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins`);
//   }
// };

// checkWinner(scoreDolphins,scoreKoalas);

// let friends = ["Micheal", "Steven", "Peter"];
// console.log(friends[friends.length - 1]);

// let years = [1990, 1987, 2005, 2001, 2009];

// let age = function (birthYear) {
//   return 2037 - birthYear;
// };

// let userAges = new Array(
//   age(years[0]),
//   age(years[1]),
//   age(years[years.length - 1])
// );

// console.log(userAges);

// let friends = ["Micheal", "Steven", "Peter"];
//Add element at the end
// friends.push("Stephanie");
//Add element at the start
// friends.unshift("Priscy");
//Remove last element
// friends.pop();
//Remove first element
// friends.shift();

// console.log(friends.indexOf("Steven"));

// console.log(friends.includes("Bob"));

// friends.includes("Bob")
//   ? console.log("You have a friend called Peter")
//   : console.log("You don't have a friend called peter");

//Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%
//Write a function calcTip that takes any bill value as an input and returns the corresponding tip based on the rules above test using of 100
//Create an array bills containing the test below
//Create an array tips containing the tip value for each bill, calculated from the function before
//Create an array total containing the total values, so the bill + tip
//test data: 125,555 and 44

// let calcTip = (billValue) => {
//     return billValue >= 50 && billValue <= 300
//       ? billValue + 0.15
//       : billValue + 0.2;
//   };
//   // console.log(calcTip(100));

//   let bills = [125, 555, 44];
//   let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//   console.log(bills, tips);
//   let total = [];
//   total.unshift(tips);
//   console.log(total);

"use strict";
// const user = {
//   firstname: "Jonas",
//   lastname: "Schmedtmann",
//   job: "Teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(user['job']);

// let nameKey = 'name';
// console.log(user['first' + nameKey]);

// const interestedIn = prompt(
//   'What do you want to know about User? Choose between firstname,lastname,age,job'
// );
// if (user[interestedIn]) {
//   console.log(user[interestedIn]);
// } else {
//   console.log('Wrong Request');
// }

//Jonas has 3 friends and his best friend is called Michael
// console.log(user['firstname'] + ' has ' + user.friends.length + ' friends and his best friend is called ' + user.friends[0]);
// console.log(`${user.firstname} has ${user.friends.length} friends and his best friend is called ${user.friends[0]}`);
//this keyword is used on the object in which the method is called
// const user = {
//   firstname: "Jonas",
//   lastname: "Schmedtmann",
//   birthYear: 1991,
//   job: "Teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstname} is a ${this.calcAge()} old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
//   },
// };
// console.log(user.getSummary());

//BMI = mass / height ** 2
//Create an object with properties for their fullname, mass, and height (Mark Miller and John Smith)
//Create a calcBMI method on each object to calculate the BMI. Store the value to a property and also return it from the method
//log to the console who has the higher BMI together with the full nname and the respective BMI.
//Test Data: Mark weighs 78kg and 1.69m tall and John weighs 92kg and 1.95m tall
//Example: "John's BMI (28.3) is higher than Mark's BMI (23.9)"

// const data = {
//   users: [
//     {
//       firstname: "Mark",
//       lastname: "Miller",
//       mass: 78,
//       height: 1.69,
//       calcBMI: function () {
//         this.BMI = this.mass / this.height;
//         return `${this.BMI}`;
//       },
//     },
//     {
//       firstname: "John",
//       lastname: "Smith",
//       mass: 92,
//       height: 1.95,
//       calcBMI: function () {
//         this.BMI = this.mass / this.height;
//         return `${this.BMI}`;
//       },
//     },
//   ],
// };

// data.users[0].calcBMI() > data.users[1].calcBMI()
//   ? console.log(`John's BMI (${data.users[0].calcBMI()}) is higher than Mark's BMI (${data.users[1].calcBMI()})`)
//   : console.log(`Mark's BMI (${data.users[1].calcBMI()}) is higher than John's BMI (${data.users[0].calcBMI()})`);

// const mark = {
//   fullname: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height;
//     return `${this.BMI}`;
//   },
// };

// const john = {
//   fullname: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height;
//     return `${this.BMI}`;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if(mark.BMI >= john.BMI){
//     console.log(`${mark.fullname}'s (${mark.BMI}) BMI is higher than ${john.fullname}'s (${john.BMI}) BMI`);
// }else{
//     console.log(`${john.fullname}'s (${john.BMI}) BMI is higher than ${mark.fullname}'s (${mark.BMI}) BMI`);
// }

// Loops
//replace current value with the value of the counter
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights competition ${rep} 🥇`);
// }

//counter value, condition and increment or decrement
// const jonas = [
//   "Jonas",
//   "Schmedtman",
//   2037 - 1991,
//   "Teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// for(let i = jonas.length-1; i >= 0; i--){
//     console.log(i, jonas[i]);
// }
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i]);
// }

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;

//   console.log(jonas[i]);
// }
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// LOOP IN A LOOP
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(
//     `*****************Staring Exercise ${exercise}********************`
//   );

//   for (let rep = 1; rep <= 6; rep++) {
//     console.log(`Exercise ${exercise} Lifting weigh repetition ${rep}`);
//   }
// }
//Multplication table
// for (let i = 1; i < 13; i++) {
//     console.log(`Multiplication Table for ${i}`);
//   for (let j = 1; j < 13; j++) {
//     console.log(`${i} x ${j} = ${i * j} `);
//   }
// }
// for (let i = 12; i >= 1; i--) {
//     console.log(`Multiplication Table ${i}`);
//     for(let j = 1; j < 13; j++){
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

//WHILE LOOP
//condition
// let rep = 1;
// while (rep <= 10) {
//   console.log(` Lifting weigh repetition ${rep}`);
//   rep++;
// }
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6){
//     console.log('Loop is about to end');
//   }
// }

//Create an array bills containing all 10 test bill values
//Create an empty arrays for the tips and the totals
//Use the Calctip fnction to calculate the tips and total values (bill + tip) for every bill value in the bills array.
//Use for loop to perform calculations
//Test Data : 22,295,176,440,37,105,10,1100,86 and 52
//Write a function calcaverage which takes an array called arr as an argument.
//This function calculates the averages of all numbers in the given array

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300
//     ? bill + 0.15
//     : bill + 0.2;
// };
// for (let i = 0; i <= bills.length - 1; i++) {
//   let tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tips);
// }

// console.log(bills, tips, totals);
// const calcTip = function () {
//   let greaterTip = 0.15;
//   let lesserTip = 0.2;
//   for (let i = 0; i <= bills.length - 1; i++) {
//     if (bills[i] >= 50 && bills[i] <= 300) {
//       let tipValue = bills[i] + greaterTip;
//       tips.push(tipValue);
//       totals.push(tips);
//     } else {
//       let tipValue = bills[i] + lesserTip;
//       tips.push(tipValue);
//       totals.push(tips);
//     }
//   }
// };
// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     sum += arr[i];
//   }
//   let avg = sum / arr.length;
//   console.log(avg);
// };
// calcTip();
// console.log(tips);
// console.log(totals);
// calcAverage(bills);

//Create an array bills containing all 10 test bill values
//Create an empty arrays for the tips and the totals
//Use the Calctip function to calculate the tips and total values (bill + tip) for every bill value in the bills array.
//Use for loop to perform calculations
//Test Data : 22,295,176,440,37,105,10,1100,86 and 52
//Write a function calcaverage which takes an array called arr as an argument.
//This function calculates the averages of all numbers in the given array

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill + 0.15;
//   } else {
//     return bill + 0.2;
//   }
// };

// for (let i = 0; i < bills.length - 1; i++) {
//   let tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tips);
// }
// console.log(tips);
// console.log(totals);

// const calcAvg = (arr) => {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum = sum + arr[i];
//   }
//   let avg = sum / arr.length;
//   console.log(avg);
// };
// calcAvg(bills);


//Multplication table
// for (let i = 1; i < 13; i++) {
//     console.log(`Multiplication Table for ${i}`);
//   for (let j = 1; j < 13; j++) {
//     console.log(`${i} x ${j} = ${i * j} `);
//   }
// }
// for (let i = 12; i >= 1; i--) {
//     console.log(`Multiplication Table ${i}`);
//     for(let j = 1; j < 13; j++){
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

//Create an array bills containing all 10 test bill values
//Create an empty arrays for the tips and the totals
//Use the Calctip function to calculate the tips and total values (bill + tip) for every bill value in the bills array.
//Use for loop to perform calculations
//Test Data : 22,295,176,440,37,105,10,1100,86 and 52
//Write a function calcaverage which takes an array called arr as an argument.
//This function calculates the averages of all numbers in the given array

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill + 0.15;
//   } else {
//     return bill + 0.2;
//   }
// };

// for (let i = 0; i < bills.length - 1; i++) {
//   let tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tips);
// }
// console.log(tips);
// console.log(totals);

// const calcAvg = (arr) => {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum = sum + arr[i];
//   }
//   let avg = sum / arr.length;
//   console.log(avg);
// };
// calcAvg(bills)

//Calculate the temperature amplitude (amplitude is the difference between highest and lowest temperature)
// compute a max temperature
// compute a min temperature
//when there is an error the loop should continue
//difference between max and min

// const temperature = [3, -2, -6, -1, "error", 9, 13, 15, 14, 9, 5];
// const subtemp = [23, 4, 8, 9];
// const mixedTemp = temperature.concat(subtemp);

// const calcTemperature = (temp) => {
//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     let currTemp = temp[i];
//     if (typeof currTemp !== "number") continue;
//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
// };

// calcTemperature(mixedTemp);
// console.log(mixedTemp);