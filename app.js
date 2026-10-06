// Monta a página a partir de conteudo.js. Não é preciso editar este ficheiro.
(function () {
  const S = SITE;

  const UI = {
    pt: {
      guia: "Guia do hóspede", quarto: "Quarto", escolha: "Escolha o seu quarto",
      wifi: "Wi‑Fi", rede: "Rede", pass: "Palavra-passe", copiar: "Copiar", copiado: "Copiado ✓",
      checkin: "Check-in", checkout: "Check-out", instrucoes: "Antes de sair",
      regras: "Regras da casa", zona: "Descobrir a zona", transportes: "Transportes",
      servicos: "Serviços úteis", comer: "Bares, cafés e restaurantes",
      contactos: "Contactos", uteis: "Números úteis", ajuda: "Precisa de ajuda durante a estadia?",
      ajudaTxt: "Contacte-nos. Teremos todo o gosto em ajudar com orientações, um cinzeiro ou recomendações adicionais.",
      ligar: "Ligar", mapa: "Ver no mapa", morada: "Morada", nav: ["Wi‑Fi", "Regras", "Zona", "Transportes", "Serviços", "Comer", "Contactos"],
    },
    en: {
      guia: "Guest guide", quarto: "Room", escolha: "Choose your room",
      wifi: "Wi‑Fi", rede: "Network", pass: "Password", copiar: "Copy", copiado: "Copied ✓",
      checkin: "Check-in", checkout: "Check-out", instrucoes: "Before you leave",
      regras: "House rules", zona: "Explore the area", transportes: "Getting around",
      servicos: "Useful services", comer: "Bars, cafés & restaurants",
      contactos: "Contacts", uteis: "Useful numbers", ajuda: "Need help during your stay?",
      ajudaTxt: "Get in touch — we're happy to help with directions, an ashtray or more recommendations.",
      ligar: "Call", mapa: "View on map", morada: "Address", nav: ["Wi‑Fi", "Rules", "Area", "Transport", "Services", "Eat", "Contacts"],
    },
  };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  let lang = store.get("lang") || ((navigator.language || "en").toLowerCase().startsWith("pt") ? "pt" : "en");
  const params = new URLSearchParams(location.search);
  const quarto = S.quartos.find((q) => q.id === params.get("quarto"));

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const t = (v) => esc(v && typeof v === "object" ? v[lang] ?? v.pt : v);
  const has = (v) => (v && typeof v === "object" ? !!(v[lang] || v.pt) : !!v);
  const mapsUrl = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  const tel = (n) => "tel:" + String(n).replace(/[^\d+]/g, "");
  const pin = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>';

  function section(id, title, body) {
    return `<section id="${id}" class="sec"><h2>${title}</h2>${body}</section>`;
  }

  function render() {
    const u = UI[lang];
    document.documentElement.lang = lang;
    document.title = `${quarto ? t(quarto.nome) + " · " : ""}${S.nome} · ${u.guia}`;

    const logo = S.logotipo
      ? `<img class="logo" src="${esc(S.logotipo)}" alt="${esc(S.nome)}">`
      : `<span class="wordmark">${esc(S.nome)}</span>`;

    const header = `
      <header class="hero">
        <div class="hero-top">
          ${logo}
          <button class="lang" type="button" aria-label="Language">${lang === "pt" ? "EN" : "PT"}</button>
        </div>
        <p class="eyebrow">${u.guia}${quarto ? " · " + t(quarto.nome) : ""}</p>
        <h1>${t(S.boasVindas.titulo)}</h1>
        <p class="lead">${t(S.boasVindas.texto)}</p>
      </header>`;

    const nav = `<nav class="chips">${["wifi", "regras", "zona", "transportes", "servicos", "comer", "contactos"]
      .map((id, i) => `<a href="#${id}">${u.nav[i]}</a>`).join("")}</nav>`;

    // Wi-Fi + horários
    let wifi;
    if (quarto) {
      wifi = `
        <div class="card wifi">
          <div class="row"><span class="lbl">${u.rede}</span><strong>${esc(quarto.wifiRede)}</strong></div>
          <div class="row"><span class="lbl">${u.pass}</span><strong class="mono">${esc(quarto.wifiPass)}</strong>
            <button class="copy" type="button" data-copy="${esc(quarto.wifiPass)}">${u.copiar}</button></div>
          ${has(quarto.nota) ? `<p class="note">${t(quarto.nota)}</p>` : ""}
        </div>`;
    } else {
      wifi = `<div class="card"><p class="lbl">${u.escolha}</p><div class="rooms">${S.quartos
        .map((q) => `<a href="?quarto=${encodeURIComponent(q.id)}">${t(q.nome)}</a>`).join("")}</div></div>`;
    }
    const horas = `
      <div class="times">
        <div class="card time"><span class="lbl">${u.checkin}</span><strong>${t(S.checkin)}</strong></div>
        <div class="card time"><span class="lbl">${u.checkout}</span><strong>${t(S.checkout)}</strong></div>
      </div>
      ${S.instrucoesCheckout.length ? `<div class="card"><h3>${u.instrucoes}</h3><ul class="checks">${S.instrucoesCheckout.map((i) => `<li>${t(i)}</li>`).join("")}</ul></div>` : ""}`;

    const regras = `<ol class="rules">${S.regras.map((r) => `<li><h3>${t(r.titulo)}</h3><p>${t(r.texto)}</p></li>`).join("")}</ol>
      <p class="thanks">${t(S.regrasNota)}</p>`;

    const place = (p) => `
      <a class="place" href="${mapsUrl(p.mapaQuery || (typeof p.nome === "string" ? p.nome + ", Lisboa" : p.nome.pt))}" target="_blank" rel="noopener">
        <div><h3>${t(p.nome)}</h3>${p.morada ? `<p class="addr">${esc(p.morada)}</p>` : ""}<p>${t(p.texto)}</p></div>${pin}</a>`;

    const zona = `<p class="intro">${t(S.zonaIntro)}</p><div class="list">${S.locais.map(place).join("")}</div>`;

    const transp = `<div class="list">${S.transportes.map((x) => `<div class="item"><h3>${t(x.titulo)}</h3><p>${t(x.texto)}</p></div>`).join("")}</div>
      <p class="tip">${t(S.transportesNota)}</p>`;

    const serv = S.servicos.map((c) => `<h3 class="cat">${t(c.categoria)}</h3><div class="list">${c.itens.map(place).join("")}</div>`).join("");

    const comer = `<div class="list">${S.restaurantes.map((r) => place({ nome: r.nome, morada: r.morada, texto: r.texto,
      mapaQuery: `${r.nome}, ${r.morada}, Lisboa` })).join("")}</div>
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
        ${section("wifi", quarto ? `${u.wifi} · ${t(quarto.nome)}` : u.wifi, wifi + horas)}
        ${section("regras", u.regras, regras)}
        ${section("zona", u.zona, zona)}
        ${section("transportes", u.transportes, transp)}
        ${section("servicos", u.servicos, serv)}
        ${section("comer", u.comer, comer)}
        ${section("contactos", u.contactos, contactos)}
      </main>
      <footer>${esc(S.nome)} · ${esc(S.morada)}</footer>`;

    document.querySelector(".lang").onclick = () => { lang = lang === "pt" ? "en" : "pt"; store.set("lang", lang); render(); };
    document.querySelectorAll(".copy").forEach((b) => (b.onclick = async () => {
      try { await navigator.clipboard.writeText(b.dataset.copy); }
      catch (e) { const r = document.createRange(); r.selectNodeContents(b.previousElementSibling); getSelection().removeAllRanges(); getSelection().addRange(r); document.execCommand("copy"); }
      b.textContent = u.copiado; setTimeout(() => (b.textContent = u.copiar), 1800);
    }));
  }

  render();
  if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
})();
