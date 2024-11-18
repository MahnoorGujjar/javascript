// toFixed() ek built-in JavaScript method hai jo kisi bhi number ko specified decimal places tak round karke usay ek string mein return karta hai. Yeh method aapko kisi number ko ek fixed number of decimal places tak display karne ke liye use karte hain.

// Syntax:

// num.toFixed(digits);
// digits (optional): Yeh wo number hota hai jo specify karta hai ke aap ko decimal ke baad kitni places chahiye. Yeh value integer (poora number) hona chahiye aur 0 se lekar 20 tak ho sakti hai. Agar aap digits specify nahi karte, toh yeh method default mein 0 decimal places ke saath result dega.
// Example in Roman Urdu:
// 1. Basic Example





// let num = 3.14159;
// let result = num.toFixed(2);  // "3.14"
// console.log(result);  // "3.14"
// Yahan, number 3.14159 ko 2 decimal places tak round karke 3.14 banaya gaya hai.






// 2. No Decimal Places

// let num = 3.14159;
// let result = num.toFixed(0);  // "3"
// console.log(result);  // "3"
// Is example mein number ko whole number (integer) mein round kiya gaya hai.





// 3. Padding with Zeros

// let num = 5;
// let result = num.toFixed(3);  // "5.000"
// console.log(result);  // "5.000"
// Agar number ke paas utni decimal places nahi hoti, jitni aap ne toFixed() mein specify ki hai, toh woh trailing zeros laga deta hai.





// 4. Rounding

// let num = 5.56789;
// let result = num.toFixed(3);  // "5.568"
// console.log(result);  // "5.568"
// Yahan, number 5.56789 ko 3 decimal places tak round karke 5.568 banaya gaya hai.






// 5. Working with Large Numbers

// let num = 12345.6789;
// let result = num.toFixed(4);  // "12345.6789"
// console.log(result);  // "12345.6789"
// Yahan pe number 12345.6789 ko 4 decimal places tak format kiya gaya hai.




// 6. When No Decimal is Needed

// let num = 100;
// let result = num.toFixed();  // "100"
// console.log(result);  // "100"
// Agar aap digits specify nahi karte toh default mein 0 decimal places ke saath result aata hai.




// Important Notes:
// Return Type: toFixed() hamesha ek string return karta hai, chahe aap number ke decimal places specify karein ya na karein.
// Rounding: Agar number mein jo decimal places hain, woh aap ke specified number se zyada hain, toh woh round ho jaata hai.
// Padding: Agar number ke paas kam decimal places hain, toh woh additional zeros laga deta hai.
// Example: Displaying Prices 


// let price1 = 12.4598;
// let price2 = 23.7654;
// let price3 = 4.5;

// console.log("Price 1: Rs." + price1.toFixed(2));  // Price 1: Rs.12.46
// console.log("Price 2: Rs." + price2.toFixed(2));  // Price 2: Rs.23.77
// console.log("Price 3: Rs." + price3.toFixed(2));  // Price 3: Rs.4.50
// Is example mein hum toFixed() ka use karke prices ko 2 decimal places tak format kar rahe hain.

// Conclusion:
// toFixed() method ka use aap kisi bhi number ko fixed decimal places tak display karne ke liye karte hain. Yeh especially tab useful hota hai jab aapko kisi value ko round karna ho ya decimal places ko control karna ho, jaise prices display karte waqt ya scientific calculations mein.


// let price1 = 12.4597654679068;
// console.log(price1);  // 12.4597654679068

// let price2 = 12.4597654679068;
// console.log(price2.toFixed()); //12

// let price3 = 12.4597654679068;
// console.log(price3.toFixed(3)); //12.459

