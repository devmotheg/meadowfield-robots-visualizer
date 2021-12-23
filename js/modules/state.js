/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import Graph from "./graph.js";

export default class State {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination, bag) {
    let picked = 0,
      delivered = 0;
    if (!(destination in Graph.graph[this.place]))
      return { state: this, picked, delivered };
    else {
      const parcels = this.parcels
        .map(p => {
          if (p.place !== this.place) return p;
          if (!(p.id in bag)) {
            bag[p.id] = true;
            picked++;
          }
          return { place: destination, address: p.address, id: p.id };
        })
        .filter(p => {
          if (p.place !== p.address) return true;
          delivered++;
          return false;
        });
      return {
        state: new State(destination, parcels),
        picked,
        delivered,
      };
    }
  }

  static random(parcelCount = 5) {
    const randomPick = array => array[Math.floor(Math.random() * array.length)];

    const parcels = [],
      places = Object.keys(Graph.graph);
    for (let i = 0; i < parcelCount; i++) {
      const place = randomPick(places);
      let address;
      do {
        address = randomPick(places);
      } while (place === address);
      parcels.push({ place, address, id: i + 1 });
    }
    return new State(randomPick(places), parcels);
  }
}
