// Return true if the passed string looks like a valid US phone number.

// you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555



function telephoneCheck(str) {
    // just some really solid regex 
    
    if (str.trim('"') // remove the " " so I can match
    .match(/^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/)) { // if it matches this entirely formatted string
      return true; // then true
      }
      return false;
    }
    
    telephoneCheck("555-555-5555");