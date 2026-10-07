/*
  ============================================================
  CONTEÚDO DO SITE — este é o ÚNICO ficheiro que precisa de editar.
  ============================================================
  - Cada texto tem 4 versões: pt (português), en (inglês), fr (francês), es (espanhol).
  - Se faltar uma tradução, o site mostra a versão em inglês (ou português).
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

  // ---------- WI-FI (igual para todos os quartos) ----------
  wifiRede: "Lisbon City Villa",  // nome da rede (vazio = não aparece)
  wifiPass: "lovethisplace",

  // ---------- QUARTOS ----------
  // "id" aparece no link e no código QR (…/?quarto=pato). NÃO altere depois de imprimir os QR.
  // "icone" é opcional (um emoji).
  // Se um quarto tiver Wi-Fi diferente, acrescente-lhe wifiRede: "…", wifiPass: "…".
  // "codigoPorta" (opcional) mostra um código de porta na página do quarto.
  quartos: [
    { id: "pato",    nome: "Pato",    icone: "🦆", nota: "" },
    { id: "coelho",  nome: "Coelho",  icone: "🐇", nota: "" },
    { id: "cavalo",  nome: "Cavalo",  icone: "🐎", nota: "" },
    { id: "sapo",    nome: "Sapo",    icone: "🐸", nota: "" },
    { id: "caracol", nome: "Caracol", icone: "🐌", nota: "" },
  ],

  // ---------- CHECK-IN / CHECK-OUT ----------
  checkin:  { pt: "15h00 – 22h00", en: "3:00 pm – 10:00 pm", fr: "15h00 – 22h00", es: "15:00 – 22:00" },
  checkout: { pt: "11h00 – 12h00", en: "11:00 am – 12:00 pm", fr: "11h00 – 12h00", es: "11:00 – 12:00" },
  instrucoesCheckout: [
    { pt: "Por favor, deixe a chave na porta, do lado de dentro.",
      en: "Please leave the key in the door, on the inside.",
      fr: "Merci de laisser la clé sur la porte, côté intérieur.",
      es: "Por favor, deje la llave en la puerta, por la parte de dentro." },
  ],

  // ---------- CONTACTOS ----------
  contactos: {
    telefone: "+351 918 368 626", // aparece como botão "Ligar"
    whatsapp: "351918368626",     // só números, com indicativo, sem "+"
    email: "",
  },
  contactosUteis: [
    { nome: { pt: "Emergência (ambulância, bombeiros, polícia)", en: "Emergency (ambulance, fire, police)",
              fr: "Urgences (ambulance, pompiers, police)",      es: "Emergencias (ambulancia, bomberos, policía)" }, numero: "112" },
    { nome: { pt: "SNS 24 — linha de saúde", en: "SNS 24 — health helpline",
              fr: "SNS 24 — ligne santé",    es: "SNS 24 — línea de salud" }, numero: "808 24 24 24" },
  ],

  // ---------- BOAS-VINDAS ----------
  boasVindas: {
    titulo: { pt: "Bem-vindo à Lapa", en: "Welcome to Lapa", fr: "Bienvenue à Lapa", es: "Bienvenido a Lapa" },
    texto: {
      pt: "Esperamos que se sinta em casa e desfrute deste bairro tranquilo, elegante e cheio de charme. Para que todos tenham uma estadia agradável, agradecemos a sua colaboração com as regras abaixo.",
      en: "We hope you feel at home and enjoy this quiet, elegant and charming neighbourhood. So that everyone has a pleasant stay, we kindly ask you to follow the house rules below.",
      fr: "Nous espérons que vous vous sentirez comme chez vous et que vous profiterez de ce quartier calme, élégant et plein de charme. Pour que chacun passe un agréable séjour, merci de respecter les règles ci-dessous.",
      es: "Esperamos que se sienta como en casa y disfrute de este barrio tranquilo, elegante y lleno de encanto. Para que todos tengan una estancia agradable, le agradecemos que respete las normas de abajo.",
    },
  },

  // ---------- REGRAS DA CASA ----------
  regras: [
    { titulo: { pt: "Silêncio", en: "Quiet hours", fr: "Silence", es: "Silencio" },
      texto:  { pt: "Não é permitido fazer barulho entre as 20h00 e as 08h00. Por favor, respeite o descanso dos vizinhos.",
                en: "No noise between 8:00 pm and 8:00 am. Please respect the neighbours' rest.",
                fr: "Aucun bruit n'est autorisé entre 20h00 et 08h00. Merci de respecter le repos des voisins.",
                es: "No se permite hacer ruido entre las 20:00 y las 08:00. Por favor, respete el descanso de los vecinos." } },
    { titulo: { pt: "Animais", en: "Pets", fr: "Animaux", es: "Animales" },
      texto:  { pt: "Não são permitidos animais no alojamento.", en: "Pets are not allowed.",
                fr: "Les animaux ne sont pas acceptés.", es: "No se admiten animales en el alojamiento." } },
    { titulo: { pt: "Jardim", en: "Garden", fr: "Jardin", es: "Jardín" },
      texto:  { pt: "Não deite beatas para o jardim. Utilize um cinzeiro ou peça-nos um, teremos todo o gosto em disponibilizá-lo.",
                en: "Please don't throw cigarette butts in the garden. Use an ashtray, or ask us for one — we'll be happy to provide it.",
                fr: "Ne jetez pas de mégots dans le jardin. Utilisez un cendrier ou demandez-nous-en un, nous vous le fournirons avec plaisir.",
                es: "No tire colillas al jardín. Utilice un cenicero o pídanos uno, se lo daremos con mucho gusto." } },
    { titulo: { pt: "Ar condicionado", en: "Air conditioning", fr: "Climatisation", es: "Aire acondicionado" },
      texto:  { pt: "Desligue o ar condicionado quando abrir as janelas e sempre que sair do quarto.",
                en: "Please switch off the air conditioning when you open the windows and whenever you leave the room.",
                fr: "Merci d'éteindre la climatisation lorsque vous ouvrez les fenêtres et chaque fois que vous quittez la chambre.",
                es: "Apague el aire acondicionado cuando abra las ventanas y siempre que salga de la habitación." } },
  ],
  regrasNota: {
    pt: "Obrigado pela sua compreensão! Pequenos gestos ajudam-nos a cuidar da casa, do jardim e da boa relação com a vizinhança.",
    en: "Thank you for your understanding! Small gestures help us look after the house, the garden and our good relationship with the neighbours.",
    fr: "Merci de votre compréhension ! De petits gestes nous aident à prendre soin de la maison, du jardin et de nos bonnes relations avec le voisinage.",
    es: "¡Gracias por su comprensión! Pequeños gestos nos ayudan a cuidar la casa, el jardín y la buena relación con los vecinos.",
  },

  // ---------- DESCOBRIR A ZONA ----------
  zonaIntro: {
    pt: "A Lapa fica entre a Estrela e Santos, combinando ruas residenciais, jardins, museus e acesso fácil ao centro histórico. Estas sugestões são um ponto de partida para explorar a pé ou de transporte público.",
    en: "Lapa sits between Estrela and Santos, mixing residential streets, gardens and museums with easy access to the historic centre. These suggestions are a starting point for exploring on foot or by public transport.",
    fr: "Lapa se situe entre Estrela et Santos et associe rues résidentielles, jardins, musées et accès facile au centre historique. Ces suggestions sont un point de départ pour explorer à pied ou en transports en commun.",
    es: "Lapa está entre Estrela y Santos y combina calles residenciales, jardines, museos y fácil acceso al centro histórico. Estas sugerencias son un punto de partida para explorar a pie o en transporte público.",
  },
  locais: [
    { nome: "Jardim da Estrela",
      texto: { pt: "Jardim romântico, agradável para passear, descansar ou tomar um café. Em frente encontra-se a Basílica da Estrela.",
               en: "A romantic garden, lovely for a stroll, a rest or a coffee. The Estrela Basilica is right across the street.",
               fr: "Un jardin romantique, idéal pour se promener, se reposer ou prendre un café. La basilique d'Estrela se trouve juste en face.",
               es: "Un jardín romántico, agradable para pasear, descansar o tomar un café. Enfrente está la Basílica da Estrela." } },
    { nome: "Basílica da Estrela",
      texto: { pt: "Um dos monumentos mais marcantes da zona, junto ao Jardim da Estrela.",
               en: "One of the area's most striking monuments, next to the Estrela Garden.",
               fr: "L'un des monuments les plus marquants du quartier, à côté du jardin d'Estrela.",
               es: "Uno de los monumentos más destacados de la zona, junto al Jardim da Estrela." } },
    { nome: "Museu da Marioneta",
      texto: { pt: "Rua da Esperança, 146. Museu instalado no Convento das Bernardas, dedicado à história e às tradições da marioneta.",
               en: "Rua da Esperança, 146. Housed in the Bernardas Convent, dedicated to the history and traditions of puppetry.",
               fr: "Rua da Esperança, 146. Installé dans le couvent des Bernardas, consacré à l'histoire et aux traditions de la marionnette.",
               es: "Rua da Esperança, 146. Instalado en el Convento das Bernardas, dedicado a la historia y las tradiciones de la marioneta." } },
    { nome: "Museu Nacional de Arte Antiga",
      texto: { pt: "Na Rua das Janelas Verdes, com coleções de pintura, escultura e artes decorativas.",
               en: "On Rua das Janelas Verdes, with collections of painting, sculpture and decorative arts.",
               fr: "Rua das Janelas Verdes, avec des collections de peinture, de sculpture et d'arts décoratifs.",
               es: "En la Rua das Janelas Verdes, con colecciones de pintura, escultura y artes decorativas." } },
    { nome: "Santos", mapaQuery: "Santos, Lisboa",
      texto: { pt: "Caminhe em direção a Santos para encontrar cafés, lojas e a frente ribeirinha do Tejo.",
               en: "Walk towards Santos for cafés, shops and the Tagus riverfront.",
               fr: "Marchez vers Santos pour trouver cafés, boutiques et les quais du Tage.",
               es: "Camine hacia Santos para encontrar cafés, tiendas y la ribera del Tajo." } },
    { nome: "Miradouro da Rocha do Conde de Óbidos",
      texto: { pt: "Uma opção próxima para apreciar a zona portuária e o Tejo.",
               en: "A nearby viewpoint over the port and the Tagus river.",
               fr: "Un belvédère tout proche avec vue sur le port et le Tage.",
               es: "Un mirador cercano para contemplar el puerto y el Tajo." } },
  ],

  // ---------- TRANSPORTES ----------
  transportes: [
    { titulo: { pt: "Elétrico 25E", en: "Tram 25E", fr: "Tramway 25E", es: "Tranvía 25E" },
      texto:  { pt: "Atravessa a Lapa, com paragens em Santos-o-Velho, Rua de São João da Mata, Rua Garcia de Orta, Rua de São Domingos à Lapa, Rua de Sant’Ana à Lapa, Rua Buenos Aires e Estrela.",
                en: "Runs through Lapa, stopping at Santos-o-Velho, Rua de São João da Mata, Rua Garcia de Orta, Rua de São Domingos à Lapa, Rua de Sant’Ana à Lapa, Rua Buenos Aires and Estrela.",
                fr: "Traverse Lapa, avec des arrêts à Santos-o-Velho, Rua de São João da Mata, Rua Garcia de Orta, Rua de São Domingos à Lapa, Rua de Sant’Ana à Lapa, Rua Buenos Aires et Estrela.",
                es: "Atraviesa Lapa, con paradas en Santos-o-Velho, Rua de São João da Mata, Rua Garcia de Orta, Rua de São Domingos à Lapa, Rua de Sant’Ana à Lapa, Rua Buenos Aires y Estrela." } },
    { titulo: { pt: "Autocarros", en: "Buses", fr: "Bus", es: "Autobuses" },
      texto:  { pt: "As linhas 713, 720, 738 e 773 servem a zona da Lapa. Consulte a CARRIS para o percurso e o tempo de espera em tempo real.",
                en: "Lines 713, 720, 738 and 773 serve the Lapa area. Check CARRIS for routes and real-time waiting times.",
                fr: "Les lignes 713, 720, 738 et 773 desservent Lapa. Consultez CARRIS pour les itinéraires et les temps d'attente en temps réel.",
                es: "Las líneas 713, 720, 738 y 773 dan servicio a Lapa. Consulte CARRIS para recorridos y tiempos de espera en tiempo real." } },
    { titulo: { pt: "Comboio", en: "Train", fr: "Train", es: "Tren" },
      texto:  { pt: "A estação de Santos permite ligação pela Linha de Cascais.",
                en: "Santos station connects to the Cascais line (beaches, Belém, Cascais).",
                fr: "La gare de Santos est desservie par la ligne de Cascais (plages, Belém, Cascais).",
                es: "La estación de Santos conecta con la línea de Cascais (playas, Belém, Cascais)." } },
    { titulo: { pt: "Metro", en: "Metro", fr: "Métro", es: "Metro" },
      texto:  { pt: "A Lapa não tem estação de metro no centro do bairro. Para trajetos mais diretos, combine caminhada, elétrico, autocarro, táxi ou TVDE.",
                en: "There is no metro station in the heart of Lapa. For quicker trips, combine walking, tram, bus, taxi or ride-hailing apps (Uber, Bolt).",
                fr: "Il n'y a pas de station de métro au cœur de Lapa. Pour des trajets plus directs, combinez marche, tramway, bus, taxi ou VTC (Uber, Bolt).",
                es: "No hay estación de metro en el centro de Lapa. Para trayectos más directos, combine caminar, tranvía, autobús, taxi o VTC (Uber, Bolt)." } },
  ],
  transportesNota: {
    pt: "Bilhetes e horários podem sofrer alterações. Utilize as aplicações CARRISway, Citymapper ou Google Maps para planear o trajeto no próprio dia.",
    en: "Fares and timetables may change. Use the CARRISway, Citymapper or Google Maps apps to plan your trip on the day.",
    fr: "Les tarifs et horaires peuvent changer. Utilisez les applications CARRISway, Citymapper ou Google Maps pour planifier votre trajet le jour même.",
    es: "Los billetes y horarios pueden cambiar. Use las aplicaciones CARRISway, Citymapper o Google Maps para planificar el trayecto el mismo día.",
  },

  // ---------- SERVIÇOS ÚTEIS ----------
  servicos: [
    { categoria: { pt: "Supermercados", en: "Supermarkets", fr: "Supermarchés", es: "Supermercados" }, itens: [
      { nome: "Pingo Doce", morada: "Rua Jorge Alves, 8",
        mapaUrl: "https://www.google.com/maps/place/Pingo+Doce/@38.7101412,-9.1587797,880m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd193482cec10cb3:0x568b671c55289a4b!8m2!3d38.710137!4d-9.1562048",
        texto: { pt: "Mesmo ao lado de casa.", en: "Right next to the house.", fr: "Juste à côté de la maison.", es: "Justo al lado de casa." } },
      { nome: { pt: "Outras opções", en: "Other options", fr: "Autres options", es: "Otras opciones" },
        mapaQuery: "supermercado perto de Travessa de Miguel Lúpi, Lisboa",
        texto: { pt: "Existem mercearias e supermercados na Estrela, em Santos e em Campo de Ourique.",
                 en: "There are grocery stores and supermarkets in Estrela, Santos and Campo de Ourique.",
                 fr: "Vous trouverez épiceries et supermarchés à Estrela, Santos et Campo de Ourique.",
                 es: "Hay tiendas de alimentación y supermercados en Estrela, Santos y Campo de Ourique." } },
    ]},
    { categoria: { pt: "Lavandarias", en: "Laundry", fr: "Laveries", es: "Lavanderías" }, itens: [
      { nome: "Self-Service Santana à Lapa", mapaQuery: "Lavandaria Rua de Sant'Ana à Lapa 158A, Lisboa",
        texto: { pt: "Rua de Sant’Ana à Lapa, 158A. Lavagem e secagem em autosserviço.",
                 en: "Rua de Sant’Ana à Lapa, 158A. Self-service washing and drying.",
                 fr: "Rua de Sant’Ana à Lapa, 158A. Lavage et séchage en libre-service.",
                 es: "Rua de Sant’Ana à Lapa, 158A. Lavado y secado en autoservicio." } },
      { nome: "Speed Queen", mapaQuery: "Speed Queen, Avenida Infante Santo 68, Lisboa",
        texto: { pt: "Avenida Infante Santo, 68. Alternativa self-service próxima.",
                 en: "Avenida Infante Santo, 68. Another nearby self-service option.",
                 fr: "Avenida Infante Santo, 68. Autre laverie libre-service à proximité.",
                 es: "Avenida Infante Santo, 68. Otra opción de autoservicio cercana." } },
      { nome: "Arte d'Lavar Lapa", morada: "Rua da Bela Vista à Lapa, 22",
        mapaUrl: "https://www.google.com/maps/place/Arte+d'lavar+Lapa/@38.7126504,-9.1583853,220m/data=!3m1!1e3!4m6!3m5!1s0xd1933c6dd6b723f:0xfe67a67b6f16fc57!8m2!3d38.7126887!4d-9.1586042",
        texto: { pt: "Outra lavandaria na zona.", en: "Another laundry in the area.", fr: "Une autre laverie dans le quartier.", es: "Otra lavandería en la zona." } },
    ]},
  ],

  // ---------- BARES, CAFÉS E RESTAURANTES ----------
  restaurantes: [
    { nome: "Time Out Market Lisboa", morada: "Mercado da Ribeira, Cais do Sodré",
      mapaUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0xd193487595e6075:0x138fe14e4972dc92",
      texto: { pt: "Ali perto: mercado com dezenas de restaurantes e bancas de comida portuguesa e internacional.",
               en: "Close by: a food hall with dozens of Portuguese and international restaurants and stalls.",
               fr: "Tout près : une halle avec des dizaines de restaurants et stands de cuisine portugaise et internationale.",
               es: "Muy cerca: un mercado con decenas de restaurantes y puestos de comida portuguesa e internacional." } },
    { nome: "Clube de Jornalistas", morada: "Rua das Trinas, 129",
      texto: { pt: "Ambiente intimista; aconselha-se reserva.", en: "Intimate atmosphere; booking recommended.",
               fr: "Ambiance intimiste ; réservation conseillée.", es: "Ambiente íntimo; se recomienda reservar." } },
    { nome: "Le Chat", morada: "Jardim 9 de Abril",
      texto: { pt: "Bar e restaurante com vista sobre o Tejo.", en: "Bar and restaurant overlooking the Tagus.",
               fr: "Bar-restaurant avec vue sur le Tage.", es: "Bar y restaurante con vistas al Tajo." } },
    { nome: "Come Prima", morada: "Rua do Olival, 258",
      texto: { pt: "Cozinha italiana; aconselha-se reserva.", en: "Italian cuisine; booking recommended.",
               fr: "Cuisine italienne ; réservation conseillée.", es: "Cocina italiana; se recomienda reservar." } },
    { nome: "Heim Café", morada: "Rua Santos-o-Velho, 2 e 4",
      texto: { pt: "Conhecido pelos pequenos-almoços e brunch.", en: "Known for breakfast and brunch.",
               fr: "Réputé pour ses petits-déjeuners et brunchs.", es: "Conocido por sus desayunos y brunch." } },
    { nome: "Santos", morada: "Rua da Esperança",
      texto: { pt: "Vários cafés, bares e restaurantes a curta distância.", en: "Plenty of cafés, bars and restaurants a short walk away.",
               fr: "Nombreux cafés, bars et restaurants à quelques pas.", es: "Varios cafés, bares y restaurantes a poca distancia." } },
  ],
  restaurantesNota: {
    pt: "Horários e dias de encerramento podem mudar. Confirme antes de ir e reserve com antecedência quando possível.",
    en: "Opening hours and closing days may change. Check before you go and book ahead when possible.",
    fr: "Les horaires et jours de fermeture peuvent changer. Vérifiez avant de vous déplacer et réservez à l'avance si possible.",
    es: "Los horarios y días de cierre pueden cambiar. Confirme antes de ir y reserve con antelación cuando sea posible.",
  },
};
