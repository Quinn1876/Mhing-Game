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

test('Sorting Cards in hand', () => {
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

  player.changeCardPosition(4, -1);
  expect(player.hand).toMatchObject([5,1,2,3,4,6,0]);
})
