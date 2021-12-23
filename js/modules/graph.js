/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import village from "../data/village.js";

const Graph = (_ => {
  const containerEl = document.querySelector(".container"),
    tbodyEl = document.querySelector("tbody");
  const graph = {};
  const paths = {};

  const buildGraph = _ => {
    const addEdge = (from, to) => {
      if (!graph[from]) graph[from] = {};
      graph[from][to] = to;
    };

    for (const edge of village.roads) {
      const [from, to] = edge.split("-");
      addEdge(from, to);
      addEdge(to, from);
    }
  };

  const visualizeGraph = _ => {
    const numRows = Math.floor(600 / 25),
      numCols = Math.floor(containerEl.scrollWidth / 25);

    for (let r = 0; r <= numRows; r++) {
      const currRow = document.createElement("tr");
      currRow.classList.add("row");
      currRow.classList.add(`${r}`);
      for (let c = 0; c <= numCols; c++) {
        currRow.innerHTML += `
        <td class="c${r}-${c}" data-coords="${r}-${c}"></td>
        `;
      }
      tbodyEl.appendChild(currRow);
    }

    const visualizeVertices = _ => {
      const numFromPercentage = (percentage, otherNum) => {
        return Math.floor((percentage / 100) * otherNum);
      };

      for (const key of Object.keys(village.info)) {
        let [r, c] = village.info[key].coords;
        r = numFromPercentage(r, numRows);
        c = numFromPercentage(c, numCols);
        const cell = document.querySelector(`.c${r}-${c}`);
        cell.classList.add("village__place");
        cell.classList.add(key);
        cell.innerHTML = key[0];
        cell.setAttribute("data-name", village.info[key].name);
      }
    };

    const visualizeEdges = () => {
      const visualizeEdge = path => {
        for (const road of path) {
          if (!road.matches(".village__place"))
            road.classList.add(`village__road`);
        }
      };

      const findPaths = _ => {
        const bfs = (start, end, from, to) => {
          const select = (...coords) =>
            document.querySelector(`.c${coords[0]}-${coords[1]}`);

          const visited = [],
            queue = [[start, []]];
          for (let r = 0; r <= numRows; r++) visited.push([]);
          while (queue.length) {
            const [[r, c], path] = queue.shift();
            if (!(r < 0 || r > numRows || c < 0 || c > numCols)) {
              if (visited[r][c]) continue;
              if (r === end[0] && c === end[1]) {
                paths[`${from}-${to}`] = path;
                paths[`${to}-${from}`] = path.slice().reverse();
                visualizeEdge(path);
                return;
              }
              const up = [[r - 1, c], select(r - 1, c)],
                right = [[r, c + 1], select(r, c + 1)],
                below = [[r + 1, c], select(r + 1, c)],
                left = [[r, c - 1], select(r, c - 1)];
              [up, right, below, left].forEach(d =>
                queue.push([d[0], path.concat(d[1])])
              );
              visited[r][c] = true;
            }
          }
        };

        for (const road of village.roads) {
          const [from, to] = road.split("-");
          let start = document.querySelector(`.${from}`),
            end = document.querySelector(`.${to}`);
          [start, end] = [start, end]
            .map(n => n.getAttribute("data-coords").split("-"))
            .map(n => [n[0] - "0", n[1] - "0"]);
          bfs(start, end, from, to);
        }
      };
      findPaths();
    };

    visualizeVertices();
    visualizeEdges();
  };

  const init = _ => {
    buildGraph();
    visualizeGraph();
  };

  return {
    init,
    graph,
    paths,
  };
})();

export default Graph;
