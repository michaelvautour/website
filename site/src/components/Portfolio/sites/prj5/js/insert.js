  const xhrGalleries = new XMLHttpRequest();
  xhrGalleries.onreadystatechange = function () {
      if(this.readyState === 4) {
          let galleries = JSON.parse(xhrGalleries.responseText);
          createGallery(galleries);
      }
  }
  
  xhrGalleries.open('GET', 'json/imgdata.json');
  xhrGalleries.send();

  // Creates a random border color around images (festive look!)
  function rgbColor() {
    return Math.floor(Math.random() * 256);
  }

  // creates photo gallery image layout with appropriate tags
  function createGallery(galleries) {
    let items = '';
    for (let i = 0; i < galleries.length; i++) {
      // used ${} for image names, however removed 0 from image names as I couldn't figure out how to pull
      // those in without creating additional arrays for image lists, but wanted to minimize JS arrays.
      // will look out for topics in future to see if a method could handle? (failed with if/else statements)
      items += `
        <a href="images/${i+1}.jpg" data-caption="${galleries[i].name}"</a>
        <img src="images/thumbnails/${i+1}.jpg" alt="${galleries[i].imgalt}" style="border: 5px dotted rgb(${rgbColor()}, ${rgbColor()}, ${rgbColor()})">
      `;
    }
    return document.querySelector('div').innerHTML = items;
  }
  