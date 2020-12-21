window.addEventListener('load', function() {
    console.log('Am I online?')
    baguetteBox.run('.gallery');
  });

const search = new Filter('search', 'data-caption');

// EXTRA if I can update inside the img tags...
// let html = '';

// function rgbColor() {
//     return Math.floor(Math.random() * 256);
// }

// for ( let i = 1; i <=10; i++) {
//     html += `style="border: 5px dotted rgb(${rgbColor()})"`
// }

// document.getElementById('brdr').innerHTML = html;