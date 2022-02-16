const Player = require('../../public/player').default;

test("Adding Cards", () => {
  const player = new Player();
  expect(player.hand.length).toBe(0);
  player.addCardToHand(1);
  expect(player.hand.length).toBe(1);
  expect(player.hand[0]).toBe(1);

  player.addCardToHand(7);
  expect(player.hand.length).toBe(2);
  expect(player.hand[1]).toBe(7);
});

test('Sorting Cards in hand - First Item To Last', () => {
  const player = new Player();
  player.addCardToHand(0);
  player.addCardToHand(1);
  player.addCardToHand(2);
  player.addCardToHand(3);
  player.addCardToHand(4);
  player.addCardToHand(5);
  player.addCardToHand(6);

  player.changeCardPosition(0, 6);
  expect(player.hand).toMatchObject([1,2,3,4,5,6,0]);
});

test('Sorting Cards in hand - Last Item To First', () => {
  const player = new Player();
  player.addCardToHand(0);
  player.addCardToHand(1);
  player.addCardToHand(2);
  player.addCardToHand(3);
  player.addCardToHand(4);
  player.addCardToHand(5);
  player.addCardToHand(6);

  player.changeCardPosition(6, -1);
  expect(player.hand).toMatchObject([6,0,1,2,3,4,5]);
});

test('Sorting Cards in hand - Old Greater than new', () => {
  const player = new Player();
  player.addCardToHand(0);
  player.addCardToHand(1);
  player.addCardToHand(2);
  player.addCardToHand(3);
  player.addCardToHand(4);
  player.addCardToHand(5);
  player.addCardToHand(6);

  player.changeCardPosition(5, 2);
  expect(player.hand).toMatchObject([0,1,5,2,3,4,6]);
});

test('Sorting Cards in hand - Old less than new', () => {
  const player = new Player();
  player.addCardToHand(0);
  player.addCardToHand(1);
  player.addCardToHand(2);
  player.addCardToHand(3);
  player.addCardToHand(4);
  player.addCardToHand(5);
  player.addCardToHand(6);

  player.changeCardPosition(2, 5);
  expect(player.hand).toMatchObject([0,1,3,4,5,2,6]);
});


