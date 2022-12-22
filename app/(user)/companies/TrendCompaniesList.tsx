import { TrendingCompany } from '../../../typing';
import TrendCompany from './TrendCompany';
import WrapperLink from '../../../ui/WrapperLink';

const fetchTrendingCompanies = async () => {
  const res = await fetch('http://localhost:3000/api/companies', {
    next: {
      revalidate: 60,
    },
  });
  const data = await res.json();
  const companies: TrendingCompany[] = data.data;
  return companies;
};

async function TrendCompaniesList() {
  const companies = await fetchTrendingCompanies();
  return (
    <div className="pt-10 px-10 w-screen">
      <h2 className="text-gray-300">Trending Company</h2>
      {companies.map((company: TrendingCompany) => (
        <WrapperLink href={`companies/${company.companyId.toString()}`}>
          <TrendCompany
            companyName={company.companyName}
            logoUrl={company.logoLightUrl}
            description={company.description}
          />
        </WrapperLink>
      ))}
    </div>
  );
}

export default TrendCompaniesList;
