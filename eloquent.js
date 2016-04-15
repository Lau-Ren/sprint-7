
// Minimum
function min(x, y){
  if (x < y) {
	  return x
  }else {
 	 return y
  }
};



// Recursion
function isEven(num){
	
  if (num === 0){
    return true
  } else if (num === 1){
  return false
  } else{
    	return isEven(num - 2)
  }
 };

 // Bean Counting 

 function countBs (strToSearch) {
var numBs = 0

for (var i = 0; i <= strToSearch.length-1; i++) {
 if (strToSearch.charAt(i) === "B") {
 	numBs +=1
 }
}

return numBs
};



function countChar (strToSearch,charToCount) {
var numChars = 0

for (var i = 0; i <= strToSearch.length-1; i++) {
 if (strToSearch.charAt(i) === charToCount) {
 	numChars +=1
 }
}

return numChars
};