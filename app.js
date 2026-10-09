// Monta a página a partir de conteudo.js. Não é preciso editar este ficheiro.
(function () {
  const S = SITE;
  const LANGS = ["pt", "en", "fr", "es"];

  const UI = {
    pt: {
      guia: "Guia do hóspede",
      wifi: "Wi‑Fi", rede: "Rede", pass: "Palavra-passe", copiar: "Copiar", copiado: "Copiado ✓",
      checkin: "Check-in", checkout: "Check-out", instrucoes: "Antes de sair",
      regras: "Regras da casa", zona: "Descobrir a zona", transportes: "Transportes",
      servicos: "Serviços úteis", comer: "Bares, cafés e restaurantes",
      contactos: "Contactos", uteis: "Números úteis", ajuda: "Precisa de ajuda durante a estadia?",
      ajudaTxt: "Contacte-nos. Teremos todo o gosto em ajudar com orientações, um cinzeiro ou recomendações adicionais.",
      ligar: "Ligar", mapa: "Ver no mapa", morada: "Morada",
      nav: ["Wi‑Fi", "Regras", "Zona", "Transportes", "Serviços", "Comer", "Contactos"],
    },
    en: {
      guia: "Guest guide",
      wifi: "Wi‑Fi", rede: "Network", pass: "Password", copiar: "Copy", copiado: "Copied ✓",
      checkin: "Check-in", checkout: "Check-out", instrucoes: "Before you leave",
      regras: "House rules", zona: "Explore the area", transportes: "Getting around",
      servicos: "Useful services", comer: "Bars, cafés & restaurants",
      contactos: "Contacts", uteis: "Useful numbers", ajuda: "Need help during your stay?",
      ajudaTxt: "Get in touch — we're happy to help with directions, an ashtray or more recommendations.",
      ligar: "Call", mapa: "View on map", morada: "Address",
      nav: ["Wi‑Fi", "Rules", "Area", "Transport", "Services", "Eat", "Contacts"],
    },
    fr: {
      guia: "Guide du voyageur",
      wifi: "Wi‑Fi", rede: "Réseau", pass: "Mot de passe", copiar: "Copier", copiado: "Copié ✓",
      checkin: "Arrivée", checkout: "Départ", instrucoes: "Avant de partir",
      regras: "Règles de la maison", zona: "Découvrir le quartier", transportes: "Transports",
      servicos: "Services utiles", comer: "Bars, cafés et restaurants",
      contactos: "Contacts", uteis: "Numéros utiles", ajuda: "Besoin d'aide pendant votre séjour ?",
      ajudaTxt: "Contactez-nous. Nous serons ravis de vous aider : indications, cendrier ou autres recommandations.",
      ligar: "Appeler", mapa: "Voir sur la carte", morada: "Adresse",
      nav: ["Wi‑Fi", "Règles", "Quartier", "Transports", "Services", "Manger", "Contacts"],
    },
    es: {
      guia: "Guía del huésped",
      wifi: "Wi‑Fi", rede: "Red", pass: "Contraseña", copiar: "Copiar", copiado: "Copiado ✓",
      checkin: "Check-in", checkout: "Check-out", instrucoes: "Antes de salir",
      regras: "Normas de la casa", zona: "Descubrir la zona", transportes: "Transporte",
      servicos: "Servicios útiles", comer: "Bares, cafés y restaurantes",
      contactos: "Contacto", uteis: "Números útiles", ajuda: "¿Necesita ayuda durante su estancia?",
      ajudaTxt: "Contáctenos. Estaremos encantados de ayudarle con indicaciones, un cenicero o más recomendaciones.",
      ligar: "Llamar", mapa: "Ver en el mapa", morada: "Dirección",
      nav: ["Wi‑Fi", "Normas", "Zona", "Transporte", "Servicios", "Comer", "Contacto"],
    },
  };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  function detectLang() {
    const saved = store.get("lang");
    if (LANGS.includes(saved)) return saved;
    for (const l of navigator.languages || [navigator.language || "en"]) {
      const code = l.slice(0, 2).toLowerCase();
      if (LANGS.includes(code)) return code;
    }
    return "en";
  }

  let lang = detectLang();

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // Texto na língua atual; se faltar a tradução, usa inglês e depois português.
  const tr = (v) => (v && typeof v === "object" ? v[lang] || v.en || v.pt || "" : v || "");
  const t = (v) => esc(tr(v));
  const mapsUrl = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  const tel = (n) => "tel:" + String(n).replace(/[^\d+]/g, "");
  const pin = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>';

  function section(id, title, body) {
    return `<section id="${id}" class="sec"><h2>${title}</h2>${body}</section>`;
  }

  function place(p) {
    const query = p.mapaQuery || `${tr(p.nome)}${p.morada ? ", " + p.morada : ""}, Lisboa`;
    return `
      <a class="place" href="${esc(p.mapaUrl || mapsUrl(query))}" target="_blank" rel="noopener">
        <div><h3>${t(p.nome)}</h3>${p.morada ? `<p class="addr">${esc(p.morada)}</p>` : ""}${tr(p.texto) ? `<p>${t(p.texto)}</p>` : ""}</div>${pin}</a>`;
  }

  function render() {
    const u = UI[lang];
    document.documentElement.lang = lang;
    document.title = `${S.nome} · ${u.guia}`;

    const logo = S.logotipo
      ? `<img class="logo" src="${esc(S.logotipo)}" alt="${esc(S.nome)}">`
      : `<span class="wordmark">${esc(S.nome)}</span>`;

    const langs = `<div class="langs" role="group" aria-label="Language">${LANGS
      .map((l) => `<button type="button" data-lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join("")}</div>`;

    const header = `
      <header class="hero">
        <div class="hero-top">${logo}${langs}</div>
        <div class="hero-body">
          <p class="eyebrow">${u.guia}</p>
          <h1>${t(S.boasVindas.titulo)}</h1>
          <p class="lead">${t(S.boasVindas.texto)}</p>
        </div>
      </header>`;

    const nav = `<nav class="chips">${["wifi", "regras", "zona", "transportes", "servicos", "comer", "contactos"]
      .map((id, i) => `<a href="#${id}">${u.nav[i]}</a>`).join("")}</nav>`;

    const wifi = `
      <div class="card wifi">
        ${S.wifiRede ? `<div class="row"><span class="lbl">${u.rede}</span><strong>${esc(S.wifiRede)}</strong></div>` : ""}
        <div class="row"><span class="lbl">${u.pass}</span><strong class="mono">${esc(S.wifiPass)}</strong>
          <button class="copy" type="button" data-copy="${esc(S.wifiPass)}">${u.copiar}</button></div>
      </div>`;
    const horas = `
      <div class="times">
        <div class="card time"><span class="lbl">${u.checkin}</span><strong>${t(S.checkin)}</strong></div>
        <div class="card time"><span class="lbl">${u.checkout}</span><strong>${t(S.checkout)}</strong></div>
      </div>
      ${S.instrucoesCheckout.length ? `<div class="card"><h3>${u.instrucoes}</h3><ul class="checks">${S.instrucoesCheckout.map((i) => `<li>${t(i)}</li>`).join("")}</ul></div>` : ""}`;

    const regras = `<ol class="rules">${S.regras.map((r) => `<li><h3>${t(r.titulo)}</h3><p>${t(r.texto)}</p></li>`).join("")}</ol>
      <p class="thanks">${t(S.regrasNota)}</p>`;

    const zona = `<p class="intro">${t(S.zonaIntro)}</p><div class="list">${S.locais.map(place).join("")}</div>`;

    const transp = `<div class="list">${S.transportes.map((x) => `<div class="item"><h3>${t(x.titulo)}</h3><p>${t(x.texto)}</p></div>`).join("")}</div>
      <p class="tip">${t(S.transportesNota)}</p>`;

    const serv = S.servicos.map((c) => `<h3 class="cat">${t(c.categoria)}</h3><div class="list">${c.itens.map(place).join("")}</div>`).join("");

    const comer = `<div class="list">${S.restaurantes.map(place).join("")}</div>
      <p class="tip">${t(S.restaurantesNota)}</p>`;

    const c = S.contactos;
    const contactos = `
      <div class="card help">
        <h3>${u.ajuda}</h3><p>${u.ajudaTxt}</p>
        <div class="btns">
          ${c.whatsapp ? `<a class="btn wa" href="https://wa.me/${esc(c.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a>` : ""}
          ${c.telefone ? `<a class="btn" href="${tel(c.telefone)}">${u.ligar} ${esc(c.telefone)}</a>` : ""}
          ${c.email ? `<a class="btn" href="mailto:${esc(c.email)}">${esc(c.email)}</a>` : ""}
        </div>
      </div>
      <div class="card"><h3>${u.uteis}</h3>${S.contactosUteis.map((n) => `<a class="row num" href="${tel(n.numero)}"><span>${t(n.nome)}</span><strong>${esc(n.numero)}</strong></a>`).join("")}</div>
      <a class="card addr-card" href="${esc(S.mapa)}" target="_blank" rel="noopener"><span class="lbl">${u.morada}</span><strong>${esc(S.morada)}</strong><span class="link">${u.mapa} →</span></a>`;

    document.getElementById("app").innerHTML = `
      ${header}${nav}
      <main>
        ${section("wifi", u.wifi, wifi + horas)}
        ${section("regras", u.regras, regras)}
        ${section("zona", u.zona, zona)}
        ${section("transportes", u.transportes, transp)}
        ${section("servicos", u.servicos, serv)}
        ${section("comer", u.comer, comer)}
        ${section("contactos", u.contactos, contactos)}
      </main>
      <div class="tile-strip" aria-hidden="true"></div>
      <footer>${esc(S.nome)} · ${esc(S.morada)}</footer>`;

    document.querySelectorAll("[data-lang]").forEach((b) => (b.onclick = () => {
      lang = b.dataset.lang; store.set("lang", lang); render();
    }));
    document.querySelectorAll(".copy").forEach((b) => (b.onclick = async () => {
      try { await navigator.clipboard.writeText(b.dataset.copy); }
      catch (e) { const r = document.createRange(); r.selectNodeContents(b.previousElementSibling); getSelection().removeAllRanges(); getSelection().addRange(r); document.execCommand("copy"); }
      b.textContent = u.copiado; setTimeout(() => (b.textContent = u.copiar), 1800);
    }));
  }

  render();
  if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
})();
