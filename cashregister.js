function checkCashRegister(price, cash, cid) {
  let bill = { // object with bills in descending order
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.10,
    "NICKEL": 0.05,
    "PENNY": 0.01
  }
  let change = {
      status: "OPEN",
      change: []
    };
  const originalCid = cid.map(a => [...a]); // working variables
  let amtDue = cash - price;
  let changeArr = change.change // change being returned in obj above
  let billValues = Object.values(bill) 
  let billKeys = Object.keys(bill)
  function checkCid(thisBill) { // function to check if we have the bills in drawer for giving change. returns true or false
    if (amtDue >= bill[thisBill]){ 
      for (let i = 0 ; i < cid.length ; i++) {
        if (cid[i][0] == thisBill && cid[i][1] > 0) {
          cid[i][1] -= bill[thisBill] // remove from drawer
          cid[i][1] = Math.round(cid[i][1] * 100) / 100 
          return true
        } 
      }
    }
    return false
  }
  for (let i = 0; i < billValues.length ; i++) { // iterate through bill values to compare to amtDue
    while (amtDue > 0 && checkCid(billKeys[i])) { // if we still owe change and have the denomination, continue. else move on to the next denomination
        let denomination = billKeys[i];
        let lastDex = changeArr.length - 1  
          if (changeArr.flat().includes(denomination)) {  // check if bill is already in change 
              changeArr[lastDex][1] += billValues[i] // add to change's last index since we know itll always be the current working value
              amtDue -= bill[denomination] 
              amtDue = Math.round(amtDue * 100) / 100 // fixing rounding errors
          } else { // if bill is NOT in change then add it 
              changeArr.push([billKeys[i], billValues[i]]) 
              amtDue -= bill[denomination]
              amtDue = Math.round(amtDue * 100) / 100 // fixing rounding errors
          }
    } // while loop
  } // for loop
  if (amtDue > 0) {  // check if still amount due after attempting to issue change the drawer
      change.status = "INSUFFICIENT_FUNDS";
      while (changeArr.length > 0) {
        changeArr.pop()
      }
      return change
  }
  if (cid.some((bill) => bill[1] > 0 )) { // if any denomination is > 0 then dont close out register
      return change;
    } else { // if all denomnations are 0 then close out the register and give them the whole tray
      change.status = "CLOSED";
      change.change = originalCid; // since the change was exact we gave them the entire register
      return change;
    }
  } 