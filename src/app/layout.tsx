import type { Metadata } from 'next';

import { QueryProvider } from '@/lib/query/provider';
import { StoreProvider } from '@/store/provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'ContentHub',
  description: 'A modern content explorer built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <QueryProvider>{children}</QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
