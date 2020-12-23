const portfolio = [
    "Generic Portfolio Site",
    "Registration Form",
    "Utilizing SASS",
    "Image Lookup Gallery",
]

const projPurpose = [
    "A generic portfolio site built in mobile first, contains 3 different view ports for various screen sizes",
    "Registration form that operates in two view port screen sizes, no backend to capture form submission",
    "Mobile responsive site using CSS preprocessor SASS, articulating flex box capabilities",
    "Search for photo meta data, BaguetteBox for full views. Site content through JS & arrays"
]

const techUsed = [
    "HTML, CSS",
    "HTML, CSS",
    "HTML, CSS, SASS",
    "HTML, CSS, JavaScript"
]


function updatePortfolio() {
    let portf = '';
    for (i = 0; i < portfolio.length; i++ ) {
        portf += `
        <div class="card">
        <h3>${portfolio[i]}</h3>
        <a href="./portfolio/prj${i+2}/index.html" target="_blank" rel="noreferrer"><img src="images/port_proj_${i+2}.jpg" alt="Thumbnail for project ${portfolio}" class="prop-img"></a>
        <p><strong>Description:</strong> ${projPurpose[i]}</p>
        <p>Technologies used: ${techUsed[i]}</p>
        <a class="btn" href="./portfolio/prj${i+2}/index.html" target="_blank" >View Project</a>        
        </div>    
        `;
    }
    return document.querySelector('div').innerHTML = portf;
}

updatePortfolio();





