const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if(xhr.readyState === 4) {
    let gallerys = JSON.parse(xhr.responseText)
    updatePortfolio(gallerys)
	}
};

xhr.open('GET', 'json/portfolio.json');
xhr.send();

function updatePortfolio(gallerys) {
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
