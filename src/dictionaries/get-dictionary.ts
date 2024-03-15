import { TLocale } from "@/types/locale";

const dictionaries = {
  vi: () => import("./vi.json").then((m) => m.default),
  "en-US": () => import("./en.json").then((m) => m.default),
};

export async function getDictionary(locale: TLocale) {
  return dictionaries[locale]();
}
