'use client';

import Link from 'next/link';
type Props = {
  children: React.ReactNode;
  href: string;
};
function WrapperLink({ children, href }: Props) {
  return <Link href={`${href}`}>{children}</Link>;
}

export default WrapperLink;
