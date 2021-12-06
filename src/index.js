import legend from './scripts/legend';
import map from './scripts/map';

document.addEventListener("DOMContentLoaded", () => {
    map();
    legend();
    
})

const demoUrl = 'https://www.metaweather.com/api/location/search/?query=san';
    const corsRequest = (url = demoUrl) => {
  fetch(`/cors?url=${encodeURIComponent(url)}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
}

    const apiRequest = (query = 'curry') => {
  fetch(`/api?searchTerm=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
}