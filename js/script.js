/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
let quotes = []; /**create 'quotes' empty array */
let quote1={}, quote2={}, quote3={}, quote4={}, quote5={}, quote6={}, quote7={}, quote8={}, quote9={}, quote10={};/** create empty objects*/ 
quote1 = { /**adding object's properties */
    quote:"A successful society is characterized by a rising living standard for its population, increasing investment in factories and basic infrastructure, and the generation of additional surplus, which is invested in generating new discoveries in science and technology.",
    source:"Robert Trout",
};
quote2 = {
    quote:"You don’t have to be great to start, but you have to start to be great.",
    source:"Zig Ziglar",
};
quote3 = {
    quote:"Science can never solve one problem without raising ten more problems.",
    source:"George Bernard Shaw",
};
quote4 = {
    quote:"A river cuts through rock, not because of its power, but because of its persistence.",
    source:"Jim Watkins",
};
quote5 = {
    quote:"Science attempts to find logic and simplicity in nature. Mathematics attempts to establish order and simplicity in human thought.",
    source:"Edward Teller",
    citation:"The Pursuit of Simplicity",
    year:"1981",
};
quote6 = {
    quote:"Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.",
    source:"Bill Gates",
    citation:"Independent",
    year:"1997",
};
quote7 = {
    quote:"Great things in business are never done by one person, they're done by a team of people.",
    source:"Steve Jobs",
    citation:"60 Minutes",
    year:"2003",
};
quote8 = {
    quote:"I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.",
    source:"Mark Zuckerberg",
    citation:"Biography/ Personal Quotes",
    year:"2003",
};
quote9 = {
    quote:"The essence of strategy is choosing what not to do.",
    source:"Michael Porter",
};
quote10 = {
    quote:"It bears repeating: you don't have to be good at everything.",
    source:"Robert S. Kaplan",
};
quotes.push(quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10);/**adding objects to the array */

/***
 * `getRandomQuote` function
***/
let prevRandNum = -1;
function getRandomQuote(){
    let RandomNumber = Math.floor(Math.random() * 9);/**generate a random index for a quote */
    while(RandomNumber==prevRandNum) { /**compare the current index to the previous */
        prevRandNum = RandomNumber;
        RandomNumber = Math.floor(Math.random() * 9);
    }
    let quote = quotes[RandomNumber];/**get a quote from the array */
    prevRandNum = RandomNumber;
    return quote;

}



/***
 * `printQuote` function
***/
function printQuote(){
    let randomQuote = getRandomQuote();/**create a variable and set it equal to a call to
    the getRandomQuote() function */
    let stringHTML1 = "<p class='quote'>" + randomQuote.quote + "</p>"+ "<p class='source'>" + randomQuote.source;/**store a quoate and source in string */
    if('citation' in randomQuote){/**check if 'citation' exists in the object */
        stringHTML1 += "<span class='citation'>" + randomQuote.citation + "</span>";
    }
    if('year' in randomQuote){/**check if the year exists in the object */
        stringHTML1 += "<span class='year'>" + randomQuote.year + "</span>";
    }
    stringHTML1 += "</p>";/**close the string */
    document.getElementById('quote-box').innerHTML = stringHTML1;/**print the string in browser */

}



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);