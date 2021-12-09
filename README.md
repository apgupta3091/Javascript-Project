# U.S. Software Jobs

## BACKGROUND:

[U.S. Software Jobs](https://apgupta3091.github.io/U.S.-Software-Jobs/)
is a software development data visualization project,
in which developers whom are currently looking for new software dev 
roles have acsess to see which states have the most open roles. 

-----------------------------------------------------------------------------

## TECHNOLOGIES, LIBRARIES, API'S:

- HTML5
- SCSS
- Javascript (ES6)
- D3.js
- [usajobs](https://developer.usajobs.gov/) Api to retrieve available job data
- Webpack to bundle the JavaScript code
- Babel to transplile the Javascript code
- npm to manage project dependencies

-----------------------------------------------------------------------------
## FEATURES

### Modal/Overlay
<img width="503" alt="Screen Shot 2021-12-09 at 11 00 40 AM" src="https://user-images.githubusercontent.com/53449807/145431863-e511762d-5e1c-485b-9ac2-d578fade078f.png">

One of the features of the U.S. Software Jobs project is the modal. This Modal
loads when the page loads and puts an overlay over the page which greys the 
page out and doesn't allow a user to click/hover over elements on the page.

![Screen Shot 2021-12-09 at 11 08 13 AM](https://user-images.githubusercontent.com/53449807/145432664-778addcf-0aa1-43ad-b013-59f940fb46c0.png)

The Modal was creating using just CSS. I was able to do this by setting a 
fixed position to the modal and setting a z-index to the modal to make 
it lay on top of the other items on the page.

![Screen Shot 2021-12-09 at 11 10 32 AM](https://user-images.githubusercontent.com/53449807/145433013-085f747e-cdb5-4bb7-9e8d-70a66ee2abbd.png)

The Overlay was also created using just CSS and also had a fixed position as 
well as an opacity of 1. This overlay was created by wrapping all of my html 
with a div tag so it covered the whole page. To close the modal and overlay
a user can click on the body of the page and the ease-in-out transition will
take place and close the overlay and the modal.

### Map
<img width="711" alt="Screen Shot 2021-12-09 at 11 01 10 AM" src="https://user-images.githubusercontent.com/53449807/145433460-cf8bef81-4df7-4fb5-a76e-e92f2f4f9992.png">

Another feature of this project is the map. The map was created using D3
and allows a user to hover over it as it highlights each state when that 
state is hovered over.

![Screen Shot 2021-12-09 at 11 16 06 AM](https://user-images.githubusercontent.com/53449807/145433964-9c35b3b2-3de4-47a9-9c53-4aa6a19ea64b.png)

The map is implemented using d3.js. First, I set a width and height for the map.
Second, I utilize the d3.select function to select the DOM element with the class
of .map. Once selcted, I append an svg to that element with the width and height
specified previously. Next, I utilized the d3.geoAlbersUsa() function from the d3.js
library which gave me the ability to place a blank map of the U.S. on my DOM. Lastly,
I utilized the .json file I found on github to be able to grab the coordinates of 
each state which is necessary for the next step.

![Screen Shot 2021-12-09 at 11 21 48 AM](https://user-images.githubusercontent.com/53449807/145435035-86a31a93-fc79-4396-a43d-121d3479319b.png)

The next step in creating the map was getting all of the borders for each state of 
the map. The first step was done by passing in the previous json data for the coordinates of 
each state and selecting all the "path" elements in that data. Next, I utilized the d3 .data
function and passed in the features of the data which was each state and it's (lat, long).
From here I was able to append the path and add attributes which allowed me to create 
borders where each states border is.


-----------------------------------------------------------------------------

## FUTURE FEATURES:

- dropdown selection for the Avg salary which updates the map accordingly
- dropwdown selection for the # of jobs requiring JS which updates the map accordingly
