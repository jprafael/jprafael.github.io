export type Locale = "pt" | "en";

export const messages = {
  pt: {
    home: "Início",
    events: "Eventos",
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
