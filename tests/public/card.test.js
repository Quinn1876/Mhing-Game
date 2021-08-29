const Card = require('../../public/card.js').default;
const { WINDS, SUITES, DRAGONS } = require('../../public/card.js');

test('Creating a wildCard', () => {
  const wildCard = Card.createWild();
  expect(wildCard.isWildCard()).toBe(true);
  expect(wildCard.isFlowerCard()).toBe(false);
  expect(wildCard.isHonourCard()).toBe(false);
  expect(wildCard.getSuite()).toBe(null);
  expect(wildCard.getValue()).toBe(null);
})

test('Creating a flowerCard', () => {
  const flowerCard = Card.createFlower();
  expect(flowerCard.isFlowerCard()).toBe(true);
  expect(flowerCard.isWildCard()).toBe(false);
  expect(flowerCard.isHonourCard()).toBe(false);
  expect(flowerCard.getSuite()).toBe(null);
  expect(flowerCard.getValue()).toBe(null);
})

test('Creating a Dragon', () => {
  const whiteDragon = Card.createDragon(DRAGONS.WHITE);
  expect(whiteDragon.isHonourCard()).toBe(true);
  expect(whiteDragon.isFlowerCard()).toBe(false)
  expect(whiteDragon.isWildCard()).toBe(false)
  expect(whiteDragon.getSuite()).toBe(DRAGONS.WHITE);
  expect(whiteDragon.getValue()).toBe(null);

  const  greenDragon = Card.createDragon(DRAGONS.GREEN);
  expect(greenDragon.isHonourCard()).toBe(true);
  expect(greenDragon.isFlowerCard()).toBe(false)
  expect(greenDragon.isWildCard()).toBe(false)
  expect(greenDragon.getSuite()).toBe(DRAGONS.GREEN);
  expect(greenDragon.getValue()).toBe(null);

  const  redDragon = Card.createDragon(DRAGONS.RED);
  expect(redDragon.isHonourCard()).toBe(true);
  expect(redDragon.isFlowerCard()).toBe(false)
  expect(redDragon.isWildCard()).toBe(false)
  expect(redDragon.getSuite()).toBe(DRAGONS.RED);
  expect(redDragon.getValue()).toBe(null);

  const invalidDragon = Card.createDragon('purple');
  expect(invalidDragon).toBe(null);
});

test('Creating a Wind', () => {
  const  northWind = Card.createWind(WINDS.NORTH);
  expect(northWind.isHonourCard()).toBe(true);
  expect(northWind.isFlowerCard()).toBe(false)
  expect(northWind.isWildCard()).toBe(false)
  expect(northWind.getSuite()).toBe(WINDS.NORTH);
  expect(northWind.getValue()).toBe(null);

  const  southWind = Card.createWind(WINDS.SOUTH);
  expect(southWind.isHonourCard()).toBe(true);
  expect(southWind.isFlowerCard()).toBe(false)
  expect(southWind.isWildCard()).toBe(false)
  expect(southWind.getSuite()).toBe(WINDS.SOUTH);
  expect(southWind.getValue()).toBe(null);

  const  eastWind = Card.createWind(WINDS.EAST);
  expect(eastWind.isHonourCard()).toBe(true);
  expect(eastWind.isFlowerCard()).toBe(false)
  expect(eastWind.isWildCard()).toBe(false)
  expect(eastWind.getSuite()).toBe(WINDS.EAST);
  expect(eastWind.getValue()).toBe(null);

  const  westWind = Card.createWind(WINDS.WEST);
  expect(westWind.isHonourCard()).toBe(true);
  expect(westWind.isFlowerCard()).toBe(false)
  expect(westWind.isWildCard()).toBe(false)
  expect(westWind.getSuite()).toBe(WINDS.WEST);
  expect(westWind.getValue()).toBe(null);

  const invalidWind = Card.createDragon('purple');
  expect(invalidWind).toBe(null);
});


