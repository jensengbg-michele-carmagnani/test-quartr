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
      <body className=" ">{children}</body>
    </html>
  );
}
