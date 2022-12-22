import { TrendingCompany } from '../../../../typing';
import { getCompany } from '../../../../lib/getCompany';

type Props = {
  params: {
    id: string;
  };
};

const fetchCompanies = async () => {
  const res = await fetch(`http://localhost:3000/api/companies`, {
    cache: 'force-cache',
  });
  const data = await res.json();
  const company: TrendingCompany[] = data.data;
  return company;
};

async function Company({ params: { id } }: Props) {
  const companies: TrendingCompany[] = await fetchCompanies();
  const company = getCompany(id, companies);
  return <div>{JSON.stringify(company)}</div>;
}

export default Company;

const getCompanies = async () => {
  const res = await fetch('http://localhost:3000/api/companies', {});
  const data = await res.json();
  const companies: TrendingCompany[] = data.data;
  return companies;
};
export async function generateStaticParams() {
  const companies: TrendingCompany[] = await getCompanies();
  return companies.map((company) => ({
    id: String(company.companyId),
  }));
}
