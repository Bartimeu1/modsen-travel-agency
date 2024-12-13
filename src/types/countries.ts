interface Language {
  name: string;
}

interface Country {
  id: string;
  name: string;
  currency: string;
  languages: Language[];
}

export interface CountriesData {
  countries: Country[];
}
