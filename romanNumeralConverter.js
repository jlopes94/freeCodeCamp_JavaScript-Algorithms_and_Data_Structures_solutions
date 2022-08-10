// Convert the given number into a roman numeral.




function convertToRoman(num) {

    let M = 1000;
    let CM = 900;
    let D = 500;
    let CD = 400;
    let C = 100;
    let XC = 90;
    let L = 50;
    let XL = 40;
    let X = 10;
    let IX = 9;
    let V = 5;
    let IV = 4;
    let I = 1;
    
    let romanNumeral = "";
    
    while (num > 0) {
             if (num >= M){
          romanNumeral += "M"
          num -= M;  } 
        else if (num >= CM) {
          romanNumeral += "CM"
          num -= CM; }
        else if (num >= D) {
          romanNumeral += "D"
          num -= D; }
        else if (num >= CD) {
          romanNumeral += "CD"
          num -= CD; }
        else if (num >= C) {
          romanNumeral += "C"
          num -= C; }
        else if (num >= XC) {
          romanNumeral += "XC"
          num -= XC; }
        else if (num >= L) {
          romanNumeral += "L"
          num -= L; }
        else if (num >= XL) {
          romanNumeral += "XL"
          num -= XL; }
        else if (num >= X) {
          romanNumeral += "X"
          num -= X; }
        else if (num >= IX) {
          romanNumeral += "IX"
          num -= IX; }
        else if (num >= V) {
          romanNumeral += "V"
          num -= V; }
        else if (num >= IV) {
          romanNumeral += "IV"
          num -= IV; }
        else {
          romanNumeral += "I"
          num -= I; }
    }
    return romanNumeral
    }
    
    convertToRoman(3)