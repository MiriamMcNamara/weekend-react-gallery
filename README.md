# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

BASE MODE took me about 3 1/2 hours. 4 hours including adding comments. This is what it looked like when I was finished: 

![Basemode Screenshot](/images/basemode-screenshot.jpg)

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

- add a hook, function, onClick, and condition in the GalleryItem component so that the image and desription will swap out when you click on it (conditional rendering)
- Display the number likes for each item and add a like button.

    - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`. The PUT request needs to be linked to the props.item.id. It looks like this:
    ```
    console.log( 'in updateLikes' );
        axios.put( `/gallery/like/${props.image.id}` ).then( (response)=>{
            console.log( response.data );
          } ).catch( (err)=>{
            alert( 'nope' );
            console.log( err );
          })
    ```
    (I'm not sure why we are suddenly using bling again?)
    - Update the gallery each time a like button is clicked, by calling the getImages function in the galleryItem component? To do this, pass the getImages function down from App.js all the way to the GalleryItem.

STRETCH GOALS

***remember to branch and merge for each stretch goal!***

Phase 3: Add the database
- create a new branch to work in, and a branch to push to
 - create a database in Postico that includes id, path, description, and likes, and move the data from the server into the database.
- npm install pg
- create a database.sql in the project so that it can be recreated.
- create a pool module in the server, make sure it's using the right database,export it and require it in the router.js
- in the routes file, edit the GET and PUT requests so that they pull from and push to the database.

Phase 4: Adding an addImage component
- create a new branch to work in, and a branch to push to
- create a new component using _template and import and mount on the DOM

- Add a form (new **component**) that allows a user to POST a new gallery item
  - Client side form (use absolute URL for images)
  - Server side route for posting an image
  - some info on React forms here: https://reactjs.org/docs/forms.html


  const addPicture = () => {
    axios({
      method: 'POST',
      url: '/gallery',
      data: picSelect
    }).then( (response)=>{
      props.get()
    }).catch((err)=>{
       alert('PUT Failed');
       console.log(err);
    })
  }