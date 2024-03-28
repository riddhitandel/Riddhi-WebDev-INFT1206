const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilesnames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAltText = {
    'pic1.jpg': 'Description for pic1',
    'pic2.jpg': 'Description for pic2',
    'pic3.jpg': 'Description for pic3',
    'pic4.jpg': 'Description for pic4',
    'pic5.jpg': 'Description for pic5'
  };


/* Looping through images */
imageFilesnames.forEach(fileName => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${fileName}` );
    newImage.setAttribute('alt', imageAltText[fileName]);
    // append the image to thumb-bar
    thumbBar.appendChild(newImage);
   
    // add click event listener to each thumbnail iimage 
    newImage.addEventListener('click',function(){
        displayedImage.src = this.src;
        displayedImage.alt = this.alt;
    });  
});

/* Wiring up the Darken/Lighten button */
// Add click event listener to the button
btn.addEventListener('click', function() {
    // Check the current class name of the button
    const currentClass = btn.getAttribute('class');

    // Toggle between dark and light classes
    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});
