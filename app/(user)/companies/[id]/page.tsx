import { TrendingCompany } from '../../../../typing';
import { notFound } from 'next/navigation';
import { getCompany } from '../../../../lib/getCompany';
import Image from 'next/image';

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
  const company: TrendingCompany = getCompany(id, companies);

  if (!company) {
    return notFound();
  }
  return (
    <div className="w-full bg-slate-200 py-3 px-6 max-w-lg rounded-md">
      <div className="flex items-center justify-between p-3 bg-slate-400/40 rounded-md ">
        <Image
          src={company.logoLightUrl}
          width={100}
          height={100}
          alt={company.companyName}
        />
        <p>{company.companyName}</p>
      </div>
      <div className="pt-3">
        <p className="text-sm">{company.description}</p>
      </div>
    </div>
  );
}

export default Company;

const getCompanies = async () => {
  const res = await fetch('http://localhost:3000/api/companies');
  const data = await res.json();
  const companies: TrendingCompany[] = data.data;
  return companies;
};
export async function generateStaticParams() {
  const companies: TrendingCompany[] = await getCompanies();
  console.log(
    'COMPANIES IN GENERATE-------->',
    companies.map((company) => ({
      id: String(company.companyId),
    }))
  );
  return companies.map((company) => ({
    id: String(company.companyId),
  }));
}
