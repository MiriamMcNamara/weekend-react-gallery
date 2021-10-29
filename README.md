# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

Phase 1: Get everything mounted and communicating properly
===

- put six images into the images folder, and update the gallery.router.js to create an object for each image within a gallery array
- create a _template folder and _template.jsx to use when creating components
- create a GalleryList component and a GalleryItem component
- import and mount the components and test them out in the browser
- import axios and useState and create a function that gets the images from the server, stores them in App.js and passes them to the GalleryList via props
- import useEffect and use it to get the images on page load
- send the images as props to the GalleryList, map through the array to create a separate GalleryItem for each object by mounting and sending props separately for each one
- in GalleryItem, display the image, description and likes and test that everything is communicating properly

Phase 2: Add the details

- Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
    - Display the number likes for each item and include a like button.
    - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
    - Update the gallery each time a like button is clicked.