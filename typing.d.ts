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
  iconUrl: string;
  description: string;
  reportingCurrency: string;
  colorSettings: {
    brandColor: string;
  };
  events: Events[];
  isins: [];
}

type Events = {
  audioUrl: string;
  reportUrl: string;
  pdfUrl: string;
  eventId: number;
  eventTitle: string;
  eventDate: string;
  qnaTimestamp: number;
  fiscalPeriod: string;
  fiscalYear: string;
};

export type ErrorMessage = {
  message: string;
};
