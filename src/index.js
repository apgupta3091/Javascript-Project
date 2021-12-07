import legend from './scripts/legend';
import renderMap from './scripts/map';
import stateData from './scripts/stateData';
import states from './data/states';

document.addEventListener("DOMContentLoaded", () => {
    const statesData = stateData('', states)
    .then(data => {
        for(let i = 0; i < states.length; i++){
            data[states[i]] = data[states[i]].SearchResult.SearchResultCountAll;
        }
        console.log(data);
      })
      .catch(error => {
        console.log('There is a problem woth your fetch operation', error);
      });

    console.log(statesData);
    renderMap();
    legend();
})

