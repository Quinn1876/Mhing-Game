class ScoreCard {
  constructor() {
    this.score = 0;
    this.contributingFactors = {};
  }

  calculateHandScore(hand, numFlowers) {
    this.addFlowerCards(numFlowers);
    this.checkOneCreditFormations(hand);
    this.checkThreeCreditFormations(hand);
    this.checkFiveCreditFormations(hand);
    this.checkEightCreditFormations(hand);
  }

  checkOneCreditFormations(hand) {
    this.checkDoubleSequence(hand);
    this.checkDoubleTriplet(hand);
    this.checkHonourTriplet(hand);
    this.checkSpecialPair(hand);
    this.checkSequenceOnlyHand(hand);
    this.checkBrokenRoyalRun(hand);
    this.checkTwoSuitesOnly(hand);
  }

  checkThreeCreditFormations(hand) {
    this.checkTripleSequence(hand);
    this.checkTripleTriplet(hand);
    this.checkIdenticalDoubleSequence(hand);
    this.checkRoyalRun(hand);
    this.checkTripletsOnlyHand(hand);
    this.checkOneSuiteWithHonours(hand);
    this.checkNothingConnects(hand);
  }

  checkFiveCreditFormations(hand) {
    this.checkHighLowHand(hand);
    this.checkAllSuitesAndHonours(hand);
  }

  checkEightCreditFormations(hand) {
    this.checkAllDragonTriplets(hand);
    this.checkOneSuiteOnly(hand);
    this.checkNothingConnectsWithAllHonours(hand);
  }

  /** One credit Formations */
  checkDoubleSequence(hand) {
    for (let i = 0; i < 4; i++) {
      for (let j = i+1; j < 4; j++) {
        // compare sequence i with sequence j
      }
    }
  }

  checkDoubleTriplet(hand) {

  }

  checkHonourTriplet(hand) {

  }

  checkSpecialPair(hand) {
    // pair of 2 5 or 8
  }

  checkSequenceOnlyHand(hand) {

  }

  addFlowerCards(count) {

  }

  checkBrokenRoyalRun(hand) {

  }

  checkTwoSuitesOnly(hand) {

  }

  /** Three Credit formations */


  checkTripleSequence(hand) {

  }

  checkTripleTriplet(hand) {

  }

  checkIdenticalDoubleSequence(hand) {

  }

  checkRoyalRun(hand) {

  }

  checkTripletsOnlyHand(hand) {

  }

  checkOneSuiteWithHonours(hand) {

  }

  checkNothingConnects(hand) {

  }

  /** Five Credit formations */

  checkHighLowHand(hand) {

  }

  checkAllSuitesAndHonours(hand) {

  }

  /** Eight Credit formations */
  checkAllDragonTriplets(hand) {

  }

  checkOneSuiteOnly(hand) {

  }

  checkNothingConnectsWithAllHonours(hand) {

  }
}

function compareSequence(sequence1, sequence2) {
  return sequence1.reduce((result, card) => card in sequence2 && result, true);
}

