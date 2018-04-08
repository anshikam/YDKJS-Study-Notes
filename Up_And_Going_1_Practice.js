const TAX_RATE = 0.05;
const PHONE_PRICE = 500;
const ACCESSORY_PRICE = 40;
const SPENDING_THRESHOLD = 600;
var bank_account_balance = 4000;
var amount = 0;
var noOfPhones = 0;

function calculateTax(amount) {
  return TAX_RATE * amount;
}

function formatPrice(price){
  return  "$" + price.toFixed(2);
}

while(amount < bank_account_balance){
    current_phone_cost = 0;

    if( PHONE_PRICE < SPENDING_THRESHOLD){
      noOfPhones = noOfPhones + 1;
      if( PHONE_PRICE + ACCESSORY_PRICE < SPENDING_THRESHOLD ) {
	    current_phone_cost = PHONE_PRICE + ACCESSORY_PRICE;	
	  } else{
	    current_phone_cost = PHONE_PRICE;
	  }

	  current_phone_cost = current_phone_cost + calculateTax(current_phone_cost);
	  amount = amount + current_phone_cost;

	} else {
	  break;	
	}
}

//amount = amount + calculateTax(amount);
console.log("You purchased " + noOfPhones + " phones for a total price of : " + formatPrice(amount));