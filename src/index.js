import legend from './scripts/legend';
import renderMap from './scripts/map';
import stateData from './scripts/stateData';
import states from './data/states';

document.addEventListener("DOMContentLoaded", () => {
    let obj = stateData('',states);
    // for(let i = 0; i < states.length; i++){
    //     obj[states[i]] = obj[states[i]]
    // }
    renderMap();
    legend();
})

