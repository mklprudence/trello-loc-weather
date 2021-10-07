console.log("Hello World!")

window.TrelloPowerUp.initialize({
    'card-badges' : function(t, options) {
        return t.card('all')
        .then(function(card) {
            console.log(card);
            return [{
                text: card.idShort
            }];
        })
    }
})