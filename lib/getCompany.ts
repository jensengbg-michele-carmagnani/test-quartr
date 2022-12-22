import { TrendingCompany } from './../typing.d';
export const getCompany = (id: string, data: TrendingCompany[]) => {
  if (!data) return { message: 'Missing company id' };
  const companies = data;
  const company = companies.find((company) => company.companyId === +id);
  if (!company) return { message: 'Company not found' };
  return company as TrendingCompany;
};
