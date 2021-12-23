/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

export default [
  `
  <div class="tutorial__page-content">
    <div class="tutorial__heading">
      <a href="https://github.com/devmotheg" target="_blank">Designed by Mohamed Muntasir</a>
      <p>01/03</p>
      <h2>Welcome!</h2>
    </div>
    <div class="tutorial__paragraphs">
      <p>Thanks for taking the time to try out this village emulation I
        made, you can see more project done by me
        <a href="https://github.com/devmotheg" target="_blank">@devmotheg</a>!<br />(Make sure to go through the whole walkthrough.)
      </p>
      <p>Meadowfield is a small village that has an annual award for the
        fastest delivery robot...<br />This year there're four crazy robots competing!</p>
      <p>Click the
        "Next" button to proceed & see how things work here.</p>
    </div>
    <button class="tutorial__next">Next</button>
  </div>
  `,
  `
  <div class="tutorial__page-content tutorial__page--next">
    <div class="tutorial__heading">
      <a href="https://github.com/devmotheg" target="_blank">Designed by Mohamed Muntasir</a>
      <p>02/03</p>
      <h2>Guide:</h2>
    </div>
    <div class="tutorial__paragraphs">
      <div>
        <h3>1) Icons:</h3>
        <p><i class="fas fa-robot"></i> means robot.</p>
        <p><i class="fas fa-box"></i> means picked parcels.</p>
        <p><i class="fas fa-check-double"></i> means delivered
          parcels.</p>
      </div>
      <div>
        <h3>2) Features:</h3>
        <p>Count: Allows you to increase/decrease the count of parcels.</p>
        <p>Compare: Allows you to start the competition between the selected set of robots.</p>
        <p>Village nodes/places: By hovering over them you can inspect their full name.</P>
      </div>
    </div>
    <button class="tutorial__next">Next</button>
  </div>
  `,
  `
  <div class="tutorial__page-content tutorial__page--next">
    <div class="tutorial__heading">
      <a href="https://github.com/devmotheg" target="_blank">Designed by Mohamed Muntasir</a>
      <p>03/03</p>
      <h2>Meet the Robots:</h2>
    </div>
    <div class="tutorial__paragraphs">
      <p>Efficient robot: Finds the shortest path,
        favors picking up.</p>
      <p>Goal Oriented robot: Finds the shortest path, only picks up when it's out of parcels to deliver.</p>
      <p>Mail Route robot: Follows the fixed mail route
        until it's done.</p>
      <p>Random robot: Goes in random
        directions until it's done.</p>
      <p>(You can differentiate between the robots by their distinct colors in selection menu.)</p>
    </div>
    <button class="tutorial__close">close</button>
  </div>
  `,
];
