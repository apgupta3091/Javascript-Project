
async function getData(url = 'https://data.usajobs.gov/api/search?Keyword=Software&LocationName=California') {
    
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
   
    return data
}


export default getData;