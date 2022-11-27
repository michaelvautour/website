const xhrSocial = new XMLHttpRequest();
xhrSocial.onreadystatechange = function () {
  if (this.readyState === 4) {
    let socials = JSON.parse(xhrSocial.responseText);
    updateSocial(socials);
  }
};

xhrSocial.open("GET", "json/footer.json");
xhrSocial.send();

function updateSocial(socials) {
  let soci = "";
  for (i = 0; i < socials.length; i++) {
    let social = socials[i];
    soci += `
        <a href=${social.url} target="_blank" rel="noreferrer"><img src="images/${social.img}" class="img-social" alt="${social.logoAlt}"></a>
        `;
  }
  soci += `<p id="Contact">&copy; Michael Vautour, 2022</p>`;
  return (document.querySelector("footer").innerHTML = soci);
}
