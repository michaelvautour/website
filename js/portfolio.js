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
 }
]

function updatePortfolio() {
    let portf = '';
    for (i = 0; i < gallerys.length; i++ ) {
        let gallery = gallerys[i];
        portf += `
        <div class="card">
        <h3>${gallery.title}</h3>
        <a href="./portfolio/prj${i+2}/index.html" target="_blank" rel="noreferrer"><img src="images/port_proj_${i+2}.jpg" alt="Thumbnail for project ${gallery.title}" class="prop-img"></a>
        <p><strong>Description:</strong> ${gallery.description}</p>
        <p>Technologies used: ${gallery.techUsed}</p>
        <a class="btn" href="./portfolio/prj${i+2}/index.html" target="_blank" >View Project</a>        
        </div>    
        `;
    }
    portf = `<h2 class="title-padding"><a id="Portfolio">Portfolio</a></h2>` + `<div class="grid">` + portf + `</div>`;
    return document.querySelector('main').innerHTML = portf;
}

updatePortfolio();


//////////////////////////////////////////////////////////////////////////////////////////////////
///OLD WAY I HAD PORTFOLIO DISPLAYING, NEW WAY USING OBJECT LITERALS INSTEAD OF SEPARATE ARRAYS///
//////////////////////////////////////////////////////////////////////////////////////////////////

// const portfolio = [
//     "Generic Portfolio Site",
//     "Registration Form",
//     "Utilizing SASS",
//     "Image Lookup Gallery",
// ]

// const projPurpose = [
//     "A generic portfolio site built in mobile first, contains 3 different view ports for various screen sizes",
//     "Registration form that operates in two view port screen sizes, no backend to capture form submission",
//     "Mobile responsive site using CSS preprocessor SASS, articulating flex box capabilities",
//     "Search for photo meta data, BaguetteBox for full views. Site content through JS & arrays"
// ]

// const techUsed = [
//     "HTML, CSS",
//     "HTML, CSS",
//     "HTML, CSS, SASS",
//     "HTML, CSS, JavaScript"
// ]


// function updatePortfolio() {
//     let portf = '';
//     for (i = 0; i < portfolio.length; i++ ) {
//         portf += `
//         <div class="card">
//         <h3>${portfolio[i]}</h3>
//         <a href="./portfolio/prj${i+2}/index.html" target="_blank" rel="noreferrer"><img src="images/port_proj_${i+2}.jpg" alt="Thumbnail for project ${portfolio}" class="prop-img"></a>
//         <p><strong>Description:</strong> ${projPurpose[i]}</p>
//         <p>Technologies used: ${techUsed[i]}</p>
//         <a class="btn" href="./portfolio/prj${i+2}/index.html" target="_blank" >View Project</a>        
//         </div>    
//         `;
//     }
//     portf = `<h2 class="title-padding"><a id="Portfolio">Portfolio</a></h2>` + `<div class="grid">` + portf + `</div>`;
//     return document.querySelector('main').innerHTML = portf;
// }

// updatePortfolio();