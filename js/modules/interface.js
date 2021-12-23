/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import Robots from "./robots.js";
import Functions from "./functions.js";

const Interface = (_ => {
  const menuCompareEl = document.querySelector(".menu__compare"),
    menuParcelsButtonsEl = document.querySelector(".menu__parcels-buttons"),
    menuParcelsCountEl = document.querySelector(".menu__parcels-count"),
    parcelsCountEls = document.querySelectorAll(".parcels-count");
  const state = {
    running: false,
    robotsCount: 0,
    parcelsCount: 5,
  };

  const updateItem = (robotName, picked, delivered) => {
    document.querySelector(`.${robotName}-picked`).textContent =
      picked < 10 ? "0" + picked : picked;
    document.querySelector(`.${robotName}-delivered`).textContent =
      delivered < 10 ? "0" + delivered : delivered;
  };

  const getRobotsCount = _ => state.robotsCount;

  const getParcelsCount = _ => state.parcelsCount;

  const render = _ => {
    const renderHelper = action => {
      menuCompareEl.classList[action]("--running");
      document.querySelector(".menu__parcels").classList[action]("--running");
      const labelEls = document.querySelectorAll("label");
      for (const label of labelEls) {
        label.classList[action]("--disable");
        if (action === "add") label.setAttribute("for", "");
        else label.setAttribute("for", label.getAttribute("data-for"));
      }
      const inputEls = document.querySelectorAll("input:not(input:checked)");
      for (const input of inputEls) {
        document
          .querySelector(`.menu__selection-${input.getAttribute("id")}`)
          .classList[action]("--running");
        document
          .querySelector(`.village__ranking-${input.getAttribute("id")}`)
          .classList[action]("--running");
      }
      if (action === "add") return;
      const itemEls = document.querySelectorAll(".item");
      for (const item of itemEls) item.textContent = "00";
    };

    if (state.running) renderHelper("add");
    else renderHelper("remove");
    const leading = state.parcelsCount < 10 ? "0" : "";
    menuParcelsCountEl.textContent = leading + state.parcelsCount;
    for (const ele of parcelsCountEls)
      ele.textContent = leading + state.parcelsCount;
  };

  const setState = (running, robotsCount) => {
    state.running = running;
    state.robotsCount = robotsCount;
    render();
  };

  const listeners = _ => {
    menuCompareEl.addEventListener("click", _ => {
      const inputEls = document.querySelectorAll("input:checked"),
        robots = [];
      for (const input of inputEls)
        robots.push(input.getAttribute("data-class"));
      if (!state.running && robots.length) {
        setState(true, robots.length);
        Functions.compareRobots(robots.map(d => new Robots[d]()));
        render();
      }
    });

    menuParcelsButtonsEl.addEventListener("click", e => {
      if (!state.running) {
        if (e.target.matches(".up"))
          state.parcelsCount = Math.min(50, state.parcelsCount + 5);
        else state.parcelsCount = Math.max(5, state.parcelsCount - 5);
        render();
      }
    });
  };

  const init = _ => {
    render();
    listeners();
  };

  return {
    init,
    setState,
    getRobotsCount,
    getParcelsCount,
    updateItem,
  };
})();

export default Interface;
