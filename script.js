/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
let billval = document.getElementById('billTotalInput')
let tipval = document.getElementById('tipInput')
let peepval = document.getElementById('numberOfPeople')
const ppt = document.getElementById('perPersonTotal')


let peepvalue = Number(peepval.innerHTML)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let bill = Number(billval.value)
  // get the tip from user & convert it into a percentage (divide by 100)
  let tip = (Number(tipval.value)/100)*bill

  // get the total tip amount


  // calculate the total (tip amount + bill)
    const total = bill + tip

  // calculate the per person total (total divided by number of people)
  const perp = total/peepvalue

  // update the perPersonTotal on DOM & show it to user
  ppt.innerHTML = `$${perp.toFixed(2)}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  peepvalue++

  // update the DOM with the new number of people
  peepval.innerHTML = peepvalue

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if(peepvalue <= 1){
    peepvalue = 1
  }
  
  // decrement the amount of people
  else{
    peepvalue--
  }

  // update the DOM with the new number of people
  peepval.innerHTML = peepvalue

  // calculate the bill based on the new number of people
  calculateBill()
}

const clearall = () => {
window.refresh
}