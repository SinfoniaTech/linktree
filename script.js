const MEMBERS = [
  {
    name: "Mariany Barbosa de Melo",
    photo: "assets/members/mariany.png",
    linkedinUrl: "https://www.linkedin.com/in/mariany-barbosa19"
  },
  {
    name: "Murilo Santini Chequer",
    photo: "assets/members/murilo.png",
    linkedinUrl: "https://www.linkedin.com/in/murilo-santini-chequer-1a433339b"
  },
  {
    name: "Nuria Libertad Flores Espinoza",
    photo: "assets/members/nuria.png",
    linkedinUrl: "https://www.linkedin.com/in/nuria-libertad-979509282/"
  },
  {
    name: "Pedro Paulo Dutra",
    photo: "assets/members/pedro.png",
    linkedinUrl: "https://www.linkedin.com/in/pedropaulodutra/"
  },
  {
    name: "Eduardo Gotardi de Oliveira",
    photo: "assets/members/eduardo.png",
    linkedinUrl: "https://www.linkedin.com/in/eduardo-gotardi"
  }
];

/* Glifo "in" do LinkedIn, em branco, ocupando quase todo o quadrado */
const LINKEDIN_GLYPH =
  '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>' +
  '</svg>';

/** Iniciais a partir do nome (ex.: "Nome do Membro 1" -> "NM") */
function initialsFrom(name) {
  const words = String(name || "").trim().split(/\s+/).filter(function (word) {
    return word.length > 2 && !/^(de|da|do|dos|das|e)$/i.test(word);
  });
  const initials = (words[0] ? words[0][0] : "") + (words[1] ? words[1][0] : "");
  return (initials || String(name || "?")[0] || "?").toUpperCase();
}

/** "https://www.linkedin.com/in/usuario-1" -> "linkedin.com/in/usuario-1" */
function displayLinkedinUrl(url) {
  return String(url || "").replace(/^https?:\/\//i, "").replace(/^www\./i, "");
}

/** Monta uma linha de link (foto + faixa branca + icone do LinkedIn + nome) */
function createMemberRow(member) {
  const link = document.createElement("a");
  link.className = "link-row";
  link.href = member.linkedinUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", "Perfil de " + member.name + " no LinkedIn");

  /* 1 - Foto do membro */
  const photo = document.createElement("span");
  photo.className = "member-photo";

  const image = new Image();
  image.alt = "";
  image.decoding = "async";
  image.onload = function () { photo.appendChild(image); };
  image.onerror = function () {
    photo.classList.add("member-photo--initials");
    photo.textContent = initialsFrom(member.name);
  };
  image.src = member.photo;

  /* 2 - Faixa branca com a URL por extenso */
  const band = document.createElement("span");
  band.className = "link-band";
  band.textContent = displayLinkedinUrl(member.linkedinUrl);
  band.title = member.linkedinUrl;

  /* 3 - Icone do LinkedIn */
  const icon = document.createElement("span");
  icon.className = "li-icon";
  icon.innerHTML = LINKEDIN_GLYPH;

  /* Nome sobreposto */
  const name = document.createElement("span");
  name.className = "member-name";
  name.textContent = member.name;

  link.append(photo, band, icon, name);
  return link;
}

/** Renderiza a lista de membros */
function render() {
  const list = document.getElementById("member-list");
  if (!list) { return; }

  const fragment = document.createDocumentFragment();
  MEMBERS.forEach(function (member) {
    fragment.appendChild(createMemberRow(member));
  });
  list.appendChild(fragment);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", render);
} else {
  render();
}
