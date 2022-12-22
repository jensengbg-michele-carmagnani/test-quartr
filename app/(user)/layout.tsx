import './globals.css';
import 'tailwindcss/tailwind.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-full flex justify-center mx-auto">
        {children}
      </body>
    </html>
  );
}
