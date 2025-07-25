import '../styles/globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Bugedo',
  description: 'Portfolio created with Next.js 15, TailwindCSS v4, and Radix Themes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Theme appearance="dark" accentColor="gray" radius="medium" scaling="95%">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
