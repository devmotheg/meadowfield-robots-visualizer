/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import Graph from "./graph.js";
import village from "../data/village.js";

const Robots = (_ => {
  const randomPick = array => array[Math.floor(Math.random() * array.length)];

  const findRoute = (from, to) => {
    const work = [{ at: from, route: [] }],
      visited = {};
    for (let i = 0; i < work.length; i++) {
      const { at, route } = work[i];
      for (const place of Object.keys(Graph.graph[at])) {
        if (place === to) return route.concat(place);
        if (!(place in visited))
          work.push({ at: place, route: route.concat(place) });
      }
    }
  };

  class RandomRobot {
    constructor() {
      this.name = "random";
      this.bag = {};
      this.picked = 0;
      this.delivered = 0;
    }

    run(state) {
      return { direction: randomPick(Object.keys(Graph.graph[state.place])) };
    }
  }

  class MailRouteRobot {
    constructor() {
      this.name = "mail";
      this.bag = {};
      this.picked = 0;
      this.delivered = 0;
    }

    run(_, memory) {
      if (!memory.length) memory = village.mailRoute;
      return { direction: memory[0], memory: memory.slice(1) };
    }
  }

  class GoalOrientedRobot {
    constructor() {
      this.name = "goal";
      this.bag = {};
      this.picked = 0;
      this.delivered = 0;
    }

    run({ place, parcels }, memory) {
      if (!memory.length) {
        if (parcels[0].place !== place)
          memory = findRoute(place, parcels[0].place);
        else memory = findRoute(place, parcels[0].address);
      }
      return { direction: memory[0], memory: memory.slice(1) };
    }
  }

  class EfficientRobot {
    constructor() {
      this.name = "efficient";
      this.bag = {};
      this.picked = 0;
      this.delivered = 0;
    }

    run({ place, parcels }, memory) {
      const betterRoute = (route, type) => {
        return (
          !memory.length ||
          route.length < memory.length ||
          (route.length === memory.length && type === "Pickup")
        );
      };

      if (!memory.length) {
        for (const parcel of parcels) {
          if (parcel.place !== place)
            var destination = [parcel.place, "Pickup"];
          else var destination = [parcel.address, "Delivery"];
          const route = findRoute(place, destination[0]);
          if (betterRoute(route, destination[1])) memory = route;
        }
      }
      return { direction: memory[0], memory: memory.slice(1) };
    }
  }

  return {
    RandomRobot,
    MailRouteRobot,
    GoalOrientedRobot,
    EfficientRobot,
  };
})();

export default Robots;
