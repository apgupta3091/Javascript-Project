import states from '../data/states';

async function stateData(url = '', state) {
    let obj = {};
    const startUrl = "https://data.usajobs.gov/api/search?Keyword=Software&LocationName="
    if (!url){
        for(let i = 0; i < state.length; i++){
            url = startUrl + state[i];
            
            const response = await fetch(url, {
                headers: {
                Host: 'data.usajobs.gov',
                'User-Agent': 'apgupta@syr.edu',
                'Authorization-Key': 'hGUSn50zuHgBGmVhwNWCH2QtgH0Q/8YwrmimwqIZlGI='

                }   
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json()
            obj[state[i]] = data;

        }
    }
    return obj;
}


const statesData = stateData('', states)
    .then(data => {
        console.log(data.Alabama.SearchResult.SearchResultCountAll);
        
      })
      .catch(error => {
        console.log('There is a problem woth your fetch operation', error);
      });



export default stateData;