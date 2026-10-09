# Lisbon City Villa — Guia do hóspede

Um site simples para os hóspedes. Um único código QR (igual em todos os quartos) abre uma página com o Wi‑Fi, check-in/check-out, regras da casa, dicas da zona e contactos. Está em português, inglês, francês e espanhol (o site escolhe a língua do telemóvel; há botões PT/EN/FR/ES no topo).

- Página do guia: `…/`
- Cartões QR para imprimir: `…/qr.html` (escolha o número de cópias)

## Como editar (para o dia a dia)

**Só precisa de mexer num ficheiro: `conteudo.js`.**

1. No GitHub, abra o repositório → `conteudo.js` → ícone do lápis (Edit).
2. Altere o texto entre aspas `"…"`. Não apague as aspas nem as vírgulas.
   Cada texto tem as versões `pt`, `en`, `fr` e `es`. Se só escrever em português, as outras línguas mostram o português.
3. Carregue em **Commit changes**. O site atualiza em 1–2 minutos.

Exemplos:
- **Mudar a password do Wi‑Fi:** altere `wifiPass`.
- **Esconder um campo:** deixe-o vazio, `""`.
- **Acrescentar um restaurante:** copie uma linha `{ nome: …, morada: …, texto: … },` e altere-a.
- **Pôr o logótipo:** carregue a imagem para a pasta `img/` e escreva `logotipo: "img/logo.png"`.

Os códigos QR **não mudam** quando edita o conteúdo. Só é preciso reimprimir se mudar o endereço do site.

## Ainda por preencher

- [ ] Logótipo (opcional)

## Publicar (grátis, GitHub Pages)

1. Crie um repositório no GitHub e envie estes ficheiros.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / root → Save.
3. O site fica em `https://<utilizador>.github.io/<repositório>/`. Copie esse endereço para `url` em `conteudo.js`.
4. Abra `…/qr.html` e imprima os cartões.

Ver localmente: `python3 -m http.server` nesta pasta e abrir http://localhost:8000/