test('Creating a Character Card', () => {
  const  characterCard9 = Card.createCharacters(9);
  expect(characterCard9.getValue()).toBe(9);
  expect(characterCard9.getSuite()).toBe(SUITES.CHARACTERS);
  expect(characterCard9.isHonourCard()).toBe(false);
  expect(characterCard9.isWildCard()).toBe(false);
  expect(characterCard9.isFlowerCard()).toBe(false);

  const  characterCard1 = Card.createCharacters(1);
  expect(characterCard1.getValue()).toBe(1);
  expect(characterCard1.getSuite()).toBe(SUITES.CHARACTERS);
  expect(characterCard1.isHonourCard()).toBe(false);
  expect(characterCard1.isWildCard()).toBe(false);
  expect(characterCard1.isFlowerCard()).toBe(false);

  const  characterCard5 = Card.createCharacters(5);
  expect(characterCard5.getValue()).toBe(5);
  expect(characterCard5.getSuite()).toBe(SUITES.CHARACTERS);
  expect(characterCard5.isHonourCard()).toBe(false);
  expect(characterCard5.isWildCard()).toBe(false);
  expect(characterCard5.isFlowerCard()).toBe(false);

  const  characterCardNull = Card.createCharacters(19);
  expect(characterCardNull).toBe(null);
})


test('Creating a Dots Card', () => {
  const  dotsCard9 = Card.createDots(9);
  expect(dotsCard9.getValue()).toBe(9);
  expect(dotsCard9.getSuite()).toBe(SUITES.DOTS);
  expect(dotsCard9.isHonourCard()).toBe(false);
  expect(dotsCard9.isWildCard()).toBe(false);
  expect(dotsCard9.isFlowerCard()).toBe(false);

  const  dotsCard1 = Card.createDots(1);
  expect(dotsCard1.getValue()).toBe(1);
  expect(dotsCard1.getSuite()).toBe(SUITES.DOTS);
  expect(dotsCard1.isHonourCard()).toBe(false);
  expect(dotsCard1.isWildCard()).toBe(false);
  expect(dotsCard1.isFlowerCard()).toBe(false);

  const  dotsCard5 = Card.createDots(5);
  expect(dotsCard5.getValue()).toBe(5);
  expect(dotsCard5.getSuite()).toBe(SUITES.DOTS);
  expect(dotsCard5.isHonourCard()).toBe(false);
  expect(dotsCard5.isWildCard()).toBe(false);
  expect(dotsCard5.isFlowerCard()).toBe(false);

  const  dotCardNull = Card.createDots(19);
  expect(dotCardNull).toBe(null);
})

test('Creating a Bamboos Card', () => {
  const  bambooCard9 = Card.createBamboos(9);
  expect(bambooCard9.getValue()).toBe(9);
  expect(bambooCard9.getSuite()).toBe(SUITES.BAMBOOS);
  expect(bambooCard9.isHonourCard()).toBe(false);
  expect(bambooCard9.isWildCard()).toBe(false);
  expect(bambooCard9.isFlowerCard()).toBe(false);

  const  bambooCard1 = Card.createBamboos(1);
  expect(bambooCard1.getValue()).toBe(1);
  expect(bambooCard1.getSuite()).toBe(SUITES.BAMBOOS);
  expect(bambooCard1.isHonourCard()).toBe(false);
  expect(bambooCard1.isWildCard()).toBe(false);
  expect(bambooCard1.isFlowerCard()).toBe(false);

  const  bambooCard5 = Card.createBamboos(5);
  expect(bambooCard5.getValue()).toBe(5);
  expect(bambooCard5.getSuite()).toBe(SUITES.BAMBOOS);
  expect(bambooCard5.isHonourCard()).toBe(false);
  expect(bambooCard5.isWildCard()).toBe(false);
  expect(bambooCard5.isFlowerCard()).toBe(false);

  const  bambooCardNull = Card.createBamboos(19);
  expect(bambooCardNull).toBe(null);
})
