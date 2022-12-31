import { ErrorMessage, TrendingCompany } from './../typing.d';

export const getCompany = (id: string, data: TrendingCompany[]) => {
  const companies = data;

  const company = companies.find((company) => company.companyId === +id);

  return company as TrendingCompany;
};
