/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import State from "./state.js";
import Graph from "./graph.js";
import Interface from "./interface.js";

const Functions = (_ => {
  const visualizePaths = (paths, robot) => {
    const visualizePath = (path, picked, delivered) => {
      for (let i = 0; i < path.length; i++) {
        setTimeout(_ => {
          if (!path[i].matches(".village__place"))
            path[
              i
            ].innerHTML = `<div class="${robot.name}">${robot.name[0]}</div>`;
        }, 75 * i);
      }
      setTimeout(_ => {
        robot.picked += picked;
        robot.delivered += delivered;
        Interface.updateItem(robot.name, robot.picked, robot.delivered);
        if (robot.delivered === Interface.getParcelsCount()) {
          const newRobotsCount = Interface.getRobotsCount() - 1;
          Interface.setState(newRobotsCount !== 0, newRobotsCount);
        }
      }, 75 * path.length);
    };

    let time = 0;
    for (let [from, to, picked, delivered] of paths) {
      const path = Graph.paths[`${from}-${to}`];
      if (!path) continue;
      setTimeout(_ => {
        visualizePath(path, picked, delivered);
      }, time);
      time += 115 * path.length;
    }
  };

  const runRobot = (state, robot) => {
    let turn = 1,
      memory = [];
    const paths = [];
    while (turn++) {
      if (!state.parcels.length) {
        visualizePaths(paths, robot);
        return turn;
      }
      const action = robot.run(state, memory),
        moveObj = state.move(action.direction, robot.bag);
      paths.push([
        state.place,
        action.direction,
        moveObj.picked,
        moveObj.delivered,
      ]);
      state = moveObj.state;
      memory = action.memory;
    }
  };

  const compareRobots = robots => {
    let scores = new Array(robots.length).fill(0);
    for (let i = 0; i < 1; i++) {
      const state = State.random(Interface.getParcelsCount());
      for (let j = 0; j < robots.length; j++)
        scores[j] += runRobot(state, robots[j]);
    }
    return scores;
  };

  return {
    compareRobots,
  };
})();

export default Functions;
