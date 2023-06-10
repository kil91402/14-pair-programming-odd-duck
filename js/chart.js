"use strict";

let canvasElem = document.getElementById("chart");

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
let chart;
function displayChart(data) {
  if (chart !== undefined) {
    chart.destroy();
  }
  let labels = getLabelData(data);
  let votes = getVoteData(data);
  let ctx = document.getElementById("chart");
  let dataObj = {
    type: "bar",
    data: {
      labels: ["product1", "product2", "product3"],
      datasets: [
        {
          label: "votes",
          data: votes,
        },
      ],
    },
  };
  let chart = new Chart(ctx, dataObj);
}

function getVoteData(productIndexArray) {
  let votes = [];
  for (let productIndex of productIndexArray) {
    votes.push(productIndex.voteCount);
  }
  return votes;
}

function getLabelData(productIndexArray) {
  let labels = [];
  for (let product of productIndexArray) {
    labels.push(productIndex.name);
  }
  return labels;
}
function renderChart() {}

renderChart();
