const gallerys = [
    {title: "Generic Portfolio Site",
     description: "A generic portfolio site built in mobile first, contains 3 different view ports for various screen sizes",
     techUsed: "HTML, CSS"
    },

    {title: "Registration Form",
    description: "Registration form that operates in two view port screen sizes, no backend to capture form submission",
    techUsed: "HTML, CSS"
   },

   {title: "Utilizing SASS",
   description: "Mobile responsive site using CSS preprocessor SASS, articulating flex box capabilities",
   techUsed: "HTML, CSS, SASS"
  },

  {title: "Image Lookup Gallery",
  description: "Search for photo meta data, BaguetteBox for full views. Site content through JS & arrays",
  techUsed: "HTML, CSS, JavaScript"
 },

 {title: "Word Guessing Game",
 description: "Word guessing game, using JavaScript for DOM manipulation",
 techUsed: "HTML, CSS, JavaScript"
},

{title: "Social Traffic App",
description: "Traffic charting app, includes chart.JS library and all vanilla CSS styling (Mobile Version)",
techUsed: "HTML, CSS, JavaScript"
}

]

function updatePortfolio() {
    let portf = '';
    for (i = 0; i < gallerys.length; i++ ) {
        let gallery = gallerys[i];
        portf += `
        <div class="card">
        <h3>${gallery.title}</h3>
        <img src="images/port_proj_${i+2}.jpg" alt="Thumbnail for project ${gallery.title}" class="prop-img">
        <p><strong>Description:</strong> ${gallery.description}</p>
        <p>Technologies used: ${gallery.techUsed}</p>
        <a class="btn" href="./portfolio/prj${i+2}/index.html" target="_blank" rel="noreferrer">View Project</a>        
        </div>    
        `;
    }
    portf = `<h2 class="title-padding"><a id="Portfolio">Portfolio</a></h2>` + `<div class="grid">` + portf + `</div>`;
    return document.querySelector('main').innerHTML = portf;
}

updatePortfolio();
