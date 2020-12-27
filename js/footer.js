const socials = [
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
    for (i = 0; i < socials.length; i++ ) {
        let social = socials[i];
        soci += `
        <a href=${social.url} target="_blank" rel="noreferrer"><img src="images/${social.img}" class="img-social" alt="${social.logoAlt}"></a>
        `
    }
    soci += "<p>&copy; Michael Vautour, 2020</p>"
    return document.querySelector('footer').innerHTML = soci;
}

updateSocial();