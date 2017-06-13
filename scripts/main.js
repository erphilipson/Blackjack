/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

let playerHand = ["A", "A", "A", "J", "A"];

function handValue (hand) {
  let total = 0;

  for (let i=0; i<hand.length; i++) {
    var myHand = hand[i];

    if (myHand === 'J' || myHand === 'K' || myHand === 'Q') {
      total += 10;
    } else if (myHand != 'A') {
      myHand =  parseInt(myHand, 10);
      total += myHand;
    } else {
      var ace = 'A';
    }
  }

   function counter (array, item) {
    var count = 0;
    for (i=0; i<array.length; i++) {
      if (array[i] === item) {
        count++;
      }
    }
    return count;
  }


  for (let i=0; i<counter (hand, 'A'); i++) {

    if (ace === 'A' && total <= 10) {
      total += 11;
    } else if (ace === 'A' && total > 10) {
      total += 1;
    }

  }

  return total;
}

handValue(playerHand);




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
