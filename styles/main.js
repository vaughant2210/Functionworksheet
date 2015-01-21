/**
*
*/

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

// console.assert(max(1,2) == 2,"it worked");

//
function max(x,y){
  "use strict";
  if (x>y){
    return x;
  } else  {
      return y;
    }

  }


  console.log(max(1,2));

//
//



// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
//
function maxOfThree(x,y,z){
  "use strict";
  if (x > y && x > z ){
    return x;
  } else if (y > z){
       return y;
    }    else {
          return z;
        }

      }

console.log(maxOfThree(2,1,3));




// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
//


function isVowel(char) {
  if (['a', 'e', 'i', 'o', 'u'].indexOf(char) != -1){
      return true;
    }    else {
      return false;
    }
}
//*if m is not a vowel, then console log*//

if (!isVowel('m')){
  console.log('this is not a vowel')
}


//
//
// function translate(phrase) {
//   var letters = phrase.split('');
//   var translatedArray = letters.map(function(char){
//     if (isVowel(char) || char == " ") {
//       return char;
//     } else {
//       return char + 'o' + char;
//     }
//   });
//
//   return translatedArray.join('');
//
// }
//
// console.log(translate("this is fun"));
//
//
//
// function isVowel(char){
//   "use strict";
//
//    var vowels =["a","e","i","o","u"];
//
//    if (char == vowel [0,1,2,3,4]) {
//      return true;
//    }  else {
//         return false;
//    }
//  }
//
//  console.log(isVowel(e));
//
// // ---------------------
// // Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// // ---------------------
// //
// function rovarspraket(phrase){
//   "use strict";
//
//   return phrase;
//    var translation = "";
//
//    var characters = phrase.split('');
//
//       characters.forEach(function(char) {
//
//
//
//       if (isConsonant(char)){
//         translation += char + 'o' + char;
//         }  else{
//             translation += char;
//           }
//       }
//       })
//
//
//     return translation;
//
//


  // read word
  // identify/separate consonants--iterate (need an array)
  // if you find a consonant replace with the cons-o-cons
  // otherwise forward char
  //





//
// }

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------


  var sum =0;

  [1,2,3,4].forEach(function(addnumbers){
  console.log(sum);
  sum += addnumbers;


});

var total= 1;


  [1,2,3,4].forEach(function(multiplynumbers){

  total *= multiplynumbers;

  "use strict";
});

console.log(total);
// // ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
  "use strict";
  //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  "use strict";
  //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  "use strict";
  //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
  "use strict";
  //...
}
