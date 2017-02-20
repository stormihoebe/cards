
var deck = [];
var suits = ["spades", "hearts", "diamonds", "clubs"];
var ranks = ["ace", "1", "2", "3", "4", "5", "jack", "king","queen"];

$(function(){

    ranks.forEach(function(rank){
      suits.forEach(function(suit){
        deck.push(rank + " of "+ suit);

      });
      console.log(deck);
    });
    deck.forEach(function(dek){
      $("#deckList").append("<li>" + dek + "</li>");

    });


});
