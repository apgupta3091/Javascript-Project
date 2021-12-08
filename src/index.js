import legend from './scripts/legend';
import renderMap from './scripts/map';
import getStateData from './scripts/stateData';
import states from './data/states';
import setData from './data/data';
import clearMap from './scripts/clearMap';

document.addEventListener("DOMContentLoaded", () => {
    renderMap(setData);
    legend();
    const statesData = getStateData('', states)
    .then(data => {
        for(let i = 0; i < states.length; i++){
            data[states[i]] = data[states[i]].SearchResult.SearchResultCountAll;
        }
        console.log(data);
        clearMap();
        renderMap(data);
      })
      .catch(error => {
        console.log('There is a problem with your fetch operation', error);
      });
    
    
    
})

