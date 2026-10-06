/*
  ============================================================
  CONTEÚDO DO SITE — este é o ÚNICO ficheiro que precisa de editar.
  ============================================================
  - Cada texto tem uma versão em português (pt) e em inglês (en).
  - Para esconder um campo, deixe-o vazio: ""
  - Mantenha as aspas "" e as vírgulas no fim de cada linha.
  - Depois de gravar, o site atualiza em 1–2 minutos.
*/

const SITE = {
  // Endereço público do site (usado para gerar os códigos QR).
  url: "https://jaimeferreira2002.github.io/lisbon-city-villa/",

  nome: "Lisbon City Villa",
  logotipo: "", // ex.: "img/logo.png" — vazio mostra o nome em texto

  morada: "Travessa de Miguel Lúpi, 3 · 1200-726 Lisboa",
  mapa: "https://maps.google.com/?q=Lisbon+City+Villa,+Travessa+de+Miguel+L%C3%BApi+3,+Lisboa",

  // ---------- QUARTOS ----------
  // "id" aparece no link (…/?quarto=suite). Use só letras minúsculas, números e hífens.
  quartos: [
    { id: "suite",         nome: { pt: "Suite",                 en: "Suite" },                 wifiRede: "LisbonCityVilla_Suite",   wifiPass: "ALTERAR-PASSWORD", nota: { pt: "", en: "" } },
    { id: "duplo",         nome: { pt: "Quarto Duplo",          en: "Double Room" },           wifiRede: "LisbonCityVilla_Duplo",   wifiPass: "ALTERAR-PASSWORD", nota: { pt: "", en: "" } },
    { id: "suite-t2",      nome: { pt: "Suite de Dois Quartos", en: "Two-Bedroom Suite" },     wifiRede: "LisbonCityVilla_SuiteT2", wifiPass: "ALTERAR-PASSWORD", nota: { pt: "", en: "" } },
    { id: "estudio",       nome: { pt: "Estúdio",               en: "Studio" },                wifiRede: "LisbonCityVilla_Estudio", wifiPass: "ALTERAR-PASSWORD", nota: { pt: "", en: "" } },
    { id: "suite-duplex",  nome: { pt: "Suite Duplex",          en: "Duplex Suite" },          wifiRede: "LisbonCityVilla_Duplex",  wifiPass: "ALTERAR-PASSWORD", nota: { pt: "", en: "" } },
  ],

  // ---------- CHECK-IN / CHECK-OUT ----------
  checkin:  { pt: "15h00 – 22h00", en: "3:00 pm – 10:00 pm" },
  checkout: { pt: "11h00 – 12h00", en: "11:00 am – 12:00 pm" },
  instrucoesCheckout: [
    { pt: "Deixe a chave no quarto e feche a porta ao sair.", en: "Leave the key in the room and close the door behind you." },
    { pt: "Desligue o ar condicionado, as luzes e a TV.",      en: "Switch off the air conditioning, lights and TV." },
    { pt: "Feche as janelas.",                                 en: "Close the windows." },
    { pt: "Coloque o lixo no caixote da cozinha.",              en: "Put any rubbish in the kitchen bin." },
  ],

  // ---------- CONTACTOS ----------
  contactos: {
    telefone: "+351 900 000 000", // ALTERAR — aparece como botão "Ligar"
    whatsapp: "351900000000",     // ALTERAR — só números, com indicativo, sem "+"
    email: "",
  },
  contactosUteis: [
    { nome: { pt: "Emergência (ambulância, bombeiros, polícia)", en: "Emergency (ambulance, fire, police)" }, numero: "112" },
    { nome: { pt: "SNS 24 — linha de saúde",                     en: "SNS 24 — health helpline" },           numero: "808 24 24 24" },
  ],

  // ---------- BOAS-VINDAS ----------
  boasVindas: {
    titulo: { pt: "Bem-vindo à Lapa", en: "Welcome to Lapa" },
    texto: {
      pt: "Esperamos que se sinta em casa e desfrute deste bairro tranquilo, elegante e cheio de charme. Para que todos tenham uma estadia agradável, agradecemos a sua colaboração com as regras abaixo.",
      en: "We hope you feel at home and enjoy this quiet, elegant and charming neighbourhood. So that everyone has a pleasant stay, we kindly ask you to follow the house rules below.",
    },
  },

  // ---------- REGRAS DA CASA ----------
  regras: [
    { titulo: { pt: "Silêncio", en: "Quiet hours" },
      texto:  { pt: "Não é permitido fazer barulho entre as 20h00 e as 08h00. Por favor, respeite o descanso dos vizinhos.",
                en: "No noise between 8:00 pm and 8:00 am. Please respect the neighbours' rest." } },
    { titulo: { pt: "Animais", en: "Pets" },
      texto:  { pt: "Não são permitidos animais no alojamento.", en: "Pets are not allowed." } },
    { titulo: { pt: "Jardim", en: "Garden" },
      texto:  { pt: "Não deite beatas para o jardim. Utilize um cinzeiro ou peça-nos um, teremos todo o gosto em disponibilizá-lo.",
                en: "Please don't throw cigarette butts in the garden. Use an ashtray, or ask us for one — we'll be happy to provide it." } },
  ],
  regrasNota: {
    pt: "Obrigado pela sua compreensão! Pequenos gestos ajudam-nos a cuidar da casa, do jardim e da boa relação com a vizinhança.",
    en: "Thank you for your understanding! Small gestures help us look after the house, the garden and our good relationship with the neighbours.",
  },

  // ---------- DESCOBRIR A ZONA ----------
  zonaIntro: {
    pt: "A Lapa fica entre a Estrela e Santos, combinando ruas residenciais, jardins, museus e acesso fácil ao centro histórico. Estas sugestões são um ponto de partida para explorar a pé ou de transporte público.",
    en: "Lapa sits between Estrela and Santos, mixing residential streets, gardens and museums with easy access to the historic centre. These suggestions are a starting point for exploring on foot or by public transport.",
  },
  locais: [
    { nome: "Jardim da Estrela",
      texto: { pt: "Jardim romântico, agradável para passear, descansar ou tomar um café. Em frente encontra-se a Basílica da Estrela.",
               en: "A romantic garden, lovely for a stroll, a rest or a coffee. The Estrela Basilica is right across the street." } },
    { nome: "Basílica da Estrela",
      texto: { pt: "Um dos monumentos mais marcantes da zona, junto ao Jardim da Estrela.",
               en: "One of the area's most striking monuments, next to the Estrela Garden." } },
    { nome: "Museu da Marioneta",
      texto: { pt: "Rua da Esperança, 146. Museu instalado no Convento das Bernardas, dedicado à história e às tradições da marioneta.",
               en: "Rua da Esperança, 146. Housed in the Bernardas Convent, dedicated to the history and traditions of puppetry." } },
    { nome: "Museu Nacional de Arte Antiga",
      texto: { pt: "Na Rua das Janelas Verdes, com coleções de pintura, escultura e artes decorativas.",
               en: "On Rua das Janelas Verdes, with collections of painting, sculpture and decorative arts." } },
    { nome: "Santos e zona ribeirinha", mapaQuery: "Santos, Lisboa",
      texto: { pt: "Caminhe em direção a Santos para encontrar cafés, lojas e a frente ribeirinha do Tejo.",
               en: "Walk towards Santos for cafés, shops and the Tagus riverfront." } },
    { nome: "Miradouro da Rocha do Conde de Óbidos",
      texto: { pt: "Uma opção próxima para apreciar a zona portuária e o Tejo.",
               en: "A nearby viewpoint over the port and the Tagus river." } },
  ],

  // ---------- TRANSPORTES ----------
  transportes: [
    { titulo: { pt: "Elétrico 25E", en: "Tram 25E" },
      texto:  { pt: "Atravessa a Lapa, com paragens em Santos-o-Velho, Rua de São João da Mata, Rua Garcia de Orta, Rua de São Domingos à Lapa, Rua de Sant’Ana à Lapa, Rua Buenos Aires e Estrela.",
                en: "Runs through Lapa, stopping at Santos-o-Velho, Rua de São João da Mata, Rua Garcia de Orta, Rua de São Domingos à Lapa, Rua de Sant’Ana à Lapa, Rua Buenos Aires and Estrela." } },
    { titulo: { pt: "Autocarros", en: "Buses" },
      texto:  { pt: "As linhas 713, 720, 738 e 773 servem a zona da Lapa. Consulte a CARRIS para o percurso e o tempo de espera em tempo real.",
                en: "Lines 713, 720, 738 and 773 serve the Lapa area. Check CARRIS for routes and real-time waiting times." } },
    { titulo: { pt: "Comboio", en: "Train" },
      texto:  { pt: "A estação de Santos permite ligação pela Linha de Cascais.",
                en: "Santos station connects to the Cascais line (beaches, Belém, Cascais)." } },
    { titulo: { pt: "Metro", en: "Metro" },
      texto:  { pt: "A Lapa não tem estação de metro no centro do bairro. Para trajetos mais diretos, combine caminhada, elétrico, autocarro, táxi ou TVDE.",
                en: "There is no metro station in the heart of Lapa. For quicker trips, combine walking, tram, bus, taxi or ride-hailing apps (Uber, Bolt)." } },
  ],
  transportesNota: {
    pt: "Bilhetes e horários podem sofrer alterações. Utilize as aplicações CARRISway, Citymapper ou Google Maps para planear o trajeto no próprio dia.",
    en: "Fares and timetables may change. Use the CARRISway, Citymapper or Google Maps apps to plan your trip on the day.",
  },

  // ---------- SERVIÇOS ÚTEIS ----------
  servicos: [
    { categoria: { pt: "Supermercados", en: "Supermarkets" }, itens: [
      { nome: "Pingo Doce Lapa", mapaQuery: "Pingo Doce, Rua de Sant'Ana à Lapa 56, Lisboa",
        texto: { pt: "Rua de Sant’Ana à Lapa, 56.", en: "Rua de Sant’Ana à Lapa, 56." } },
      { nome: { pt: "Outras opções", en: "Other options" }, mapaQuery: "supermercado perto de Travessa de Miguel Lúpi, Lisboa",
        texto: { pt: "Existem mercearias e supermercados na Estrela, em Santos e em Campo de Ourique.",
                 en: "There are grocery stores and supermarkets in Estrela, Santos and Campo de Ourique." } },
    ]},
    { categoria: { pt: "Lavandarias", en: "Laundry" }, itens: [
      { nome: "Self-Service Santana à Lapa", mapaQuery: "Lavandaria Rua de Sant'Ana à Lapa 158A, Lisboa",
        texto: { pt: "Rua de Sant’Ana à Lapa, 158A. Lavagem e secagem em autosserviço.",
                 en: "Rua de Sant’Ana à Lapa, 158A. Self-service washing and drying." } },
      { nome: "Speed Queen", mapaQuery: "Speed Queen, Avenida Infante Santo 68, Lisboa",
        texto: { pt: "Avenida Infante Santo, 68. Alternativa self-service próxima.",
                 en: "Avenida Infante Santo, 68. Another nearby self-service option." } },
    ]},
  ],

  // ---------- BARES, CAFÉS E RESTAURANTES ----------
  restaurantes: [
    { nome: "Clube de Jornalistas", morada: "Rua das Trinas, 129",
      texto: { pt: "Ambiente intimista; aconselha-se reserva.", en: "Intimate atmosphere; booking recommended." } },
    { nome: "Le Chat", morada: "Jardim 9 de Abril",
      texto: { pt: "Bar e restaurante com vista sobre o Tejo.", en: "Bar and restaurant overlooking the Tagus." } },
    { nome: "Come Prima", morada: "Rua do Olival, 258",
      texto: { pt: "Cozinha italiana; aconselha-se reserva.", en: "Italian cuisine; booking recommended." } },
    { nome: "Heim Café", morada: "Rua Santos-o-Velho, 2 e 4",
      texto: { pt: "Conhecido pelos pequenos-almoços e brunch.", en: "Known for breakfast and brunch." } },
    { nome: "Santos", morada: "Rua da Esperança",
      texto: { pt: "Vários cafés, bares e restaurantes a curta distância.", en: "Plenty of cafés, bars and restaurants a short walk away." } },
  ],
  restaurantesNota: {
    pt: "Horários e dias de encerramento podem mudar. Confirme antes de ir e reserve com antecedência quando possível.",
    en: "Opening hours and closing days may change. Check before you go and book ahead when possible.",
  },
};
