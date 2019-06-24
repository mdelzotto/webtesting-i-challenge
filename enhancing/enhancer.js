module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return {
    ...item,
  enhancement: item.enhancement < 20 ? item.enhancement + 1 : item.enhancement
 };
}

function fail(item) {
  return {
    ...item,
    durability:
      item.enhancement < 15 ? item.durability - 5 : item.durability - 10,
    enhancement: item.enhancement > 16 ? item.enhancement - 1 : item.enhancement
  };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if (item.enhancement === 0) {
    return item;
  } else {
    return {
      ...item,
      name: `[+${item.enhancement}] ${item.name}`
    };
  }
}
