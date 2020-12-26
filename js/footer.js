const social = [
    {url: "https://github.com/michaelvautour",
    img: "github.svg",
    logoAlt: "Github Logo"},

    {url: "https://twitter.com/mikevautourdev",
    img: "Twitter_Social_Icon_Circle_Color.svg",
    logoAlt: "Twitter Logo"},

    {url: "https://ca.linkedin.com/in/michael-vautour-26832871",
    img: "linkedin.svg",
    logoAlt: "LinkedIn Logo"}
];

function updateSocial() {
    let soci = '';
    for (i = 0; i < social.length; i++ ) {
        soci += `
        <a href=${social[i].url} target="_blank" rel="noreferrer"><img src="images/${social[i].img}" class="img-social" alt="${social[i].logoAlt}"></a>
        `
    }
    soci += "<p>&copy; Michael Vautour, 2020</p>"
    return document.querySelector('footer').innerHTML = soci;
}

updateSocial();
