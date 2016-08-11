/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // create result array
  var result = [];
  // create inner function which determines the results
  var createAnagram = function(stringLeft, anagramSoFar){
	  if(stringLeft === ''){
      result.push(anagramSoFar);
	  }
	  // iterate over length of string
	  for(var i = 0; i < stringLeft.length; i++){
	    // add selected character to StringSoFar
	    createAnagram(stringLeft.slice(0, i) + stringLeft.slice(i + 1), anagramSoFar + stringLeft[i]);
	  }
  }
  createAnagram(string, '');
  return result;
};

var anagrams = allAnagrams('abc');
console.log(anagrams);