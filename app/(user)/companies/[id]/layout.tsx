import TrendCompaniesList from '../TrendCompaniesList';
import ItemList from '../TrendCompaniesList';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex ">
      <div className="pl-10 overflow-auto">
        {/* @ts-ignore */}
        <TrendCompaniesList />
      </div>
      <div className="flex-1 overflow-hidden fixed top-[10%] left-[40%]">
        {children}
      </div>
    </main>
  );
}
