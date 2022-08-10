// Return true if the given string is a palindrome. Otherwise, return false.



function palindrome(str) {
    // check if string first index and last index are the same
    // ignore non letters and spaces
    // count comparisons until the middle // round down str.length / 2 
    let cleanString = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let palLength = Math.round(cleanString.length);
    let midIndex = palLength / 2;
    
    for (let startDex = 0, endDex = palLength - 1 ; startDex <= midIndex ; startDex++, endDex--)
      if (cleanString[startDex] !== cleanString[endDex]){
      return false; }
    
      return true;
    }
    
    palindrome("eye");

