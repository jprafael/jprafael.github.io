export type Locale = "pt" | "en";

export const messages = {
  pt: {
    home: "Início",
    events: "Eventos",
    eventsDescription: "Os encontros semanais têm como objetivo conviver enquanto se jogam jogos de tabuleiro num ambiente descontraído, onde ganhar não é o mais importante.",
    eventsOpenAndFree: "Os encontros são abertos e gratuitos. Qualquer pessoa que queira jogar é bem-vinda e não necessita de conhecer as regras dos jogos, pois haverá sempre alguém disponível para as explicar.",
    eventsVariety: "Existem jogos para todos os gostos, pelo que poderás escolher e experimentar aqueles que forem mais do teu agrado. Não é necessário trazer jogos.",
    eventsContactPrefix: "Em caso de dúvidas, não hesites em",
    eventsContactLink: "contactar-nos",
    contact: "Contactos",
    contactIntro: "Fala connosco por email ou através das nossas redes e comunidades.",
    contactWhatsappNote: "O grupo está sobretudo ativo no WhatsApp. Junta-te ao grupo para acompanhares as novidades, combinares jogos e falares connosco.",
    email: "Email",
    whatsappGroup: "Grupo de WhatsApp",
    regularEvents: "Eventos regulares",
    weeklySchedule: "Todas as segundas-feiras",
    weeklyTime: "das 19:30 às 22:30",
    monthlySchedule: "No último sábado de cada mês",
    monthlyTime: "das 10:30 às 23:30",
    atLocation: "em",
    nextEvent: "Próximo evento",
    allEvents: "Ver todos os eventos",
    upcoming: "Próximas datas",
    pastEvents: "Eventos anteriores",
    pastEvent: "Evento anterior",
    showMore: "Mostrar mais",
    location: "Local",
    directions: "Como chegar",
    maps: "Abrir no Google Maps",
    schedule: "Horário",
    more: "Ver evento",
    noEvents: "Ainda não há eventos agendados.",
    types: { Weekly: "Semanal", Monthly: "Mensal", InvictaCon: "InvictaCon" },
  },
  en: {
    home: "Home",
    events: "Events",
    eventsDescription: "Our weekly meetups are a chance to socialise over board games in a relaxed environment where winning is not the most important thing.",
    eventsOpenAndFree: "The meetups are open to everyone and completely free. Anyone who wants to play is welcome, and you do not need to know the rules because someone will always be available to explain them.",
    eventsVariety: "There are games for every taste, so you can choose and try whichever ones appeal to you most. You do not need to bring any games.",
    eventsContactPrefix: "If you have any questions, do not hesitate to",
    eventsContactLink: "contact us",
    contact: "Contact",
    contactIntro: "Get in touch by email or through our social channels and communities.",
    contactWhatsappNote: "The group is most active on WhatsApp. Join the group to keep up with the latest news, arrange games, and chat with us.",
    email: "Email",
    whatsappGroup: "WhatsApp group",
    regularEvents: "Regular events",
    weeklySchedule: "Every Monday",
    weeklyTime: "from 19:30 to 22:30",
    monthlySchedule: "On the last Saturday of every month",
    monthlyTime: "from 10:30 to 23:30",
    atLocation: "at",
    nextEvent: "Next event",
    allEvents: "View all events",
    upcoming: "Upcoming dates",
    pastEvents: "Past events",
    pastEvent: "Past event",
    showMore: "Show more",
    location: "Location",
    directions: "Directions",
    maps: "Open in Google Maps",
    schedule: "Schedule",
    more: "View event",
    noEvents: "There are no events scheduled yet.",
    types: { Weekly: "Weekly", Monthly: "Monthly", InvictaCon: "InvictaCon" },
  },
} as const;

export const pathFor = (locale: Locale, path = "") =>
  path || "/";

export const eventPath = (locale: Locale, slug: string) =>
  `/events/${slug}/`;

export const eventsPath = (locale: Locale) =>
  "/events/";

export const locationPath = (locale: Locale, slug: string) =>
  `/locations/${slug}/`;
