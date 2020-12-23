const urlSocial = [
    "https://github.com/michaelvautour",
    "https://twitter.com/mikevautourdev",
    "https://ca.linkedin.com/in/michael-vautour-26832871"
]

const imgSocial = [
    "github.svg",
    "Twitter_Social_Icon_Circle_Color.svg",
    "linkedin.svg"
]

const logo_Social = [
    "Github Logo",
    "Twitter Logo",
    "LinkedIn Logo"
]


function updateSocial() {
    let soci = '';
    for (i = 0; i < urlSocial.length; i++ ) {
        soci += `
        <a href=${urlSocial[i]} target="_blank" rel="noreferrer"><img src="images/${imgSocial[i]}" class="img-social" alt="${logo_Social[i]}"></a>
        `
    }
    soci += "<p>&copy; Michael Vautour, 2020</p>"
    return document.querySelector('footer').innerHTML = soci;
}

updateSocial();