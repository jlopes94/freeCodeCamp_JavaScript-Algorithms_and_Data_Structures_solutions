/**
 * @param {str} 
 * @return {str}
 */


function rot13(str) {
    const baseKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // to compare input to
    const cypherCode = 13 // the cypher's key
    function decryptText(letr) { // func to decrypt the text
      let newIndex = baseKey.indexOf(letr) - cypherCode
      if (newIndex < 0) {
        newIndex = baseKey.length + newIndex // add negative index to the length of baseKey to wrap around the alphabet 
      }
      return newIndex
    }

  // return the mapped output decrypted and joined
    return str.toUpperCase()
    .split("") // make string an array
    .map(data => {
      if (data.match(/[A-Z]/)) { // if input is an encrypted letter then decrypt it and return it
        return baseKey[decryptText(data)]
      } else {
      return data // returning non-encrypted characters (spaces, punctuation etc.)
      }})
    .join("") 
  }
  // test the function
  rot13("SERR PBQR PNZC") // should return "FREE CODE CAMP"