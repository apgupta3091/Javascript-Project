import legend from './scripts/legend';
import renderMap from './scripts/map';
import getStateData from './scripts/stateData';
import states from './data/states';
import setData from './data/data';
import clearMap from './scripts/clearMap';
import northEast from './data/northEast';
import west from './data/west';
import southEast from './data/southEast';
import midWest from './data/midWest';
import barChart from './scripts/chart';

document.addEventListener("DOMContentLoaded", () => {
    renderMap(setData);
    legend();
    const body = document.querySelector('body');
    const closeModalButton = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    const modalBody = document.querySelector('.modal-body');
    const modalHeader = document.querySelector('.modal-header');

    

    closeModalButton.addEventListener('click', () => {
        closeModal(modal);
    })

    body.addEventListener('click', () => {
      closeModal(modal);
    })


    const closeModal = (modal) => {
      modal.classList.add('hide')
      overlay.classList.add('hide')
      modalBody.style.display="none"
      modalHeader.style.display= "none";
      modalHeader.style.border="none";
    }

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

    const form = document.querySelector('.form');
    const regionText = document.getElementById('region-text');
    const select = document.getElementById('region');
    
    barChart(northEast);

      select.onchange = () => {
      let value = select.value;
      if (value === "northEast"){
        regionText.textContent="NorthEast Region"
        let svg = document.querySelector('.svg1');
        svg.remove();
        barChart(northEast);
      } else if (value === "southEast"){
        regionText.textContent= "SouthEast Region"
        let svg = document.querySelector('.svg1');
        svg.remove();
        barChart(southEast);
      } else if (value === "west"){
        regionText.textContent= "West Region"
        let svg = document.querySelector('.svg1');
        svg.remove();
        barChart(west);
      } else {
        regionText.textContent= "MidWest Region"
        let svg = document.querySelector('.svg1');
        svg.remove();
        barChart(midWest);
      }
    }
    
})

