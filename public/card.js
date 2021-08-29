var SUITES = {
  'BAMBOOS': 'BAMBOOS',
  'DOTS': 'DOTS',
  'CHARACTERS': 'CHARACTERS'
};

var DRAGONS = {
  'RED': 'RED',
  'GREEN': 'GREEN',
  'WHITE': 'WHITE',
};

var WINDS = {
  'NORTH': 'NORTH',
  'EAST': 'EAST',
  'SOUTH': 'SOUTH',
  'WEST': 'WEST',
};


class Card {
  constructor(isHonour, suit, value=undefined, isFlower=false, isWild=false) {
    this.isWild = isWild;
    this.isFlower = isFlower;
    this.isHonour = isHonour;
    if (isWild || isFlower) return;

    this.suit = suit;
    this.value = isHonour ? null : value; // honour cards do not have a value
  }

  /***********************************
   *       Custom Constructors
   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/

  /**
   *
   * @param {string} colour One of DRAGONS, the colour of the dragon
   * @returns new Card or null
   */
  static createDragon(colour) {
    if (colour in DRAGONS) {
      return new Card(true, colour);
    } else {
      return null;
    }
  }

  /**
   *
   * @param {string} direction : ;one of WINDS, the direction of the wind
   * @returns new Card or null
   */
  static createWind(direction) {
    if (direction in WINDS) {
      return new Card(true, direction);
    }

    return null;
  }

  /**
   *
   * @param {number} value number to be validated
   * @returns true if in range 1-9, else false
   */
  static validateValue(value) {
    return value >= 1 && value <= 9;
  }


  /**
   *
   * @param {number} value the value of the card
   * @returns a new bamboos card
   */
  static createBamboos(value) {
    if (Card.validateValue(value)) {
      return new Card(false, SUITES.BAMBOOS, value);
    }
    return null;
  }

  /**
   * @brief create and return a dots card
   * @param {number} value the value of the card
   * @returns
   */
  static createDots(value) {
    if (Card.validateValue(value)) {
      return new Card(false, SUITES.DOTS, value);
    }

    return null;
  }

  /**
   *
   * @param {number} value the value for the character card
   * @returns a new characters card
   */
  static createCharacters(value) {
    if (Card.validateValue(value)) {
      return new Card(false, SUITES.CHARACTERS, value);
    }

    return null;
  }

  /**
   *
   * @returns new Card
   */
  static createWild() {
    return new Card(false, undefined, undefined, false, true);
  }

  /**
   *
   * @returns new Card
   */
  static createFlower() {
    return new Card(false, undefined, undefined, true, false);
  }

  /************************************************
                  Member Functions
  *************************************************/

  /**
   *
   * @returns true if the card is wild, false otherwise
   */
  isWildCard() {
    return this.isWild;
  }

  /**
   *
   * @returns true if the card is an honour card, false otherwise
   */
  isHonourCard() {
    return this.isHonour;
  }

  /**
   *
   * @returns trie if the card is a flower card, false otherwise
   */
  isFlowerCard() {
    return this.isFlower;
  }

  /**
   *
   * @returns the suite of honour and number cards, null if wild or flower
   */
  getSuite() {
    if (this.isWild || this.isFlower) return null;
    return this.suit;
  }

  /**
   *
   * @returns the value of the number card, null if wild or flower or honour
   */
  getValue() {
    if (this.isWild || this.isFlower || this.isHonour) return null;
    return this.value;
  }
}

module.exports.default = Card;
module.exports.DRAGONS = DRAGONS;
module.exports.SUITES = SUITES;
module.exports.WINDS = WINDS;
