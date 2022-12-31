import { Inter } from '@next/font/google';
import WrapperLink from '../../ui/WrapperLink';
const inter = Inter({ subsets: ['latin'] });

async function HomePage() {
  return (
    <div>
      <main className="flex items-center justify-center h-screen w-full bg-slate-50 animate-pulse">
        <WrapperLink href="/companies">
          <h1 className="text-center text-4xl">HomePage</h1>
        </WrapperLink>
        {/*@ts-ignore */}
      </main>
    </div>
  );
}
export default HomePage;
