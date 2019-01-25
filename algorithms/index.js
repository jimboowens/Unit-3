// Create a function convertPhone that validates a str and converts it to a valid phone number. You MUST use 
// .match and pass a regular expression. Whatever string is passed in, the function must format it into format: 555-555-5555. 
// Extra numbers are assumed a mistake and dropped. If not enough numbers are provided in the string, return an error message. 
// It is a good idea to make use of join, split, and other array functions as you are likely to hop back and forth.
// BONUS: if not enough numbers are provided, check to see if there are any letters that can be converted to numbers via the number pad mapping.
// Consider the possible inputs:
// 555-555-5555
// (555)555-5555
// 555 555 5555
// 555 555-555
// 1-555-555-5555
// (1)555-555-5555
// 5555555555
// 555-five-55-aebdgtxi;;3tt4greqr6seven
// 5-trumprules-555-5-5-5-5-5-5
// 2798504trumpforprez23587928579428795458792
// 1-800-ninjas-are-cool
// 1900-acdc4life.

array =[
    '555-555-5555', 
    '(555)555-5555',
    '555 555 5555', 
    '555 555-555', 
    '1-555-555-5555', 
    '(1)555-555-5555',
    '5555555555',
    '555-five-55-aebdgtxi;;3tt4greqr6seven',
    '5-trumprules-555-5-5-5-5-5-5',
    '2798504trumpforprez23587928579428795458792',
    '1-800-ninjas-are-cool',
    '1900-acdc4life.']
    // let string = '555-555-5555-555555';
function convertPhone(phonestr){
    let finalArray =[];
    for(i=0;i<phonestr.length;i++){
        let regEx = /\d/g;
        let correctPhone= phonestr[i].match(regEx);
        // console.log(correctPhone)
        if (correctPhone.length <=10){
            console.log("Invalid Number")
        }else if (correctPhone.length >= 10){
            // console.log(correctPhone)
            let tenDigit = correctPhone.slice(0,10);
            tenDigit.splice(3,0,'-')
            tenDigit.splice(7,0,'-');
            let completeNumber = tenDigit.join("");
            finalArray.push(completeNumber)
            console.log(finalArray)
        }
    }
}

convertPhone(array)

// Case Convert

// Write a function caseConvert that accepts two arguments. The first is a string, 
// the second is type. If the type is "camelcase" then convert the string to camelcase 
// (each word except the first is capitalized, no spaces). If type is "snakecase" then 
// convert the string to snakecase (each word is separated by a - and all lowercase). 
// As a bonus, accept a string or an array. If it's an array, use .join and proceed accordingly.

function caseConvert(str, conversionType){
    let convertedStr = ``;
    if (conversionType === 'camelCase'){
        convertedStr = str.replace(/./, (firstLetter)=>(firstLetter.toLowerCase()));
        convertedStr = convertedStr.replace(/ [a-z]/g, (firstLetter)=>(firstLetter.toUpperCase()));
        convertedStr = convertedStr.replace(/ /g, ``);
        return convertedStr;

    }
    if (conversionType ==='snake_case'){
        convertedStr = str.replace(/ /g, `_`);
        return convertedStr;
    }
} 
const string = "The Rain in SPAIN stays mainly in the plain";
let camelCase = caseConvert(string, 'camelCase');
console.log(camelCase);
let snake_case = caseConvert(string, 'snake_case');
console.log(snake_case);
// var re = /(\b[a-z](?!\s))/g;
// var s = "fort collins, croton-on-hudson, harper's ferry, coeur d'alene, o'fallon"; 
// s = s.replace(re, function(x){return x.toUpperCase();});
// console.log(s); // "Fort Collins, Croton-On-Hudson, Harper's Ferry, Coeur D'Alene, O'

// Write a JavaScript program to validate that a credit card number:

// It must have 16 digits, unless it starts with 37 or 34. Then, and only then, it MUST have 15 digits
// It must start with one of the folliowing. Print off "valid" and the type of card
// 6011 = Discover Card
// 37 or 34 = American Express
// 4 = Visa
// 50-55 = MasterCard

let cardNumber;
let cardType = `null`;
let discoverCard = new RegExp(/^6011/g)
let visaCard = new RegExp(/^4/g)
let masterCard = new RegExp(/^[[50][51][52][53][54][55]]/g)
let amExpress = new RegExp(/^[[34][37]]/g)
function cardTypeTest(cardNumber){
    cardNumber+= ''
    if (cardNumber.length === 16){
        // console.log('initiated')
        if (discoverCard.test(cardNumber)){
            cardType = 'Discover'
        } else if (visaCard.test(cardNumber)){
            cardType = 'Visa'
        } else if (masterCard.test(cardNumber)){
            cardType = 'MasterCard'
        } else {
            cardType = 'invalid'
        }
    } else if (amExpress.test(cardNumber)&&cardNumber.length===15){
        cardType = 'American Express'
    } else {
        cardType = 'invalid'
    }
    console.log(cardType)
    return cardType;
}

cardTypeTest(1111111111111111)
cardTypeTest(6011111122223333)
cardTypeTest(4373333333333333)
cardTypeTest(373333333333333)

