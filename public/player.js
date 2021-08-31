class Player {
  constructor() {
    this.hand = []; // Array of cards in a players hand
    // this.roundLog = [new Round()]; // Tracks where a players points come from.
  }


  /**
   *
   * @param {Card} card adds a card to the players hand
   */
  addCardToHand(card) {
    this.hand.push(card);
  }

  /**
   *
   * @param {number} oldIndex the index of the card you want to move
   * @param {number} newIndex the index of the slot you want to move the card to
   * The new index is the index of the card to the right of the position where the card
   * is being inserted
   */
  changeCardPosition(oldIndex, newIndex) {
    if (typeof oldIndex !== 'number' || typeof newIndex !== 'number') {
      console.error('A non number argument was passed in');
    }

    if (oldIndex < 0 || oldIndex >= this.hand.length || newIndex >= this.hand.length || newIndex < -1) {
      console.error('Invalid Indices for old and newIndex');
      return;
    }
    if (oldIndex === newIndex) return;

    const card = this.hand[oldIndex];

    if (newIndex === -1) {
      this.hand = [this.hand[oldIndex], ...this.hand.filter((_, index) => oldIndex !== index)];

    } else if (newIndex === this.hand.length - 1) {
      this.hand = [...this.hand.filter((_, index) => oldIndex !== index), this.hand[oldIndex]];

    } else if (oldIndex > newIndex) {
      this.hand = this.hand.filter((_, index) => index !== oldIndex);
      this.hand = [
        ...this.hand.slice(0, newIndex),
        card,
        ...this.hand.slice(newIndex, this.hand.length),
      ];

    } else {
      this.hand = this.hand.filter((_, index) => index !== oldIndex);
      this.hand = [
        ...this.hand.slice(0, newIndex-1),
        card,
        ...this.hand.slice(newIndex-1, this.hand.length),
      ];
    }
  }
}

module.exports.default = Player;
