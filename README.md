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

### Modal
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


-----------------------------------------------------------------------------

## FUTURE FEATURES:

- dropdown selection for the Avg salary which updates the map accordingly
- dropwdown selection for the # of jobs requiring JS which updates the map accordingly
