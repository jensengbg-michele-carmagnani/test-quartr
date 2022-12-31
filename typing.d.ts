export interface TrendingCompany {
  companyId: number;
  companyName: string;
  companyCountry: string;
  companyTicker: string;
  displayName: string;
  infoUrl: string;
  liveUrl: string;
  logoLightUrl: string;
  logoDarkUrl: string;
  iconUrl: string | null;
  description: string;
  reportingCurrency: string;
  colorSettings: {
    brandColor: string;
  };
  events: Events[];
  isins: string[];
}

type Events = {
  audioUrl?: string | null;
  reportUrl: string;
  pdfUrl: string | null;
  eventId: number;
  eventTitle: string;
  eventDate: string;
  qnaTimestamp: number | null;
  fiscalPeriod: string;
  fiscalYear: string;
};

export type ErrorMessage = {
  message: string;
};

export type Data = {
  data: TrendingCompany[];
};
