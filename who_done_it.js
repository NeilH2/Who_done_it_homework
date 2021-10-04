// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

    //the murderer is Miss Scarlet  

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

   //the murderer is Professor Plum as a const cannot be reassigned

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

   //first verdict is Mrs.Peacock as declareMurderer function is logged to the console first and its scope is only within the function
   //second verdict is Professor Plum as he was assigned to the let murderer variable at the top level of the block outside the function

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

    //the suspects are Miss Scarlett, Professor Plum, Colonel Mustard as Colonel Mustard was reassigned to suspectThree within the declareAllSuspects function and that funtion was assigned to the const suspects which was logged to the console
    //suspectThree is Mrs Peacock as she was assigned to the let suspectThree variable at the top level of the block outside the function

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

    //The weapon is the Revolver, as the changeWeapon function calls the argument 'Revolver' which is assigned to the key value pair of scenario.weapon, the declareWeapon function is then assigned to the verdict variable which is logged to the console

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);  

    //the murderer is Mrs White as the plotTwist funtion assigns her to the variable murderer and the plotTwist function is then called inside the changeMurderer function which is also called before the declareMurderer function which is assigned to verdict and logged to the console

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

  //The weapon is the Candle Stick 
  // The const changeScenario function assigns the key value pair of scenario.room to 'dining room', the plotTwist function then assigns the murderer to 'Colonel Mustard' if scenario.room is equal to 'Dining room', the unexpectedOutcome then assigns the value of scenario.weapon to 'Candle Stick' if the murderer is equal to 'Colonel Mustard', the plotTwist function is then called with an argument of 'Dining room' and unexpectedOutcome function is called withan argument of 'Colonel Mustard', the changeScenario function is then called before the declareWeapon function which is assigned to the variable verdict and logged to the console

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict); 

   //The murderer is Professor Plum as he is assigned to the variable murderer at the top level of the block and 'Mrs Peacock' is assigned only within the if statement which isnt called as part of function