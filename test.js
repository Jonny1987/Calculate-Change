var coins = [75, 15, 3, 1, 0.5, 0.25];

function giveChange(cost, amountGiven) {

    var numberOfEachCoin = [],
        change = amountGiven - cost,
        numberOfThisCoin = 0,
        minNumberOfCoins = 0;

    if (change >= 0) {
        for (var i = 0; i < coins.length; i++) {
            numberOfThisCoin = Math.floor(change / coins[i]);
            minNumberOfCoins += numberOfThisCoin;
            numberOfEachCoin[i] = numberOfThisCoin;
            change = change % coins[i];
            if (change === 0) {
                break;
            }
        }

    } else {
        numberOfEachCoin[0] = "The amount given is not enough to pay for the item.";
    }

    return numberOfEachCoin;

}

document.getElementById('submit').onclick = function() {
    var answer = [],
        string = [],
        minNumberOfCoins = 0;

    answer = giveChange(document.getElementById('cost').value, document.getElementById('amountGiven').value);

    console.log("answer: ", answer)

    if (typeof answer[0] === "string") {
        string[0] = answer[0];
    } else {

        for (var i = 0; i < answer.length; i++) {
            minNumberOfCoins += answer[i];
            string[i + 1] = answer[i] + " " + coins[i] + "p coins";
        }

        string[0] = "The total number of coins must be at least: " + minNumberOfCoins;

    }
    var br = document.createElement('br'),
    	answerElement = document.getElementById('answer');

    for (var i = 0; i < string.length; i++) {
        var t = document.createTextNode(string[i]);
        answerElement.appendChild(t);
        answerElement.appendChild(br);

    };



};
