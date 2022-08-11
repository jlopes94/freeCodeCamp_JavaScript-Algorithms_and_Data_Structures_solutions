function palindrome(str) { // updated for readability
    let cleanString = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let palLength = Math.round(cleanString.length);
    let startIndex = 0;
    let midIndex = palLength / 2;
    let endIndex = palLength - 1;

    while (startIndex <= midIndex) {
      startIndex++;
      endIndex--;
      if (cleanString[startIndex] !== cleanString[endIndex]){
        return false; 
      }
    } return true;
  }

    palindrome("eye");