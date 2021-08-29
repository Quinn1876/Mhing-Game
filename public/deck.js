class Deck {

  constructor () {
    this.deck = [];
    this.discard = [];

    /**
     * The Deck consists of 4 copies of each of the suite cards
     */
    for (let i = 1; i <= 9; i++) {
      for (let j = 0; j < 4; j++) {
        this.deck.push(Card.createDots(i));
        this.deck.push(Card.createCharacters(i));
        this.deck.push(Card.createBamboos(i));
      }
    }

    /**
     * The Deck contains four of each of the 7 honour cards
     */
    for (let i = 0; i < 4; i++) {
      this.deck.push(Card.createDragon(DRAGONS.RED));
      this.deck.push(Card.createDragon(DRAGONS.WHITE));
      this.deck.push(Card.createDragon(DRAGONS.GREEN));
      this.deck.push(Card.createWind(WINDS.NORTH));
      this.deck.push(Card.createWind(WINDS.WEST));
      this.deck.push(Card.createWind(WINDS.SOUTH));
      this.deck.push(Card.createWind(WINDS.EAST));
    }

    /**
     * The Deck contains 8 flowers
     */
    for (let i = 0; i < 8; i++) {
      this.deck.push(Card.createFlower());
    }

    /**
     * The Deck contains 6 Wild cards
     */
    for (let i = 0; i < 6; i++) {
      this.deck.push(Card.createWild());
    }

    if (this.deck.length != 150) {
      console.error(`There should be 150 cards in the deck but found: ${this.deck.length}`)
    }
  }

  shuffle() {
    let currentIndex = this.deck.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [this.deck[currentIndex], this.deck[randomIndex]] = [
        this.deck[randomIndex], this.deck[currentIndex]];
    }
  }


  takeCardFromDeck() {
    return this.deck.pop();
  }

  placeCardInDiscard(card) {
    this.discard.push(card);
  }

  viewTopOfDiscard() {
    return this.discard[this.discard.length-1];
  }

  takeCardFromDiscard() {
    return this.discard.pop();
  }

  getRemainingCardsInDeck() {
    return this.deck.length;
  }
}
