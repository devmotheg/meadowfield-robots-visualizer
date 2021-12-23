/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

export default {
  info: {
    post: {
      coords: [16, 54],
      name: "Post Office",
    },
    marketplace: {
      coords: [27, 43],
      name: "Marketplace",
    },
    cabin: {
      coords: [15, 93],
      name: "Cabin",
    },
    farm: {
      coords: [32, 12],
      name: "Farm",
    },
    alice: {
      coords: [27, 72],
      name: "Alice's House",
    },
    bob: {
      coords: [62, 83],
      name: "Bob's House",
    },
    town: {
      coords: [64, 54],
      name: "Town Hall",
    },
    grete: {
      coords: [59, 12],
      name: "Grete's House",
    },
    shop: {
      coords: [63, 28],
      name: "Shop",
    },
    ernie: {
      coords: [90, 16],
      name: "Ernie's House",
    },
    daria: {
      coords: [91, 40],
      name: "Daria's House",
    },
  },
  roads: [
    "alice-bob",
    "alice-cabin",
    "alice-post",
    "bob-town",
    "daria-ernie",
    "daria-town",
    "ernie-grete",
    "grete-farm",
    "grete-shop",
    "marketplace-farm",
    "marketplace-post",
    "marketplace-shop",
    "marketplace-town",
    "shop-town",
  ],
  mailRoute: [
    "alice",
    "cabin",
    "alice",
    "bob",
    "town",
    "daria",
    "ernie",
    "grete",
    "shop",
    "grete",
    "farm",
    "marketplace",
    "post",
  ],
};
