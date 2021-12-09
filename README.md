# U.S. Software Jobs

## BACKGROUND:

[U.S. Software Jobs]https://apgupta3091.github.io/U.S.-Software-Jobs/).
is a software development data visualization project,
in which developers whom are currently looking for new software dev 
roles can acsess to see which states have the most open roles. 

It includes a map of all of the states in the U.S. and data related
to these states and how many open software dev jobs they have. 

A developer will be able to hover over all of the states on the map 
and receive the number of open software dev jobs in each state along 
with a dynamic chart to see the data for each region in the U.S.

-----------------------------------------------------------------------------

##FUNCTIONALITY & MVP's:

With this Software's Dev data visualization project, users will be able to:

- Hover over each state and retreive the # of open software dev jobs
- Lookup the # of software dev jobs from each state from (2016 - 2021)
- View the trends from the years (2016 - 2021) for software dev jobs across the U.S.
- Select the type of chart they would like to view for these above trends(bar graph, etc)

In addition, this project will include:

- Modal explaining the basic capability of the program 
- A production README

-----------------------------------------------------------------------------

##WIREFRAMES:

<img width="1037" alt="Screen Shot 2021-12-03 at 12 45 30 AM" src="https://user-images.githubusercontent.com/53449807/144551929-0a25766d-0627-4147-a6c6-6bb5285b40b7.png">

- Nav links include links to this project's Github repo, my LinkedIn and the About modal.
- 3 Dropdowns: 1: Select year, 2: Select Chart type, 3: Select criteria
- Legend will have lighter shades of color = less jobs and darker = more
- Modal will appear with timeout for 4 seconds



-----------------------------------------------------------------------------

##TECHNOLOGIES, LIBRARIES, API'S:

- Javascript D3 Library
- USAJobs.gov Api to retrieve available job data
- Webpack to bundle the JavaScript code
- npm to manage project dependencies

-----------------------------------------------------------------------------

##IMPLEMENTATION TIMELINE:

- Friday Afternoon & Weekend: Setup project, including getting webpack up and running. Spend time getting comfortable with the D3 library. Render a map on my index.html with hovering capability. Create a legend for the map.

- Monday: Dedicate this day toward retrieving the data from the USAjobs api, and parsing the data so I am able to collect the total number of available jobs in each state. Once parsed, updating the states on the map to reflect the color based on the legend created previously.

- Tuesday: If I didn't get to it already, create a dropdown button with the charts in which a user would like to see the trends of the # of software dev jobs. Also, retreiving the data from the previous 5 years of the jobs and updating the map when a user selects the specified year.

- Wednesday: Implement the nav links, implement the modal for instructions, focus mainly on styling, start implementing the bonus features.

- Thursday Morning: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

-----------------------------------------------------------------------------

##BONUS FEATURES:

- dropdown selection for the Avg salary which updates the map accordingly
- dropwdown selection for the # of jobs requiring JS which updates the map accordingly
