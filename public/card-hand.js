class CardHand {
  /**
   *
   * @param {Array<Array<Card>>} triplets an array of 4 triples which are are an array of three Cards
   * @param {Array<Card>} pair an array of 2 Cards
   */
  constructor(triplets, pair) {
    /**
     * CHECK
     * There must be 4 triplets
     */
    if (triplets.length !== 4) {
      throw new Error('Invalid Hand, there should be 4 triplets');
    }

    triplets.forEach((triplet) => {
      /**
       * CHECK
       * each triplet Must have 3 cards
       */
      if (triplet.length !== 3) {
        throw new Error('Invalid hand, found triplet that did not have three items in it');
      }

      /**
       * SIDE EFFECT
       * triplets are sorted before being stored so that it is easier to work with them
       */
      triplet.sort((a,b) => a.getValue() - b.getValue());

      /**
       * CHECK
       * Ensure that the triplets are made up of correct cards
       */
      const isSuiteValid = triplet[0].getSuite() === triplet[1].getSuite()
                      && triplet[0].getSuite() === triplet[2].getSuite();

      const isTriple = triplet[0].getValue() === triplet[1].getValue()
                    && triplet[0].getValue() === triplet[2].getValue();

      const isRun = triplet[0].getValue() === triplet[1].getValue() + 1
                 && triplet[0].getValue() === triplet[2].getValue() + 2;

      if (!isSuiteValid) {
        throw new Error('Invalid hand, found triple that did not match suite');
      }
      if (!(isTriple || isRun)) {
        throw new Error('Invalid hand, found triplet that was not a triple or a run');
      }
    });
    if (pair.length !== 2) {
      throw new Error('pair should have 2 cards in it');
    }

    this.triplets = triplets
    this.pair = pair;
  }
}
