import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "./i18n";

export type EventEntry = CollectionEntry<"events">;
export type LocationEntry = CollectionEntry<"locations">;

export const localizedEvent = (event: EventEntry, locale: Locale) => ({
  title: event.data[`title_${locale}`],
  description: event.data[`description_${locale}`],
});

export const nextDate = (event: EventEntry, now = new Date()) =>
  [...event.data.dates].sort((a, b) => a.start.getTime() - b.start.getTime())
    .find(({ end }) => end >= now) ?? event.data.dates.at(-1)!;

export const lastDate = (event: EventEntry) =>
  [...event.data.dates].sort((a, b) => b.end.getTime() - a.end.getTime())[0];

export const isPastEvent = (event: EventEntry, now = new Date()) =>
  lastDate(event).end < now;

export const getEvents = async () => {
  const now = new Date();
  const events = await getCollection("events");
  return events.sort((a, b) => {
    const aPast = isPastEvent(a, now);
    const bPast = isPastEvent(b, now);
    if (aPast !== bPast) return aPast ? 1 : -1;
    if (aPast && bPast) return lastDate(b).end.getTime() - lastDate(a).end.getTime();
    const aDate = nextDate(a, now);
    const bDate = nextDate(b, now);
    return aDate.start.getTime() - bDate.start.getTime();
  });
};

export const getLocations = async () => getCollection("locations");

export const getLocation = (locations: LocationEntry[], reference: { id: string }) =>
  locations.find((location) => location.id === reference.id);
