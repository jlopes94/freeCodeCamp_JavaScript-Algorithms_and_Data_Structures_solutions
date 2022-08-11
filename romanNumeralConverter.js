// Convert the given number into a roman numeral (redone and cleaned up)


function convertToRoman(num) {
  let roman = [
    {name: "M", val: 1000},
    {name: "CM", val: 900},
    {name: "D", val: 500},
    {name: "CD", val: 400},
    {name: "C", val: 100},
    {name: "XC", val: 90},
    {name: "L", val: 50},
    {name: "XL", val: 40},
    {name: "X", val: 10},
    {name: "IX", val: 9},
    {name: "V", val: 5},
    {name: "IV", val: 4},
    {name: "I", val: 1}
  ]
  let numeral = ""; 

  numeral = roman.map(nome => {
    let str = ""
    while (nome.val <= num) { 
      num -= nome.val;
      str += nome.name
    } return str
  })
  .join('')
return numeral
}
  
  convertToRoman(13)
  