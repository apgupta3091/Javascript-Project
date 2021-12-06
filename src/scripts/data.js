

const data = () => {
    fetch('https://data.usajobs.gov/api/search?Keyword=Software&LocationName=New%20York')
        .then(res => res.json())
        .then(data => console.log(data))
}


export default data;