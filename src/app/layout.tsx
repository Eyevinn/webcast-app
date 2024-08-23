import { Providers } from './providers';

import './globals.css';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
