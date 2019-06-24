const enhancer = require('./enhancer.js');
// test away!

const item1 = {
  name: "Spear",
  enhancement: 12,
  durability: 50
};

const item2 = {
  name: "Knife",
  enhancement: 4,
  durability: 70
};

const item3 = {
  name: "Axe",
  enhancement: 20,
  durability: 100
};

test('Should return an item with the durability restored to 100.', () => {
  expect(enhancer.repair(item1)).toEqual({
    name: item1.name,
    enhancement: item1.enhancement,
    durability: 100
  });
  expect(enhancer.repair(item2)).toEqual({
    name: item2.name,
    enhancement: item2.enhancement,
    durability: 100
  });
  expect(enhancer.repair(item3)).toEqual({
    name: item3.name,
    enhancement: item3.enhancement,
    durability: 100
  });
});

test("Should return an item with the enhancementt 1 point higher, unless it is 20", function() {
  expect(enhancer.succeed(item1)).toEqual({
    name: item1.name,
    enhancement: 13,
    durability: item1.durability
  });
  expect(enhancer.succeed(item2)).toEqual({
    name: item2.name,
    enhancement: 5,
    durability: item2.durability
  });
  expect(enhancer.succeed(item3)).toEqual({
    name: item3.name,
    enhancement: 20,
    durability: item3.durability
  });
});

test("Should return an item with durability decreased by 5 if enhancement is lower than 15, else it decreases by 10. Should return enhancement decreased by 1 if it was greater than 16", function() {
  expect(enhancer.fail(item1)).toEqual({
    name: item1.name,
    enhancement: item1.enhancement,
    durability: 45
  });
  expect(enhancer.fail(item2)).toEqual({
    name: item2.name,
    enhancement: item2.enhancement,
    durability: 65
  });
  expect(enhancer.fail(item3)).toEqual({
    name: item3.name,
    enhancement: 19,
    durability: 90
  });
});

test("Should return an item with the name modified to contain enhancement level, unless level was 0", function() {
  expect(enhancer.get(item1)).toEqual({
    ...item1,
    name: "[+12] Spear"
  });
  expect(enhancer.get(item2)).toEqual({
    ...item2,
    name: "[+4] Knife"
  });
  expect(enhancer.get(item3)).toEqual({
    ...item3,
    name: "[+20] Axe"
  });
});
