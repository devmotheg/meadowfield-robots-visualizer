/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import TutorialPages from "../data/tutorial-pages.js";

const Tutorial = (_ => {
  const tutorialPageEl = document.querySelector(".tutorial__page"),
    tutorialEl = document.querySelector(".tutorial");
  let currentPageIdx = 0;

  const render = _ => {
    tutorialPageEl.innerHTML = TutorialPages[currentPageIdx];
    setTimeout(_ => {
      document
        .querySelector(".tutorial__page-content")
        .classList.remove("tutorial__page--next");
    }, 200);
  };

  const goToNextPage = _ => {
    const tutorialPageContentEl = document.querySelector(
      ".tutorial__page-content"
    );
    tutorialPageContentEl.classList.add("tutorial__page--done");
    currentPageIdx++;
    setTimeout(_ => {
      render();
    }, 200);
  };

  const closeTutorial = _ => {
    tutorialEl.classList.add("tutorial--done");
    setTimeout(_ => {
      tutorialPageEl.innerHTML = "";
    }, 200);
  };

  const listeners = _ => {
    tutorialPageEl.addEventListener("click", e => {
      if (e.target.matches(".tutorial__next")) goToNextPage();
      else if (e.target.matches(".tutorial__close")) closeTutorial();
    });
  };

  const init = _ => {
    render();
    listeners();
  };

  return {
    init,
  };
})();

export default Tutorial;
