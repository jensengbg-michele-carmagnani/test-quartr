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
  console.log(companies);
  return (
    <div className="pt-10 px-10 overflow-y-scroll">
      <WrapperLink href="/companies">
        <h2 className="text-gray-300">Trending Company</h2>
      </WrapperLink>
      {companies.map((company: TrendingCompany) => (
        <WrapperLink
          key={company.companyId}
          href={`companies/${company.companyId.toString()}`}
        >
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
