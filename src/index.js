// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var myExchange = new Object();
    if (currency>0 && currency<10000) {
        myExchange.H = Math.floor(currency / 50)
        myExchange.Q = Math.floor((currency - 50 * myExchange.H) / 25);
        //dnp
        myExchange.D = Math.floor((currency - (50 * myExchange.H + 25 * myExchange.Q)) / 10);

        myExchange.N = Math.floor((currency - (50 * myExchange.H + 25 * myExchange.Q + 10 * myExchange.D)) / 5);
        myExchange.P = currency - (50 * myExchange.H + 25 * myExchange.Q + 10 * myExchange.D + 5 * myExchange.N);

        if (myExchange.H === 0) {
            delete myExchange.H;
        }
        if (myExchange.Q === 0) {
            delete myExchange.Q;
        }
        if (myExchange.D === 0) {
            delete myExchange.D;
        }
        if (myExchange.N === 0) {
            delete myExchange.N;
        }
        if (myExchange.P === 0) {
            delete myExchange.P;
        }
        return myExchange;
        console.log(myExchange);

    }
    if (currency>10000){
        myExchange.error = "You are rich, my friend! We don't have so much coins for exchange";
        return myExchange;
    }
    else return myExchange;
}
