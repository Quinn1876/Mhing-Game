const Player = require('../../public/player').default;

test("Adding Cards", () => {
  const player = new Player();
  expect(player.hand.length).toBe(0);
  player.addCardToHand(1);
  expect(player.hand.length).toBe(1);
  expect(player.hand[0]).toBe(1);
})
